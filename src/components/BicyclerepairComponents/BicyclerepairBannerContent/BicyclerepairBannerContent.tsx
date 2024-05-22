import { Icons } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";

export const BicyclerepairBannerContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-4 sm:items-start lg:px-[8%]">
      <Icons.BikeRepairIcon />
      <h1 className="font-serif text-2xl font-bold text-[#EB5757] md:text-3xl">
        ROUND ROCK
      </h1>
      <h2 className="font-serif text-xl font-bold text-[#EB5757] md:text-2xl">
        B I C Y C L E R E P A I R
      </h2>
      <div className="flex flex-col items-center gap-2 sm:items-start">
        <span className="text-xl text-[#EB5757]">What is Lorem Ipsum</span>
        <span className="text-2xl text-[white] sm:text-[black]">
          What is Lorem Ipsum
        </span>
        <span className="max-w-[425px] text-xs text-[white] sm:text-[black]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
        <Button
          type="submit"
          className="bg-[#EB5757] px-14 py-5 transition-colors hover:bg-red-600 focus-visible:ring-[#EB5757]"
        >
          Help me
        </Button>
      </div>
    </div>
  );
};
