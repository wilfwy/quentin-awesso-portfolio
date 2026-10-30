import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const SITE = "https://quentin-awesso-site.vercel.app";
const HERO = `${SITE}/hero-quentin.jpg`;
const STORY = `${SITE}/parcours-quentin.jpg`;
const WA = "https://wa.me/message/HIAVD6LDHEF7M1";
const TIKTOK = "https://www.tiktok.com/@quentin.digital.store?_r=1&_t=ZN-9AujzlD79IU";
const CHECKOUT = "https://chariow.shop/formation-marketing-digital/checkout?chw_pvar=P94ZET";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quentin AWESSO — Expert en marketing e-commerce & digital" },
      { name: "description", content: "Expert en marketing e-commerce et marketing digital. Formation : 5 modules, 4 bonus, accompagnement et groupe VIP WhatsApp. Lance ton business digital en 2h." },
      { property: "og:title", content: "Quentin AWESSO — Expert en marketing e-commerce & digital" },
      { property: "og:description", content: "La structure bat la motivation. Formation complète pour lancer ton produit digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const stats = [
  { v: "2000$", l: "Générés personnellement en vente digitale" },
  { v: "500K", l: "Mon prochain objectif" },
  { v: "126", l: "Avis d'élèves" },
  { v: "98%", l: "De satisfaction" },
  { v: "05", l: "Modules transmis" },
];

const modules = [
  { n: "01", phase: "Phase 01", t: "Bienvenue dans la formation", d: "Le guide et la méthode pour avancer sans te perdre.", pts: ["Guide de démarrage", "Méthode de travail", "Objectifs clairs"] },
  { n: "02", phase: "Phase 01", t: "Les bases du marketing digital", d: "Comprendre les définitions et les pratiques qui font vendre.", pts: ["Définitions essentielles", "Bonnes pratiques", "Erreurs à éviter"] },
  { n: "03", phase: "Phase 01", t: "Les types de marketing digital", d: "PLR, MRR, affiliation : choisir le modèle qui te correspond.", pts: ["PLR & MRR", "Affiliation", "Choisir son modèle"] },
  { n: "04", phase: "Phase 02", t: "Créer et vendre son produit digital", d: "De la niche au trafic, avec Canva et l'IA.", pts: ["Trouver sa niche", "Créer avec Canva & IA", "Générer du trafic"] },
  { n: "05", phase: "Phase 02", t: "Tunnels de vente & passage à l'action", d: "Automatiser tes ventes et passer à l'action.", pts: ["Chariow", "Copywriting", "Séquences emails"] },
];

const bonus = [
  ["Guide des 5 erreurs à éviter", "10 000 FCFA"],
  ["Check-list de 5 prompts IA", "5 000 FCFA"],
  ["Accompagnement personnel", "50 000 FCFA"],
  ["Groupe VIP WhatsApp à vie", "Inestimable"],
];

const preuves = [
  ["01-cathy", "101 000 FCFA", "Cathy", "141 clients"],
  ["02-esther", "79 000 FCFA", "Esther Ahoefa", "51 clients"],
  ["03-nabil", "57 000 FCFA", "Nabil Bangane", "89 clients"],
  ["04-pascal", "33 000 FCFA", "Pascal", "13 clients"],
  ["05-adjovi", "28 000 FCFA", "Adjovi", "12 clients"],
  ["06-sessi", "15 000 FCFA", "Sessi-Monde", "5 ventes"],
  ["07-communaute", "12 000 FCFA", "Communauté", "4 ventes"],
];

const avis = [
  ["Cathy", "Et enfin 100k ! 😭 Façon dont j’étais impatiente, j’attendais ça grave. 😭"],
  ["Nabil Bangane", "Coach, 57k ! 🥵 😂 ✅ 💰"],
  ["Esther Ahoefa", "Hello boss voici la capture. 79 000 FCFA de revenus !"],
  ["Adjovi", "Voilà ! 28 000 FCFA. Désolé hier je n’avais pas vite vu vos messages."],
];

const histoire = [
  { k: "LE POINT DE DÉPART", t: "L'origine", d: "Fauché. Un téléphone. Une connexion. C'est tout.", tags: ["Zéro moyen", "Détermination"] },
  { k: "LE DÉCLIC", t: "L'éveil", d: "La vente digitale. Pas de stock. Pas de local.", tags: ["Produits digitaux", "Premiers tests"] },
  { k: "LE TERRAIN", t: "La méthode", d: "Le tunnel de vente. Automatiser la réussite.", tags: ["Tunnels", "Automatisation"] },
  { k: "AUJOURD'HUI", t: "Le partage", d: "Transmettre ce qui a fonctionné. 2000$ générés, objectif 500K.", tags: ["Formation", "Communauté"], now: true },
];

const faq = [
  ["Je suis complètement débutant, est-ce pour moi ?", "Oui. Tout est expliqué simplement, sans jargon."],
  ["Est-ce que cette méthode fonctionne vraiment ?", "Oui. Toutes les stratégies sont testées et applicables."],
  ["Est-ce que je dois déjà avoir une idée ?", "Non. La formation vous aide à la clarifier."],
  ["Combien de temps pour voir des résultats ?", "Vous appliquez dès aujourd'hui, les premiers résultats suivent."],
  ["Vais-je vraiment pouvoir lancer quelque chose ?", "Oui, si vous suivez les étapes. La méthode est faite pour ça."],
];

const btnPrimary = "inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:opacity-90";
const btnGhost = "inline-flex items-center justify-center rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-bold text-foreground transition hover:bg-card";

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-6xl px-5 py-20 md:py-28 ${className}`}>{children}</section>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const [zoom, setZoom] = useState<string | null>(null);
  const nav = [["Parcours", "#parcours"], ["Formation", "#offres"], ["Témoignages", "#temoignages"], ["Transformation", "#transformation"], ["Contact", "#contact"]];

  return (
    <div className="min-h-screen bg-hero text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-sm font-bold tracking-[0.2em]">QUENTIN.</a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-sm text-muted-foreground hover:text-foreground">{l}</a>)}
            <a href="#offre" className="rounded-full border border-border px-5 py-2.5 text-sm font-bold"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" />Rejoindre</a>
          </nav>
          <button className="md:hidden text-sm font-bold" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? "✕" : "☰"}</button>
        </div>
        {menu && (
          <div className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setMenu(false)} className="text-muted-foreground">{l}</a>)}
            <a href="#offre" onClick={() => setMenu(false)} className={btnPrimary}>Rejoindre la formation</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <Section className="grid items-center gap-12 md:grid-cols-2 !pt-12">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-gold/50 shadow-glow">
          <img src={HERO} alt="Photo de Quentin AWESSO" className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Disponible pour de nouveaux élèves</span>
          <div className="mt-3"><span className="inline-block rounded-full border border-primary/40 px-3 py-1.5 eyebrow">Expert en marketing e-commerce & marketing digital</span></div>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl">La structure bat la motivation.</h1>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground leading-relaxed">Je suis parti de rien : fauché, avec un téléphone et une connexion. J’ai appris la vente digitale, puis le tunnel de vente, et aujourd’hui je transmets ce qui a fonctionné pour moi.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className={btnPrimary}>Écrire sur WhatsApp</a>
            <a href="#offres" className={btnGhost}>Voir les offres</a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.l} className="card-glass p-4 text-left">
                <div className="mb-2 h-0.5 w-6 bg-primary" />
                <div className="font-serif text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* OFFRES / MODULES */}
      <Section id="offres">
        <p className="eyebrow text-center">Apprendre · Appliquer · Vendre</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl md:text-5xl">Choisis le prochain chapitre de ton business.</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">Une méthode claire, sans jargon, pour passer à l’action dès aujourd’hui.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <article key={m.n} className="card-glass relative flex flex-col p-6">
              {i === 0 && <span className="absolute right-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-bold text-primary-foreground">Populaire</span>}
              <p className="eyebrow">{m.n} / {m.phase}</p>
              <h3 className="mt-3 text-2xl">{m.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              <ul className="mt-4 space-y-2 text-sm">{m.pts.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">✓</span>{p}</li>)}</ul>
              <a href={CHECKOUT} target="_blank" rel="noreferrer" className="mt-auto pt-6 text-sm font-bold text-primary">Accéder à la formation →</a>
            </article>
          ))}
        </div>
      </Section>

      {/* ECOSYSTEME : 2 niveaux */}
      <Section>
        <p className="eyebrow">L’écosystème Quentin</p>
        <h3 className="mt-3 text-4xl">Choisis ton niveau <em className="text-primary">d’engagement.</em></h3>
        <p className="mt-4 max-w-xl text-muted-foreground">Une porte d’entrée pour apprendre, puis un accompagnement plus proche quand tu es prêt à accélérer.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { n: "01", k: "Accompagnement personnel", t: "Avancer avec moi, étape par étape", d: "Un suivi direct pour clarifier ton idée, créer ton produit et lancer tes premières ventes.", pts: ["Accompagnement personnel", "Guide des 5 erreurs à éviter", "Check-list de 5 prompts IA"], cta: "Écrire sur WhatsApp →", h: WA },
            { n: "02", k: "Accès à vie", t: "Le groupe VIP WhatsApp", d: "Des conseils, des ressources et des échanges pour ne jamais avancer seul.", pts: ["Conseils utiles", "Ressources et opportunités", "Suivi & orientation"], cta: "Rejoindre la formation →", h: CHECKOUT },
          ].map((e) => (
            <article key={e.n} className="card-glass flex flex-col p-6">
              <p className="eyebrow"><span className="font-serif text-primary">{e.n}</span> {e.k}</p>
              <h4 className="mt-3 text-2xl">{e.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              <ul className="mt-4 space-y-2 text-sm">{e.pts.map((p) => <li key={p} className="flex gap-2"><span className="text-accent">✓</span>{p}</li>)}</ul>
              <a href={e.h} target="_blank" rel="noreferrer" className="mt-auto pt-6 text-sm font-bold text-primary">{e.cta}</a>
            </article>
          ))}
        </div>
      </Section>

      {/* TEMOIGNAGES */}
      <Section id="temoignages">
        <h2 className="text-center text-4xl md:text-5xl">Ce que mes élèves montrent, pas ce que je raconte</h2>
        <p className="mt-4 text-center text-muted-foreground">Captures réelles · 98 % de satisfaction · 126 avis ★★★★★</p>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
          {preuves.map(([f, m, n, c]) => (
            <button key={f} onClick={() => setZoom(`${SITE}/preuves/${f}.jpg`)} className="card-glass w-60 shrink-0 snap-start overflow-hidden text-left">
              <img src={`${SITE}/preuves/${f}.jpg`} alt={`Capture de ${n} : ${m}`} className="aspect-[3/4] w-full object-cover" loading="lazy" />
              <div className="p-4"><div className="font-serif text-xl text-primary">{m}</div><div className="text-sm">{n} · <span className="text-muted-foreground">{c}</span></div></div>
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {avis.map(([n, q]) => (
            <blockquote key={n} className="card-glass p-6"><p className="font-serif text-lg">« {q} »</p><footer className="mt-3 text-sm text-muted-foreground">— {n}</footer></blockquote>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Résultats individuels — ils ne constituent pas une garantie de revenus.</p>
      </Section>

      {zoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-5" onClick={() => setZoom(null)}>
          <button className="absolute right-5 top-5 text-2xl" aria-label="Fermer">×</button>
          <img src={zoom} alt="Témoignage" className="max-h-full max-w-full rounded-xl" />
        </div>
      )}

      {/* TRANSFORMATION */}
      <Section id="transformation">
        <p className="eyebrow text-center">Avant → Après · 2 heures</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl">Le déclic ne suffit pas. <em className="text-primary">Il faut un chemin.</em></h2>
        <div className="mt-12 grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          <div className="card-glass p-6"><p className="eyebrow !text-muted-foreground">Avant</p><p className="mt-2 font-serif text-xl">Vous êtes perdu.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{["Vous êtes perdu", "Rien n'est clair", "Vous ne savez pas par où commencer"].map((x) => <li key={x}>✕ {x}</li>)}</ul></div>
          <div className="text-center font-serif text-3xl text-primary">→ 2h</div>
          <div className="card-glass border-primary/50 p-6"><p className="eyebrow">Après</p><p className="mt-2 font-serif text-xl">Vous lancez votre business.</p>
            <ul className="mt-4 space-y-2 text-sm">{["Vous comprenez enfin", "Vous savez quoi faire, étape par étape", "Vous lancez votre business"].map((x) => <li key={x}><span className="text-accent">✓</span> {x}</li>)}</ul></div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {["Comprendre", "Construire", "Vendre", "Progresser"].map((s, i) => <div key={s} className="card-glass p-4 text-center"><b className="text-primary">0{i + 1}</b> {s}</div>)}
        </div>
      </Section>

      {/* HISTOIRE */}
      <Section id="parcours" className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/50">
            <img src={STORY} alt="Quentin AWESSO dans son parcours" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 font-serif text-2xl">DU TÉLÉPHONE<br />AU BUSINESS</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="card-glass p-4"><div className="font-serif text-2xl">2000$</div><div className="text-xs text-muted-foreground">Générés</div></div>
            <div className="card-glass p-4"><div className="font-serif text-2xl">500K</div><div className="text-xs text-muted-foreground">Objectif</div></div>
          </div>
        </div>
        <div>
          <p className="eyebrow">✦ Mon histoire · Carnet de route</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Pas une ligne droite. <em className="text-primary">Une direction.</em></h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">Tout a commencé avec presque rien : fauché, un téléphone et une connexion. En découvrant la vente digitale — pas de stock, pas de local — j’ai trouvé ma voie. Puis le tunnel de vente m’a appris à automatiser la réussite. Aujourd’hui, je transmets ce qui a fonctionné.</p>
          <ol className="mt-10 space-y-5 border-l border-border pl-6">
            {histoire.map((h, i) => (
              <li key={h.t} className="card-glass relative p-6">
                <span className="absolute -left-[2.05rem] top-7 h-3 w-3 rounded-full bg-primary" />
                <p className="eyebrow">0{i + 1} · {h.k}</p>
                <h3 className="mt-2 text-2xl">{h.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.d}</p>
                <div className="mt-3 flex flex-wrap gap-2">{h.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 text-xs">{t}</span>)}</div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* OFFRE */}
      <Section id="offre">
        <h2 className="text-center text-4xl md:text-5xl">Tout est inclus.</h2>
        <div className="mx-auto mt-10 max-w-lg card-glass border-primary/50 p-8 shadow-glow">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-primary-foreground">Prix promo</span>
          <h3 className="mt-4 text-2xl">Formation Marketing Digital</h3>
          <ul className="mt-5 space-y-2 text-sm">
            {[["5 modules de formation", "Inclus"], ["4 bonus exclusifs", "+50 000 FCFA"], ["Accompagnement personnel", "Inclus"], ["Groupe VIP WhatsApp à vie", "Inclus"], ["Garantie satisfait ou remboursé", "7 jours"]].map(([a, b]) => (
              <li key={a} className="flex justify-between border-b border-border/60 pb-2"><span>{a}</span><b className="text-primary">{b}</b></li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">Valeur totale <s>80 000 FCFA</s> · Prix normal <s>15 000 FCFA</s></p>
          <p className="mt-1 font-serif text-5xl">5 000 FCFA</p>
          <a href={CHECKOUT} target="_blank" rel="noreferrer" className={`${btnPrimary} mt-6 w-full`}>Je rejoins la formation</a>
          <p className="mt-3 text-center text-xs text-muted-foreground">Testez 7 jours. Remboursé si ça ne vous apporte rien.</p>
        </div>

        <h3 className="mt-20 text-center text-3xl">Questions fréquentes</h3>
        <div className="mx-auto mt-6 max-w-2xl space-y-3">
          {faq.map(([q, a], i) => (
            <div key={q} className="card-glass">
              <button className="flex w-full justify-between gap-4 p-5 text-left font-semibold" onClick={() => setOpen(open === i ? null : i)}>{q}<span className="text-primary">{open === i ? "−" : "+"}</span></button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <h2 className="text-center text-4xl md:text-5xl">Échangeons et suivons l’aventure</h2>
        <p className="mt-4 text-center text-muted-foreground">Une question avant de vous lancer ? Écrivez-moi — je réponds personnellement.</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[["WhatsApp en direct", "La réponse la plus rapide.", WA], ["TikTok", "La méthode et les résultats en vidéo.", TIKTOK]].map(([t, d, h]) => (
            <a key={t} href={h} target="_blank" rel="noreferrer" className="card-glass flex items-center justify-between p-6 hover:border-primary/60">
              <div><b className="block font-serif text-xl">{t}</b><span className="text-sm text-muted-foreground">{d}</span></div><span className="text-primary">→</span>
            </a>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Quentin AWESSO · Expert en marketing e-commerce & marketing digital</footer>
    </div>
  );
}
