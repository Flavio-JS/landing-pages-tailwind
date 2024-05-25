import { Dota2Footer } from "../Dota2Footer/Dota2Footer";
import { Dota2HeroCards } from "../Dota2HeroCards/Dota2HeroCards";
import { Dota2HeroesFilter } from "../Dota2HeroesFilter/Dota2HeroesFilter";
import { Dota2HeroesHeader } from "../Dota2HeroesHeader/Dota2HeroesHeader";

export const Dota2Page = () => {
  return (
    <div
      className="relative flex h-full max-h-screen w-full flex-col items-center justify-center bg-cover font-sans "
      style={{
        backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="flex w-full justify-center overflow-y-auto px-10">
        <div className="flex w-full max-w-screen-xl flex-col gap-8">
          <Dota2HeroesHeader />
          <Dota2HeroesFilter />
          <Dota2HeroCards />
          <Dota2Footer />
        </div>
      </div>
    </div>
  );
};
