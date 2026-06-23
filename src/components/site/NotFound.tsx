import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Home, Phone } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.20_0.014_160)] via-[oklch(0.18_0.012_165)] to-[oklch(0.16_0.010_155)] px-5 text-cream">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-[32rem] w-[32rem] rounded-full bg-leaf/15 blur-[110px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "160px 160px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-leaf" />
          Page not found
        </span>

        <h1 className="mt-8 font-display text-[6rem] font-black leading-none tracking-tighter sm:text-[9rem]">
          <span className="bg-gradient-to-br from-cream via-leaf to-brand bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mt-4 font-display text-2xl font-bold text-cream sm:text-3xl">
          এই পথটি আর নেই —{" "}
          <span className="italic text-leaf">তবে আমরা পাশে আছি</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/65 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। নিচের যেকোনো লিংক থেকে
          আবার শুরু করুন, অথবা সরাসরি আমাদের সাথে যোগাযোগ করুন।
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-15px_rgba(76,175,47,0.6)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            <Home className="h-4 w-4" />
            হোমপেজে ফিরে যান
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href="tel:+8801992869025"
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition hover:border-leaf/50 hover:bg-cream/[0.08]"
          >
            <Phone className="h-4 w-4 text-leaf" />
            +880 1992-869025
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cream/45">
          <Link to="/services" className="transition hover:text-leaf">
            Our Services
          </Link>
          <span className="h-1 w-1 rounded-full bg-cream/20" />
          <Link to="/about" className="transition hover:text-leaf">
            About Us
          </Link>
          <span className="h-1 w-1 rounded-full bg-cream/20" />
          <Link to="/blog-and-events" className="transition hover:text-leaf">
            Blog &amp; Events
          </Link>
          <span className="h-1 w-1 rounded-full bg-cream/20" />
          <Link to="/contact" className="transition hover:text-leaf">
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
