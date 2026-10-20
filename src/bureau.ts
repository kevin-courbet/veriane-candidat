// Original candidate desk interactions, with static documents and local-only notes.
import documentsSource from "./documents.json";

type DocumentPiece = {
  id: string; titre: string; type: string; largeur: number;
  x: number; y: number; rotation: number; html: string; lectureHtml?: string;
};
type Position = { x: number; y: number };
type Camera = Position & { zoom: number };
type Note = Position & { id: string; texte: string };

function element<T extends HTMLElement = HTMLElement>(selector: string): T {
  const found = document.querySelector<T>(selector);
  if (!found) throw new Error(`Élément du bureau introuvable : ${selector}`);
  return found;
}
const vue = element("#vue");
const monde = element("#monde");
const niveauZoom = element("#zoom-niveau");
const documents: DocumentPiece[] = documentsSource;
const ZOOM_MIN = 0.15;
const ZOOM_MAX = 2.5;
let camera: Camera = { x: 40, y: 30, zoom: 0.55 };
let positions: Record<string, Position> = {};
let notes: Note[] = [];
let zSuivant = 10;

// file:// storage policies vary by browser; persistence is optional.
const cle = (nom: string) => `veriane:candidate-offline:v1:${nom}`;
const stockage = {
  lire<T>(nom: string, defaut: T): T {
    try {
      const value = localStorage.getItem(cle(nom));
      return value === null ? defaut : JSON.parse(value);
    } catch { return defaut; }
  },
  ecrire(nom: string, value: unknown) {
    try { localStorage.setItem(cle(nom), JSON.stringify(value)); } catch {}
  },
};
function estPosition(value: unknown): value is Position {
  return typeof value === "object" && value !== null
    && "x" in value && Number.isFinite(value.x)
    && "y" in value && Number.isFinite(value.y);
}

function appliquerCamera() {
  monde.style.transform = `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})`;
  const pas = 28 * camera.zoom;
  vue.style.backgroundSize = `${pas}px ${pas}px`;
  vue.style.backgroundPosition = `${camera.x}px ${camera.y}px`;
  niveauZoom.textContent = `${Math.round(camera.zoom * 100)} %`;
  stockage.ecrire("camera", camera);
}
function zoomerAutour(clientX: number, clientY: number, facteur: number) {
  const r = vue.getBoundingClientRect();
  const px = clientX - r.left, py = clientY - r.top;
  const zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, camera.zoom * facteur));
  const k = zoom / camera.zoom;
  camera = { x: px - (px - camera.x) * k, y: py - (py - camera.y) * k, zoom };
  appliquerCamera();
}
function zoomerAuCentre(facteur: number) {
  const r = vue.getBoundingClientRect();
  zoomerAutour(r.left + r.width / 2, r.top + r.height / 2, facteur);
}
function versMonde(clientX: number, clientY: number): Position {
  const r = vue.getBoundingClientRect();
  return { x: (clientX - r.left - camera.x) / camera.zoom, y: (clientY - r.top - camera.y) / camera.zoom };
}
function cadrer(feuilles: HTMLElement[]) {
  if (feuilles.length === 0) return;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const f of feuilles) {
    minX = Math.min(minX, f.offsetLeft);
    minY = Math.min(minY, f.offsetTop);
    maxX = Math.max(maxX, f.offsetLeft + f.offsetWidth);
    maxY = Math.max(maxY, f.offsetTop + f.offsetHeight);
  }
  const r = vue.getBoundingClientRect(), marge = 40;
  const largeur = Math.max(1, maxX - minX), hauteur = Math.max(1, maxY - minY);
  const zoom = Math.min(1, Math.max(ZOOM_MIN, Math.min((r.width - 2 * marge) / largeur, (r.height - 2 * marge) / hauteur)));
  camera = { zoom, x: marge - minX * zoom + (r.width - 2 * marge - largeur * zoom) / 2, y: marge - minY * zoom };
  appliquerCamera();
}
function toutVoir() { cadrer(Array.from(monde.children) as HTMLElement[]); }
vue.addEventListener("wheel", e => {
  e.preventDefault();
  zoomerAutour(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.0015));
}, { passive: false });
vue.addEventListener("pointerdown", e => {
  if (e.target !== vue && e.target !== monde) return;
  const depart = { x: e.clientX, y: e.clientY, cx: camera.x, cy: camera.y };
  vue.setPointerCapture(e.pointerId);
  vue.classList.add("deplacement");
  const bouger = (m: PointerEvent) => {
    camera.x = depart.cx + m.clientX - depart.x;
    camera.y = depart.cy + m.clientY - depart.y;
    appliquerCamera();
  };
  const finir = () => {
    vue.classList.remove("deplacement");
    vue.removeEventListener("pointermove", bouger);
    vue.removeEventListener("pointerup", finir);
    vue.removeEventListener("pointercancel", finir);
  };
  vue.addEventListener("pointermove", bouger);
  vue.addEventListener("pointerup", finir);
  vue.addEventListener("pointercancel", finir);
});
vue.addEventListener("dblclick", e => {
  if (e.target !== vue && e.target !== monde) return;
  const p = versMonde(e.clientX, e.clientY);
  const note: Note = { id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, x: Math.round(p.x - 110), y: Math.round(p.y - 20), texte: "" };
  notes.push(note);
  sauverNotes();
  poserNote(note).querySelector<HTMLElement>(".contenu")!.focus();
});
element("#zoom-plus").addEventListener("click", () => zoomerAuCentre(1.2));
element("#zoom-moins").addEventListener("click", () => zoomerAuCentre(1 / 1.2));
element("#tout-voir").addEventListener("click", toutVoir);
element("#ranger").addEventListener("click", () => {
  positions = {};
  stockage.ecrire("positions", positions);
  for (const doc of documents) {
    const el = element(`#feuille-${doc.id}`);
    el.style.left = `${doc.x}px`;
    el.style.top = `${doc.y}px`;
  }
  toutVoir();
});

function devantTout(el: HTMLElement) { el.style.zIndex = String(++zSuivant); }
function rendreDeplacable(el: HTMLElement, poignee: HTMLElement, surDeplacement: (x: number, y: number) => void) {
  poignee.addEventListener("pointerdown", e => {
    if ((e.target as Element).closest("button, a")) return;
    e.preventDefault();
    devantTout(el);
    el.classList.add("saisie-active");
    const depart = { x: e.clientX, y: e.clientY, gauche: el.offsetLeft, haut: el.offsetTop };
    poignee.setPointerCapture(e.pointerId);
    const bouger = (m: PointerEvent) => {
      el.style.left = `${Math.round(depart.gauche + (m.clientX - depart.x) / camera.zoom)}px`;
      el.style.top = `${Math.round(depart.haut + (m.clientY - depart.y) / camera.zoom)}px`;
    };
    const finir = () => {
      el.classList.remove("saisie-active");
      poignee.removeEventListener("pointermove", bouger);
      poignee.removeEventListener("pointerup", finir);
      poignee.removeEventListener("pointercancel", finir);
      surDeplacement(el.offsetLeft, el.offsetTop);
    };
    poignee.addEventListener("pointermove", bouger);
    poignee.addEventListener("pointerup", finir);
    poignee.addEventListener("pointercancel", finir);
  });
  el.addEventListener("pointerdown", () => devantTout(el));
}
function creerFeuille({ id, titre, type, largeur, x, y, rotation }: Omit<DocumentPiece, "html">) {
  const el = document.createElement("article");
  el.className = `feuille type-${type}`;
  el.id = `feuille-${id}`;
  Object.assign(el.style, { left: `${x}px`, top: `${y}px`, width: `${largeur}px`, transform: `rotate(${rotation}deg)`, zIndex: String(++zSuivant) });
  const poignee = document.createElement("div");
  poignee.className = "poignee";
  poignee.title = "Glisser pour déplacer · double-clic pour lire en grand";
  const etiquette = document.createElement("span");
  etiquette.textContent = titre;
  const actions = document.createElement("span");
  actions.className = "actions";
  poignee.append(etiquette, actions);
  const contenu = document.createElement("div");
  contenu.className = "contenu";
  el.append(poignee, contenu);
  return { el, poignee, actions, contenu };
}
function bouton(texte: string, titre: string, action: () => void) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = texte;
  b.title = titre;
  b.setAttribute("aria-label", titre);
  b.addEventListener("click", action);
  return b;
}
function poserDocument(doc: DocumentPiece) {
  const place = positions[doc.id] ?? { x: doc.x, y: doc.y };
  const { el, poignee, actions, contenu } = creerFeuille({ ...doc, ...place });
  contenu.innerHTML = doc.html; // Reviewed static candidate documents only.
  if (doc.type !== "indication") {
    actions.append(bouton("⤢", "Lire en grand", () => ouvrirLecture(doc)));
    poignee.addEventListener("dblclick", () => ouvrirLecture(doc));
  }
  rendreDeplacable(el, poignee, (x, y) => {
    positions[doc.id] = { x, y };
    stockage.ecrire("positions", positions);
  });
  monde.append(el);
}
function sauverNotes() { stockage.ecrire("notes", notes); }
function poserNote(note: Note) {
  const { el, poignee, actions, contenu } = creerFeuille({ ...note, titre: "Post-it", type: "postit", largeur: 240, rotation: 0 });
  contenu.contentEditable = "true";
  contenu.spellcheck = false;
  contenu.textContent = note.texte;
  contenu.addEventListener("input", () => {
    note.texte = contenu.innerText;
    sauverNotes();
  });
  // Keep notes as plain text, including pasted HTML from other applications.
  contenu.addEventListener("paste", e => {
    e.preventDefault();
    const text = e.clipboardData?.getData("text/plain") ?? "";
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    if (!contenu.contains(range.commonAncestorContainer)) return;
    range.deleteContents();
    const node = document.createTextNode(text);
    range.insertNode(node);
    range.setStartAfter(node);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    note.texte = contenu.innerText;
    sauverNotes();
  });
  actions.append(bouton("✕", "Supprimer le post-it", () => {
    notes = notes.filter(n => n.id !== note.id);
    sauverNotes();
    el.remove();
  }));
  rendreDeplacable(el, poignee, (x, y) => {
    note.x = x;
    note.y = y;
    sauverNotes();
  });
  monde.append(el);
  return el;
}

const lecture = element("#lecture");
let focusAvantLecture: HTMLElement | null = null;
function ouvrirLecture(doc: DocumentPiece) {
  focusAvantLecture = document.activeElement as HTMLElement;
  element("#lecture-titre").textContent = doc.titre || "Bienvenue";
  const zone = element("#lecture-contenu");
  zone.replaceChildren();
  const copie = document.createElement("div");
  copie.className = `feuille-lue type-${doc.type}`;
  const contenu = document.createElement("div");
  contenu.className = "contenu";
  contenu.innerHTML = doc.lectureHtml ?? doc.html;
  copie.append(contenu);
  zone.append(copie);
  zone.scrollTop = 0;
  lecture.hidden = false;
  element("#lecture-fermer").focus();
}
function fermerLecture() {
  lecture.hidden = true;
  focusAvantLecture?.focus();
}
element("#lecture-fermer").addEventListener("click", fermerLecture);
lecture.addEventListener("click", e => { if (e.target === lecture) fermerLecture(); });
document.addEventListener("keydown", e => {
  if (lecture.hidden) return;
  if (e.key === "Escape") fermerLecture();
  if (e.key === "Tab") {
    const focusables = Array.from(lecture.querySelectorAll<HTMLElement>("button, a[href], [tabindex='0']"));
    const first = focusables[0], last = focusables.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }
});
element("#technique").addEventListener("click", () => {
  const doc = documents.find(d => d.id === "technique");
  if (doc) ouvrirLecture(doc);
});

const sauvegarde = stockage.lire<unknown>("camera", null);
const cameraValide = estPosition(sauvegarde) && "zoom" in sauvegarde
  && typeof sauvegarde.zoom === "number" && sauvegarde.zoom >= ZOOM_MIN && sauvegarde.zoom <= ZOOM_MAX;
if (cameraValide) camera = sauvegarde as Camera;
const places = stockage.lire<unknown>("positions", {});
if (places && typeof places === "object") {
  for (const [id, place] of Object.entries(places)) if (estPosition(place)) positions[id] = place;
}
const brouillons = stockage.lire<unknown>("notes", []);
if (Array.isArray(brouillons)) {
  notes = brouillons.filter((n): n is Note => estPosition(n) && "id" in n && typeof n.id === "string" && /^note-[\w-]+$/.test(n.id) && "texte" in n && typeof n.texte === "string");
}
for (const doc of documents) poserDocument(doc);
for (const note of notes) poserNote(note);
appliquerCamera();
if (!cameraValide) {
  const accueil = ["commencez", "accueil", "organigramme"].map(id => element(`#feuille-${id}`));
  cadrer(accueil);
  // Reframe after locally bundled fonts finish loading.
  void document.fonts?.ready.then(() => cadrer(accueil));
}
