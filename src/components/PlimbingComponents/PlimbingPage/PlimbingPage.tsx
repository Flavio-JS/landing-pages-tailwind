import { NextPage } from "next";
import { Banner } from "../../Banner/Banner";
import { FirstSection } from "../FirstSection/FirstSection";
import { SecondSection } from "../SecondSection/SecondSection";
import { ThirdSection } from "../ThirdSection/ThirdSection";
import { FourthSection } from "@/components/PlimbingComponents/FourthSection/FourthSection";
import { Footer } from "@/components/PlimbingComponents/Footer/Footer";
import { PlimbingBannerContent } from "../PlimbingBannerContent/PlimbingBannerContent";

export const PlimbingPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Banner
        className="p-y-20 flex h-full max-h-96 min-h-[70vh] w-full flex-col items-center justify-center gap-8 bg-cover"
        urlImage="/banners/plimbing/plimbing-banner.png"
      >
        <PlimbingBannerContent />
      </Banner>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
};
