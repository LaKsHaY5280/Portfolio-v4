"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
}

export const AnimatedNumber = ({
  value,
  duration = 2,
  delay = 0,
}: AnimatedNumberProps) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!numberRef.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          gsap.to(numberRef.current, {
            duration: duration,
            delay: delay,
            textContent: value,
            roundProps: "textContent",
            ease: "power2.out",
            modifiers: {
              textContent: (value: number) => `${Math.round(value)}+`,
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(numberRef.current);
    return () => observer.disconnect();
  }, [value, duration, delay, isVisible]);

  return <span ref={numberRef}>0+</span>;
};
