import { Search } from "lucide-react";
import { Dota2InputIcon } from "../Dota2InputIcon/Dota2InputIcon";
import {
  FilterProps,
  ToggleFilter,
} from "../ToggleAttributes/ToggleAttributes";

const toggleAttributesData: FilterProps[] = [
  {
    valueItem: "str",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png",
  },
  {
    valueItem: "agi",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png",
  },
  {
    valueItem: "int",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png",
  },
  {
    valueItem: "uni",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png",
  },
];

const toggleComplexityData: FilterProps[] = [
  {
    valueItem: "complexity1",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
  },
  {
    valueItem: "complexity2",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
  },
  {
    valueItem: "complexity3",
    imgUrl:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
  },
];

export const Dota2HeroesFilter = () => {
  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-4 rounded-md border border-[#11111190] bg-gradient-to-r from-black/50 to-black/30 p-2.5 shadow-[0px_0px_30px_#00000050]">
      <span className="text-sm text-[#ddd]">FILTRAR HEROIS</span>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center">
          <span className="mr-2 text-xs text-[#808fa6]">ATRIBUTO</span>
          <ToggleFilter data={toggleAttributesData} />
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xs text-[#808fa6]">COMPLEXIDADE</span>
          <ToggleFilter data={toggleComplexityData} />
        </div>
      </div>
      <Dota2InputIcon icon={<Search color="#ddd" />} />
    </div>
  );
};
