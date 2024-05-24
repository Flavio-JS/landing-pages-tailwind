"use client";

import { Banner } from "@/components/Banner/Banner";
import { BicyclerepairBannerContent } from "@/components/BicyclerepairComponents/BicyclerepairBannerContent/BicyclerepairBannerContent";
import { useWindowSize } from "@/contexts/WindowSizeContext";

export const BicyclerepairPage = () => {
  const size = useWindowSize();
  const backgroundPosition =
    size.width && size.width < 640 ? "right center" : "left center";

  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Banner
        className="flex h-full max-h-96 min-h-[70vh] w-full flex-col items-center justify-start gap-8 bg-cover p-10"
        backgroundPosition={backgroundPosition}
        urlImage="/banners/bicyclerepair/bicyclerepair-banner.png"
      >
        <BicyclerepairBannerContent />
      </Banner>
    </div>
  );
};
