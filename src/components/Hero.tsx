import React from "react";
import { Button } from "./ui/button";
import { TextGen } from "./HomeText";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center p-5">
        <div className=" border-dashed border-2 dark:border-white  border-black p-5">
          <h1 className="text-9xl font-bold mb-5">
            <TextGen />
          </h1>
        </div>
        <div className="flex gap-2 items-center justify-center p-5">
          <div className="flex gap-2 items-center justify-center">
            <Button variant={"outline"}>Let&apos;s Connect</Button>
            -/
            <Button variant={"link"}>Know more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
