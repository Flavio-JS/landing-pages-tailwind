"use client";

import { Icons } from "@/components/Icons/Icons";
import {
  Carousel as CarouselUi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export const Carousel = () => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));

  return (
    <CarouselUi
      plugins={[plugin.current]}
      className="flex h-full w-full items-center justify-center"
      onMouseLeave={() => plugin.current.play()}
      onMouseEnter={plugin.current.stop}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex h-full w-full items-center justify-center hover:cursor-grab active:cursor-grabbing">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #50B2EA 50%, #F2F2F2 50%)",
                }}
                className="flex h-full max-h-full max-w-[1000px] overflow-hidden rounded-[40px] border-2 border-solid border-[#F2F2F2]"
              >
                <div className="items-left flex w-3/6 flex-col justify-center gap-5 p-4 md:p-10 lg:gap-10">
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Service {index + 1}
                  </h2>
                  <span className="hidden text-sm text-black md:block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </span>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                      <div>
                        <Icons.CheckIcon className="min-h-4 min-w-4" />
                      </div>

                      <span className="text-xs">
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <Icons.CheckIcon className="min-h-4 min-w-4" />
                      </div>

                      <span className="text-xs">
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <Icons.CheckIcon className="min-h-4 min-w-4" />
                      </div>

                      <span className="text-xs">
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex h-full max-h-full min-h-[300px] w-3/6 flex-col items-center justify-center gap-8 bg-cover"
                  style={{
                    position: "relative",
                    backgroundImage: "url('/imgs/plumber.png')",
                    backgroundPosition: "right center",
                  }}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselUi>
  );
};
