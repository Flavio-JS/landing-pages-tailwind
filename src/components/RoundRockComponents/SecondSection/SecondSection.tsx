"use client";

import { Icons } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/contexts/WindowSizeContext";

export const SecondSection = () => {
  const size = useWindowSize();
  const iconSize = size.width && size.width > 640 ? 180 : 140;

  return (
    <>
      <div className=" hidden h-full w-full flex-col lg:flex">
        <div
          className="flex h-full flex-col items-center justify-center gap-8 bg-cover p-4 "
          style={{
            position: "relative",
            backgroundImage: "url('/banners/section2.png')",
            backgroundPosition: "right center",
          }}
        >
          <h2 className="text-2xl font-bold text-white">Services</h2>
          <div className="flex gap-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <Icons.WrenchIcon key={index} width={180} height={180} />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-12 py-7">
          <div className="flex w-full justify-center gap-20 text-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex w-full max-w-[180px] flex-col">
                <span className="text-lg font-bold text-[#50B2EA]">
                  Lorem Ipsum
                </span>
                <span className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </span>
              </div>
            ))}
          </div>
          <Button className="w-fit border-2 border-solid border-[#F2F2F2] bg-[#50B2EA] px-14 py-5 transition-colors hover:bg-blue-400">
            Help me
          </Button>
        </div>
      </div>
      <div className="flex h-full w-full flex-col lg:hidden">
        <div
          className="flex h-full flex-col items-center justify-center gap-8 bg-cover p-4 "
          style={{
            position: "relative",
            backgroundImage: "url('/banners/section2.png')",
            backgroundPosition: "right center",
          }}
        >
          <h2 className="text-2xl font-bold text-white">Services</h2>
          <div className="flex gap-10 sm:gap-20">
            {Array.from({ length: 2 }).map((_, index) => (
              <Icons.WrenchIcon
                key={index}
                width={iconSize}
                height={iconSize}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-12 py-7">
          <div className="flex w-full justify-center gap-10 text-center sm:gap-20">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex w-full max-w-[180px] flex-col">
                <span className="text-base font-bold text-[#50B2EA] sm:text-lg">
                  Lorem Ipsum
                </span>
                <span className="text-xs sm:text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col lg:hidden">
        <div
          className="flex h-full flex-col items-center justify-center gap-8 bg-cover p-4 "
          style={{
            position: "relative",
            backgroundImage: "url('/banners/section2.png')",
            backgroundPosition: "right center",
          }}
        >
          <h2 className="text-2xl font-bold text-white">Services</h2>
          <div className="flex gap-10 sm:gap-20">
            {Array.from({ length: 2 }).map((_, index) => (
              <Icons.WrenchIcon
                key={index}
                width={iconSize}
                height={iconSize}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-12 py-7">
          <div className="flex w-full justify-center gap-10 text-center sm:gap-20">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex w-full max-w-[180px] flex-col">
                <span className="text-base font-bold text-[#50B2EA] sm:text-lg">
                  Lorem Ipsum
                </span>
                <span className="text-xs sm:text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </span>
              </div>
            ))}
          </div>
          <Button className="w-fit border-2 border-solid border-[#F2F2F2] bg-[#50B2EA] px-14 py-5 transition-colors hover:bg-blue-400">
            Help me
          </Button>
        </div>
      </div>
    </>
  );
};
