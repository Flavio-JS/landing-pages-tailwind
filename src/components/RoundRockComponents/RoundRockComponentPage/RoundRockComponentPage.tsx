import { NextPage } from "next";
import { Banner } from "../Banner/Banner";
import { FirstSection } from "../FirstSection/FirstSection";
import { SecondSection } from "../SecondSection/SecondSection";
import { ThirdSection } from "../ThirdSection/ThirdSection";

export const RoundRockComponentPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <Banner />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};
