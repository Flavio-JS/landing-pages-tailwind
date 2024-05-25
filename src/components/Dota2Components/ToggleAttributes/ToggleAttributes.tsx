import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type FilterProps = {
  valueItem: string;
  imgUrl: string;
};

export type ToggleFilterProps = {
  data: FilterProps[];
};

export function ToggleFilter({ data }: ToggleFilterProps) {
  return (
    <ToggleGroup size="sm" type="single">
      {data.map((item) => (
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
  );
}
