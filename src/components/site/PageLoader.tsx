import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import loaderLogo from "@/assets/greencare-loader-logo.png";

export function PageLoader() {
  const status = useRouterState({ select: (s) => s.status });
  const isLoading = status === "pending";

  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(true);
  const firstRender = useRef(true);

  useEffect(() => {
    // Skip the very first render — no standalone initial page-load loader
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (isLoading) {
      setVisible(true);
      setHidden(false);
      return;
    }

    const t1 = setTimeout(() => setHidden(true), 200);
    const t2 = setTimeout(() => setVisible(false), 650);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center gap-6">
        <img
          src={loaderLogo}
          alt="Green Care Homes"
          className="relative h-16 w-auto object-contain sm:h-20 animate-[loader-breathe_1.8s_ease-in-out_infinite]"
        />
        <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-black/5">
          <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-brand animate-[loader-bar_1.4s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes loader-breathe {
          0%, 100% { transform: scale(0.97); opacity: 0.88; }
          50%      { transform: scale(1.02); opacity: 1; }
        }
        @keyframes loader-bar {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(380%); }
        }
      `}</style>
    </div>
  );
}
