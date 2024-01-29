import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import temp from "../../public/temp.jpeg"

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 gap-2 items-center">
        <div className="flex flex-col items-center justify-center p-5">
          <div className=" border-dashed border-2 dark:border-white  border-black p-5">
            <h1 className="text-6xl font-bold mb-5">
              Let me introduce the new app that connects strangers via video /
              chat
            </h1>
          </div>
          <div className="flex gap-2 items-center justify-center p-5">
            <div className="flex gap-2 items-center justify-center">
            <Button variant={"outline"}>Let's Connect</Button>
-/
            <Button variant={"link"}>Know more</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={temp} alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
