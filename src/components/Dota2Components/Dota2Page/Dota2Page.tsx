import { Dota2ContentPage } from "../Dota2ContentPage/Dota2ContentPage";
import { Dota2Footer } from "../Dota2Footer/Dota2Footer";
import { Dota2HeroesHeader } from "../Dota2HeroesHeader/Dota2HeroesHeader";

export const Dota2Page = () => {
  return (
    <div
      className="relative flex h-screen max-h-screen w-full flex-col items-center justify-between bg-cover font-sans "
      style={{
        backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="flex h-full w-full justify-center overflow-y-auto px-10">
        <div className="flex h-full w-full max-w-screen-xl flex-col justify-between gap-8">
          <div className="flex flex-col gap-8">
            <Dota2HeroesHeader />
            <Dota2ContentPage />
          </div>

          <Dota2Footer />
        </div>
      </div>
    </div>
  );
};
