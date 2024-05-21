import { BannerContent } from "./BannerContent/BannerContent";

export const Banner = () => {
  return (
    <div
      className="p-y-20 flex h-full max-h-96 min-h-[70vh] w-full flex-col items-center justify-center gap-8 bg-cover"
      style={{
        position: "relative",
        backgroundImage: "url('/banners/round-rock-plimbing-banner.png')",
        backgroundPosition: "left center",
      }}
    >
      <BannerContent />
    </div>
  );
};
