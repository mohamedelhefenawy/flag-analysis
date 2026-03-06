import React from "react";
import Image from "next/image";
import PixelSnow from "@/components/PixelSnow";
import WhiteButton from "../button/WhiteButton";
import BlackButton from "../button/BlackButton";
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGE + EFFECT */}
      <div className="relative w-full h-full bg-black">

        {/* FULLSCREEN IMAGE - show full image on small screens, cover on larger */}
        <Image
          src="/home/hero/head_map.png"
          alt="Football pitch analytics"
          priority
          fill
          sizes="120vw"
          className="w-full hidden md:block h-full object-fill  "
        />
        <Image
          src="/home/hero/head_phone.png"
          alt="Football pitch analytics"
          priority
          fill
          sizes="120vw"
          className="w-full block md:hidden h-full object-fill  "
        />

        {/* PIXEL SNOW */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <PixelSnow
            color="#AF5EFF"
            flakeSize={0.006}
            minFlakeSize={0.6}
            pixelResolution={4000}
            speed={1.25}
            density={0.3}
            direction={315}
            brightness={1}
            depthFade={8}
            farPlane={10}
            gamma={0.4545}
            variant="round"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="container mx-auto flex flex-col items-center gap-8 text-center">

          <h1 className="text-white">
            See the <span className="text-secondary-500">Game,</span>
            <br />
            <span className="text-brand-500">Before </span>Others
          </h1>

          <h3 className="text-primary-300 max-w-[600px]">
          Professional football intelligence for the Saudi football ecosystem. Player analysis, tactical insights, and contextual intelligence — built for decision-makers.          </h3>

          <div className="flex gap-2">
            <WhiteButton text="Request custom analysis" />

            <BlackButton text="Explore Player Intelligence" />
          </div>

        </div>
      </div>

    </section>
  );
}