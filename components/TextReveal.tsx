"use client";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function TextReveal({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: "chars" });

    split.chars?.forEach((char, i) => {
      const el = char as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `all 0.4s ease ${i * 0.03}s`;
    });

    requestAnimationFrame(() => {
      split.chars?.forEach((char) => {
        const el = char as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
