import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Search } from "lucide-react";
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

export type Dota2HeroesFilterProps = {
  handleChangeName: (data: string) => void;
};

export const Dota2HeroesFilter = ({
  handleChangeName,
}: Dota2HeroesFilterProps) => {
  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-4 rounded-md border border-[#11111190] bg-gradient-to-r from-black/50 to-black/30 p-2.5 shadow-[0px_0px_30px_#00000050] md:flex-row">
      <span className="text-nowrap text-sm text-[#ddd] md:text-base lg:text-lg">
        FILTRAR HEROIS
      </span>
      <div className="flex flex-col items-center justify-center gap-2 md:w-full md:flex-row md:justify-around">
        <div className="flex items-center">
          <span className="mr-2 text-xs text-[#808fa6] md:text-sm lg:text-base">
            ATRIBUTO
          </span>
          <ToggleGroup size="sm" type="single">
            {toggleAttributesData.map((item) => (
              <ToggleGroupItem
                key={item.valueItem}
                className="h-fit px-0 hover:bg-transparent data-[state=on]:bg-transparent data-[state=off]:brightness-50 data-[state=on]:brightness-100 data-[state=off]:saturate-0 data-[state=on]:saturate-100"
                value={item.valueItem}
                aria-label={item.valueItem}
              >
                <div
                  className="transition-filter -ml-1 h-4 w-5 cursor-pointer bg-cover bg-no-repeat filter duration-100 ease-in-out lg:h-6 lg:w-8"
                  style={{
                    backgroundImage: `url('${item.imgUrl}')`,
                  }}
                />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="flex items-center">
          <span className="mr-2 text-xs text-[#808fa6] md:text-sm lg:text-base">
            COMPLEXIDADE
          </span>

          <ToggleGroup size="sm" type="single">
            {toggleComplexityData.map((item) => (
              <ToggleGroupItem
                key={item.valueItem}
                className="h-fit px-0 hover:bg-transparent data-[state=on]:bg-transparent data-[state=off]:brightness-50 data-[state=on]:brightness-100 data-[state=off]:saturate-0 data-[state=on]:saturate-100"
                value={item.valueItem}
                aria-label={item.valueItem}
              >
                <div
                  className="transition-filter -ml-1 h-4 w-5 cursor-pointer bg-cover bg-no-repeat filter duration-100 ease-in-out lg:h-6 lg:w-8"
                  style={{
                    backgroundImage: `url('${item.imgUrl}')`,
                  }}
                />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
      <div className="relative flex w-full min-w-[185px] max-w-64 items-center justify-center">
        <div className="absolute left-1">
          <Search color="#ddd" />
        </div>
        <Input
          className="h-7 border-none bg-[#25282a] p-1 pl-8 text-[#ddd] focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Nome do herói"
          onChange={({ target }) => handleChangeName(target.value)}
        />
      </div>
    </div>
  );
};
