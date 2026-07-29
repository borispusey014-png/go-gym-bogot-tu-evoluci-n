import { createFileRoute } from "@tanstack/react-router";
import {
  Dumbbell,
  Users,
  Sparkles,
  Flame,
  Wallet,
  HeartPulse,
  Star,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
} from "lucide-react";

import logo from "@/assets/gogym-logo.png.asset.json";
import heroImg from "@/assets/hero-gym.jpg";
import aboutImg from "@/assets/about-gym.jpg";

const WHATSAPP = "https://wa.me/573228520247";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Go+Gym+Bogota+Cl+20a+96b-31+Bogot%C3%A1";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Go Gym Bogotá | Gimnasio con sauna y clases grupales" },
      {
        name: "description",
        content:
          "Go Gym Bogotá: máquinas de última generación, sauna, salón de espejos y clases grupales. 4.7★ con 231 opiniones. Cl. 20a #96b-31. Escríbenos por WhatsApp.",
      },
      { property: "og:title", content: "Go Gym Bogotá | Tu mejor versión empieza aquí" },
      {
        property: "og:description",
        content:
          "Máquinas completas, sauna, salón de espejos y clases grupales en Cl. 20a #96b-31, Bogotá.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ExerciseGym",
          name: "Go Gym Bogotá",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Cl. 20a #96b-31",
            addressLocality: "Bogotá",
            addressCountry: "CO",
          },
          telephone: "+57 322 8520247",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "231",
          },
        }),
      },
    ],
  }),
});

const servicios = [
  { icon: Dumbbell, titulo: "Máquinas completas", desc: "Amplio equipo de cardio y musculación" },
  { icon: Users, titulo: "Clases grupales", desc: "Entrenadores formales y profesionales" },
  { icon: Sparkles, titulo: "Salón de espejos", desc: "Ideal para funcional y baile" },
  { icon: Flame, titulo: "Sauna", desc: "Recuperación y relajación post-entreno" },
  { icon: Wallet, titulo: "Precios económicos", desc: "La mejor relación calidad-precio del sector" },
  { icon: HeartPulse, titulo: "Seguimiento personalizado", desc: "Pendientes de tu progreso semanal" },
];

const testimonios = [
  {
    nombre: "Ytb Premium",
    texto:
      "Excelente lugar, es económico, tienen la gran mayoría de máquinas, el personal es amable, tienen unas decoraciones muy chéveres.",
  },
  {
    nombre: "Luisa Oviedo",
    texto:
      "Este gimnasio ofrece mucho más de lo necesario. El ambiente es muy agradable, el personal amable. Me encantó el salón de espejos y el sauna es demasiado lindo.",
    respuesta: "Nos alegra que te hayas sentido cómoda en las instalaciones, bienvenida",
  },
  {
    nombre: "Liliana Herrera",
    texto:
      "Llevo mucho tiempo entrenando aquí y asisto a las clases grupales, los entrenadores son muy formales, muy buen ambiente y siempre pendientes de mis entrenamientos.",
    respuesta: "Gracias por tu constancia y que sigas regalándote salud y bienestar",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-star text-star" />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Zona de máquinas y pesas de Go Gym Bogotá"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:py-28">
          <img
            src={logo.url}
            alt="Logo Go Gym Bogotá"
            width={140}
            height={140}
            className="size-28 rounded-full sm:size-32"
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
            <Star className="size-3.5 fill-star text-star" /> 4.7 · 231 opiniones en Google
          </p>
          <h1 className="mt-5 text-5xl sm:text-7xl lg:text-8xl">
            Go Gym <span className="text-primary">Bogotá</span>
          </h1>
          <p className="mt-3 font-display text-xl tracking-wide text-primary sm:text-2xl">
            Tu mejor versión empieza aquí
          </p>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            El gimnasio más completo del sector con máquinas de última generación, sauna, salón de
            espejos y clases grupales.
          </p>
          <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-red inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-display text-lg tracking-wider text-primary-foreground uppercase transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircle className="size-5" /> Escríbenos por WhatsApp
            </a>
            <a
              href="#ubicacion"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-foreground/30 px-8 py-4 font-display text-lg tracking-wider uppercase transition-colors hover:bg-foreground/10 sm:w-auto"
            >
              <MapPin className="size-5" /> Ver ubicación
            </a>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-primary">
        <ul className="mx-auto grid max-w-6xl gap-3 px-5 py-5 text-center text-sm font-semibold text-primary-foreground sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex items-center justify-center gap-2">
            <Star className="size-4 shrink-0 fill-current" /> 4.7/5 en Google Maps
          </li>
          <li className="flex items-center justify-center gap-2">
            <Users className="size-4 shrink-0" /> 231+ opiniones reales
          </li>
          <li className="flex items-center justify-center gap-2">
            <Clock className="size-4 shrink-0" /> Abierto todos los días hasta las 9 p.m.
          </li>
          <li className="flex items-center justify-center gap-2">
            <MapPin className="size-4 shrink-0" /> Cl. 20a #96b-31, Bogotá
          </li>
        </ul>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="section-label">Sobre nosotros</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">
              Más que un <span className="text-primary">gimnasio</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              En Go Gym Bogotá encontrarás la gran mayoría de máquinas para tu entrenamiento,
              personal amable y capacitado, clases grupales, salón de espejos y un sauna para tu
              recuperación. Un ambiente cómodo donde te sentirás en familia.
            </p>
            <div className="mt-8 h-1 w-24 bg-primary" />
          </div>
          <img
            src={aboutImg}
            alt="Instalaciones de Go Gym Bogotá: salón de espejos y sauna"
            width={1200}
            height={1008}
            loading="lazy"
            className="w-full rounded-sm border border-border object-cover"
          />
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <p className="section-label">Servicios</p>
        <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          Todo lo que necesitas en un <span className="text-primary">solo lugar</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <article
              key={s.titulo}
              className="group rounded-sm border border-border bg-card p-7 transition-colors hover:border-primary"
            >
              <s.icon className="size-9 text-primary" />
              <h3 className="mt-5 text-2xl">{s.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OPINIONES */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="section-label">Opiniones</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            Lo que dicen nuestros <span className="text-primary">miembros</span>
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="size-4 fill-star text-star" /> 4.7 basado en 231 opiniones de Google
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonios.map((t) => (
              <figure key={t.nombre} className="flex flex-col rounded-sm border border-border bg-card p-7">
                <Stars />
                <blockquote className="mt-4 grow text-sm leading-relaxed text-muted-foreground">
                  “{t.texto}”
                </blockquote>
                <figcaption className="mt-5 font-display text-lg tracking-wide">{t.nombre}</figcaption>
                {t.respuesta && (
                  <p className="mt-4 border-l-2 border-primary pl-4 text-xs text-muted-foreground italic">
                    Respuesta del dueño: {t.respuesta}
                  </p>
                )}
              </figure>
            ))}
          </div>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
          >
            Ver más opiniones en Google Maps
          </a>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="mx-auto max-w-6xl scroll-mt-10 px-5 py-20 lg:py-28">
        <p className="section-label">Ubicación</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">
          Visít<span className="text-primary">anos</span>
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="text-xl">Dirección</h3>
                <p className="text-sm text-muted-foreground">Cl. 20a #96b - 31, Bogotá</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="text-xl">Horario</h3>
                <p className="text-sm text-muted-foreground">
                  Abierto todos los días · Cierra a las 9 p.m.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="text-xl">Teléfono</h3>
                <p className="text-sm text-muted-foreground">322 8520247</p>
              </div>
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-display tracking-wider text-primary-foreground uppercase"
            >
              <Navigation className="size-4" /> Cómo llegar
            </a>
          </div>
          <iframe
            title="Mapa de Go Gym Bogotá"
            src="https://www.google.com/maps?q=Cl.%2020a%20%2396b-31%2C%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-sm border border-border lg:h-full"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center text-primary-foreground">
          <h2 className="text-4xl sm:text-6xl">¿Listo para empezar a entrenar?</h2>
          <p className="mt-4 text-base sm:text-lg">
            Escríbenos ahora y te contamos los planes disponibles.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-background px-8 py-4 font-display text-lg tracking-wider text-foreground uppercase transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-5" /> Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <img src={logo.url} alt="Logo Go Gym Bogotá" width={80} height={80} loading="lazy" className="size-16 rounded-full" />
          <div className="min-w-0">
            <p className="font-display text-2xl tracking-wide">Go Gym Bogotá</p>
            <p className="mt-1 text-sm text-muted-foreground">Cl. 20a #96b - 31, Bogotá</p>
            <p className="text-sm text-muted-foreground">322 8520247</p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary"
          >
            <MessageCircle className="size-4 text-whatsapp" /> WhatsApp
          </a>
        </div>
        <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © 2026 Go Gym Bogotá. Todos los derechos reservados.
        </p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
