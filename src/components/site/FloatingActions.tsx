import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/i18n/locale";

const WHATSAPP_NUMBER = "8801992869025";
const PHONE_TEL = "+8801992869025";

export function FloatingActions() {
  const locale = useLocale();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waMessage = locale === "bn"
    ? "আসসালামু আলাইকুম, Green Care Homes-এর সেবা সম্পর্কে জানতে চাই।"
    : "Hello GreenCare, I would like to know more about your services.";
  const waLabel = locale === "bn" ? "হোয়াটসঅ্যাপে চ্যাট করুন" : "Chat on WhatsApp";
  const topLabel = locale === "bn" ? "উপরে যান" : "Scroll to top";
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
  void PHONE_TEL;

  return (
    <>
      {/* Desktop: both buttons at absolute bottom-right corner */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden items-end gap-2.5 sm:flex">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={topLabel}
          className={`pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white/90 text-charcoal/70 shadow-[0_6px_18px_rgba(17,25,23,0.12)] ring-1 ring-charcoal/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-charcoal ${
            showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.25} />
        </button>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={waLabel}
          className="pointer-events-auto group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_rgba(37,211,102,0.45)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden />
          <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
            <path d="M19.11 17.59c-.27-.14-1.59-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.61 1.11 2.79.14.18 1.91 2.92 4.64 4.09.65.28 1.15.44 1.55.57.65.2 1.24.17 1.71.1.52-.08 1.59-.65 1.81-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32zM16.02 6.4c-5.31 0-9.62 4.31-9.62 9.62 0 1.7.45 3.36 1.29 4.82l-1.37 5 5.13-1.34a9.6 9.6 0 0 0 4.57 1.16h.01c5.31 0 9.62-4.31 9.62-9.62 0-2.57-1-4.99-2.82-6.81a9.55 9.55 0 0 0-6.81-2.83zm5.6 15.22a8 8 0 0 1-5.6 2.32h-.01a8 8 0 0 1-4.07-1.11l-.29-.17-3.04.8.81-2.97-.19-.3a8 8 0 0 1-1.23-4.27c0-4.41 3.59-8 8.01-8 2.14 0 4.15.83 5.66 2.35a7.97 7.97 0 0 1 2.35 5.66c0 4.42-3.59 8.01-8.01 8.01z" />
          </svg>
        </a>
      </div>

      {/* Mobile: both buttons at absolute bottom-right corner */}
      <div className="pointer-events-none fixed right-4 z-40 flex items-end gap-2 sm:hidden" style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={topLabel}
          className={`pointer-events-auto grid h-8 w-8 place-items-center rounded-full bg-white/90 text-charcoal/70 shadow-[0_4px_12px_rgba(17,25,23,0.12)] ring-1 ring-charcoal/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-charcoal ${
            showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.25} />
        </button>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={waLabel}
          className="pointer-events-auto group relative grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" aria-hidden />
          <svg viewBox="0 0 32 32" className="relative h-6 w-6" fill="currentColor" aria-hidden>
            <path d="M19.11 17.59c-.27-.14-1.59-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.61 1.11 2.79.14.18 1.91 2.92 4.64 4.09.65.28 1.15.44 1.55.57.65.2 1.24.17 1.71.1.52-.08 1.59-.65 1.81-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32zM16.02 6.4c-5.31 0-9.62 4.31-9.62 9.62 0 1.7.45 3.36 1.29 4.82l-1.37 5 5.13-1.34a9.6 9.6 0 0 0 4.57 1.16h.01c5.31 0 9.62-4.31 9.62-9.62 0-2.57-1-4.99-2.82-6.81a9.55 9.55 0 0 0-6.81-2.83zm5.6 15.22a8 8 0 0 1-5.6 2.32h-.01a8 8 0 0 1-4.07-1.11l-.29-.17-3.04.8.81-2.97-.19-.3a8 8 0 0 1-1.23-4.27c0-4.41 3.59-8 8.01-8 2.14 0 4.15.83 5.66 2.35a7.97 7.97 0 0 1 2.35 5.66c0 4.42-3.59 8.01-8.01 8.01z" />
          </svg>
        </a>
      </div>
    </>
  );
}
