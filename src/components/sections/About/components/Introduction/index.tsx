"use client";
import { useIntroduction } from "@/hooks/about";

export const Introduction = () => {
  const { title, bio } = useIntroduction();

  return (
    <div className="w-full">
      <h2 className="intro-title text-responsive-3xl md:text-responsive-4xl font-gemola text-earth-dark mb-6 md:mb-8">
        {title}
      </h2>
      <div className="intro-text space-y-4 md:space-y-6">
        {bio.map((paragraph, index) => (
          <p
            key={index}
            className="text-responsive-base md:text-responsive-lg font-al tracking-wide text-earth-brown/80"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
