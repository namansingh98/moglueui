"use client";
import React from "react";
import { Button } from "./ui/button";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "./ui/Background-beams";
import { SparklesPreview } from "./Sparkles-Main";

const words = `Let me introduce the new app that connects strangers via video /
chat`;

const Hero = () => {
  return (
<>
<div className="h-screen w-full rounded-md dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"></h1>
        <p></p>
      
          <div className="flex flex-col items-center justify-center p-5">
            <div className=" border-dashed border-2 dark:border-white  border-black p-5">
              <TextGenerateEffect words={words} className="text-5xl dark:text-white " />
            </div>
            <div className="flex gap-2 items-center justify-center p-5">
              <div className="flex gap-2 items-center justify-center">
                <Button variant={"outline" }>Let&apos;s Connect</Button>
                -/
                <Button variant={"link"}>Know more</Button>
              </div>
            </div>
          </div>
      
      </div>
      <BackgroundBeams />
    </div>

{/* <SparklesPreview /> */}  
{/* additional hero main code if current is not suitable  */}


</>
  );
};

export default Hero;
