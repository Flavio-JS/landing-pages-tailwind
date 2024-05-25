import { useWindowSize } from "@/contexts/WindowSizeContext";
import Image from "next/image";
import { useState } from "react";

export type Dota2HeroCardProps = {
  heroName: string;
  heroAttribute: string;
};

export const Dota2HeroCard = ({
  heroName,
  heroAttribute,
}: Dota2HeroCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  const handleCardMouseEnter = () => {
    setIsHovered(true);
    setZIndex(10);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setZIndex(9);
    setTimeout(() => {
      setZIndex(0);
    }, 300);
  };

  const attributeMap: { [key: string]: string } = {
    str: "strength",
    int: "intelligence",
    agi: "agility",
  };

  const getAttribute = (heroAttribute: string): string => {
    return attributeMap[heroAttribute] || "universal";
  };

  const size = useWindowSize();

  const attributeSize = (() => {
    if (size.width && size.width > 1024) return 40;
    if (size.width && size.width > 768) return 32;
    if (size.width && size.width > 640) return 24;
    return 16;
  })();

  return (
    <div
      className="relative h-[70px] w-full overflow-hidden bg-white transition-transform duration-300 ease-in-out hover:scale-125 sm:h-[100px] md:h-[120px] lg:h-[140px]"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      style={{
        backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        zIndex: zIndex,
      }}
    >
      <div
        className="absolute flex items-center justify-center gap-2 pb-2 pl-2 transition-transform duration-300 ease-in-out"
        style={{ bottom: isHovered ? "0px" : "-48px" }}
      >
        <Image
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${getAttribute(heroAttribute)}.png`}
          alt={getAttribute(heroAttribute)}
          width={attributeSize}
          height={attributeSize}
        />
        <span
          className="text-[8px] text-[#ddd] md:font-bold lg:text-base"
          style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)" }}
        >
          {heroName.toUpperCase().replaceAll("_", " ")}
        </span>
      </div>
    </div>
  );
};
