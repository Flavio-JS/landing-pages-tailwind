import { Dota2HeroCard } from "./Dota2HeroCard/Dota2HeroCard";

export const Dota2HeroCards = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-center gap-2">
      {Array.from({ length: 100 }).map((_, index) => (
        <Dota2HeroCard key={index} />
      ))}
    </div>
  );
};
