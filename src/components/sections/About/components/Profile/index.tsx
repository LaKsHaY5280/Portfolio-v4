"use client";
import { DecorativeCircles } from "./DecorativeCircles";
import { ProfileImage } from "./ProfileImage";

export const ProfileSection = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-[300px] md:max-w-none">
      <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px]">
        <ProfileImage />
        <div className="absolute z-10 -right-[30px] -bottom-[30px] md:-right-[50px] md:-bottom-[50px]">
          <DecorativeCircles />
        </div>
      </div>
    </div>
  );
};
