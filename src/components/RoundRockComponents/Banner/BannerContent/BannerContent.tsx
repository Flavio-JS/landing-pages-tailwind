import { Icons } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";

export const BannerContent = () => {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-9 p-4 text-white">
      <div className="flex gap-4">
        <Icons.PlumbersIcon />
        <div className="flex flex-col text-center">
          <h1 className="font-serif text-2xl font-bold md:text-3xl">
            ROUND ROCK
          </h1>
          <h2 className="font-serif text-xl font-bold md:text-2xl">
            P L U M B I N G
          </h2>
        </div>
      </div>
      <span className="w-fit max-w-[520px] text-center font-serif text-xs md:text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <Icons.WrenchIcon />
          <span>Service 1</span>
        </div>
        <div className="flex flex-col items-center">
          <Icons.WrenchIcon />
          <span>Service 2</span>
        </div>
        <div className="flex flex-col items-center">
          <Icons.WrenchIcon />
          <span>Service 3</span>
        </div>
      </div>
      <Button className="bg-[#50B2EA] px-14 py-5 transition-colors  hover:bg-blue-400">
        Help me
      </Button>
    </div>
  );
};
