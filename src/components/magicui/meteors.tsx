"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const updateMeteorStyles = () => {
      const styles = [...new Array(number)].map(() => ({
        top: -5,
        left:
          Math.floor(
            Math.random() *
              Math.min(window.innerWidth, document.documentElement.clientWidth),
          ) + "px",
        animationDelay: Math.random() * 1 + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      }));
      setMeteorStyles(styles);
    };

    updateMeteorStyles();
    window.addEventListener("resize", updateMeteorStyles);

    return () => {
      window.removeEventListener("resize", updateMeteorStyles);
    };
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "-z-10 pointer-events-none fixed left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-black/60 shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-black/40 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
