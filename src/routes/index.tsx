import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Heart,
  Siren,
  Stethoscope,
  Home,
  Instagram,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paw Rescue — Help for strays, day and night" },
      {
        name: "description",
        content:
          "Paw Rescue feeds, rescues, and treats stray animals across the city. Join feeding drives, emergency rescues, medical aid, and adoption support.",
      },
      { property: "og:title", content: "Paw Rescue — Help for strays, day and night" },
      {
        property: "og:description",
        content:
          "Feeding drives, emergency rescue, medical aid, and adoption support for street animals. A warm helping hand, around the clock.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Navbar ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#what-we-do", label: "What We Do" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-primary animate-pulse-glow" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            Paw Rescue
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Volunteer
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-secondary transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mb-4 rounded-2xl border border-border bg-card p-5">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full justify-center"
          >
            Volunteer
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Helping strays, day and night
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Every stray deserves{" "}
            <span className="text-primary text-glow">a safe corner.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We feed, rescue, and treat stray animals across the city — because
            help shouldn&apos;t depend on the time of day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Donate a Meal
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#what-we-do" className="btn-ghost">
              See Our Work
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "12k+", v: "Meals served" },
              { k: "800+", v: "Rescues" },
              { k: "24/7", v: "On call" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-2xl text-primary sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <PawIllustration />
      </div>
    </section>
  );
}

function PawIllustration() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div className="relative aspect-square w-full max-w-[420px] rounded-full border border-border bg-card/40 backdrop-blur-sm glow-amber">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full p-10"
          aria-label="Paw print with a warm glow"
          role="img"
        >
          <defs>
            <radialGradient id="pad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          {/* toes */}
          <ellipse cx="60" cy="70" rx="14" ry="20" fill="url(#pad)" />
          <ellipse cx="90" cy="52" rx="13" ry="19" fill="url(#pad)" />
          <ellipse cx="120" cy="52" rx="13" ry="19" fill="url(#pad)" />
          <ellipse cx="150" cy="70" rx="14" ry="20" fill="url(#pad)" />
          {/* main pad */}
          <path
            d="M105 95c-26 0-46 18-46 40 0 18 16 30 36 30h20c20 0 36-12 36-30 0-22-20-40-46-40z"
            fill="url(#pad)"
          />
        </svg>
        {/* soft inner ring */}
        <div className="absolute inset-6 rounded-full border border-primary/15" />
      </div>
    </div>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--sage)]">
            Our mission
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            We go wherever animals need us — at noon, at midnight, in the rain.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Paw Rescue is a small, stubbornly consistent team. We show up on
            the same streets, week after week, with food, warmth, and care.
            We&apos;re not trying to fix everything overnight — we&apos;re
            trying to make sure no animal is forgotten on the night it needs
            help most.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */

function Features() {
  const items = [
    {
      icon: Heart,
      title: "Feeding Drives",
      body: "Regular meal routes through neighborhoods, parks, and quiet alleys — same time, same place, every week.",
    },
    {
      icon: Siren,
      title: "Emergency Rescue",
      body: "A rapid-response line for injured or trapped animals. Real humans, day or night, ready to come out.",
    },
    {
      icon: Stethoscope,
      title: "Medical Aid",
      body: "Mobile first-aid kits and a network of vets for vaccinations, treatment, and recovery care.",
    },
    {
      icon: Home,
      title: "Adoption Help",
      body: "Gentle rehabilitation, behavior support, and careful matching with families who&apos;ll love them back.",
    },
  ];

  return (
    <section id="what-we-do" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--sage)]">
              What we do
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Four ways we show up.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="group relative h-full rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_20px_60px_-20px_var(--amber-glow)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body.replace("&apos;", "'")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CtaStrip() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)",
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                You don&apos;t need a uniform to help.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Walk a feeding route with us. Foster a recovering pup for two
                weeks. Cover a vet bill. Small acts, repeated, are what keep
                this work alive.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="mailto:hello@pawrescue.demo" className="btn-primary">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#what-we-do" className="btn-sage">
                Foster &amp; Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-serif text-lg font-semibold">Paw Rescue</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A warm helping hand for street animals — day, night, and every
            quiet hour between.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#what-we-do" className="hover:text-primary transition-colors">What We Do</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Follow
          </h4>
          <ul className="mt-4 flex gap-3">
            <li>
              <a aria-label="Instagram" href="#" className="social-btn">
                <Instagram className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a aria-label="Twitter" href="#" className="social-btn">
                <Twitter className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a aria-label="Email" href="mailto:hello@pawrescue.demo" className="social-btn">
                <Mail className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Paw Rescue · A demo project, made with care.
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Reveal helper ---------------- */

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
