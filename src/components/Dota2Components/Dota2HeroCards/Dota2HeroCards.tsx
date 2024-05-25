"use client";

import { useHeroesList } from "@/hooks/useHerosBaseData";
import { Dota2HeroCard } from "./Dota2HeroCard/Dota2HeroCard";

export type Dota2HeroCardsProps = {
  heroName: string;
};

export const Dota2HeroCards = ({ heroName }: Dota2HeroCardsProps) => {
  console.log(heroName);

  const { data } = useHeroesList();

  const heroesList = data?.sort((a, b) => a.name.localeCompare(b.name));

  const filteredHeroesList = heroesList?.filter((hero) =>
    hero.name.toLowerCase().includes(heroName.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 items-center justify-center gap-2 lg:grid-cols-4">
      {filteredHeroesList &&
        filteredHeroesList.map((heroData, index) => (
          <Dota2HeroCard
            heroName={heroData.name.replaceAll("npc_dota_hero_", "")}
            heroAttribute={heroData.primary_attr}
            heroId={heroData.id}
            key={index}
          />
        ))}
    </div>
  );
};
