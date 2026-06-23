import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating?: number;
};

const items: Testimonial[] = [
  {
    quote:
      "Green Care Homes-এর কেয়ারগিভাররা আমার মায়ের যত্ন এতটাই পরিবারের মতো নিয়েছেন যে আমি বিদেশে থেকেও নিশ্চিন্ত থাকতে পারি। ফোন করলেই detailed update পাই।",
    name: "Tahmid R.",
    role: "Family member · Dhanmondi",
    rating: 5,
  },
  {
    quote:
      "বাবার stroke-পরবর্তী physiotherapy-তে অসাধারণ improvement দেখেছি। সময়মতো আসেন, ধৈর্য ধরে কাজ করেন, এবং আমাদের পরিবারকেও শিখিয়ে দেন।",
    name: "Nusrat A.",
    role: "Daughter · Uttara",
    rating: 5,
  },
  {
    quote:
      "Day Care সেন্টারটা সত্যিই অন্যরকম — আমার শাশুড়ি সেখানে গিয়ে নতুন বন্ধু পেয়েছেন, আর সারাদিন ব্যস্ত থাকেন। বাসায় ফিরে হাসিখুশি।",
    name: "Ferdous H.",
    role: "Daughter-in-law · Mohammadpur",
    rating: 5,
  },
  {
    quote:
      "Round-the-clock nursing দরকার ছিল postsurgery — ওনারা তিন শিফটে রোস্টার দিয়ে seamless service দিয়েছেন। Hospital-grade care বাসায় বসেই।",
    name: "Dr. Kabir M.",
    role: "Family physician · Gulshan",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    setCount(embla.scrollSnapList().length);
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.97_0.012_145)] via-white to-[oklch(0.96_0.018_150)] py-20 sm:py-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-deep backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Voices of families
          </span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-charcoal sm:text-5xl">
            Trusted by families across{" "}
            <span className="italic text-brand-deep">Bangladesh</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Real stories from people who let us care for the ones they love most.
          </p>
        </Reveal>

        <div className="mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((t, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%] pl-0 pr-4 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <article className="group relative h-full rounded-3xl border border-white/60 bg-white/70 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_30px_60px_-25px_rgba(45,125,31,0.35)]">
                    <Quote className="h-9 w-9 text-brand/30" />
                    <div className="mt-3 flex items-center gap-0.5">
                      {Array.from({ length: t.rating ?? 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-brand text-brand" />
                      ))}
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-charcoal/85">
                      {t.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-3 border-t border-charcoal/5 pt-5">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-sm font-bold text-white shadow-elegant">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-charcoal">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => embla?.scrollPrev()}
              className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-white/80 text-charcoal transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => embla?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-brand" : "w-1.5 bg-charcoal/20 hover:bg-charcoal/40"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => embla?.scrollNext()}
              className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-white/80 text-charcoal transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
