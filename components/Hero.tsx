import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-40 md:-left-32 md:-top-20 h-screen"
          fill="white"
        ></Spotlight>
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        ></Spotlight>
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        ></Spotlight>
      </div>
      <div className="relative flex h-screen w-full items-start justify-center bg-white dark:bg-black-100">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Welcome to my Portfolio based on Next.js!
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="A Simple Wannabe Developer, Focusing in Full-Stack Web Development"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi I&apos;m Hanif Hafizhan, a Web Developer based in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
