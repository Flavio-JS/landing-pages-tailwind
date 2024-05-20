import { Button } from "@/components/ui/button";
import React from "react";
import { Carousel } from "./Carousel/Carousel";

export const FirstSection = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #F2F2F2 50%, #50B2EA 50%)",
      }}
      className="flex h-full max-h-[80vh] min-h-[500px] w-full flex-col items-center justify-center gap-4 p-4 text-white md:max-h-[60vh]"
    >
      <Carousel />
      <Button className="border-2 border-solid border-[#F2F2F2] bg-[#50B2EA] px-14 py-5 transition-colors hover:bg-blue-400">
        Help me
      </Button>
    </div>
  );
};
