"use client";

import { useHeroesList } from "@/hooks/useHerosBaseData";
import { Dota2HeroCard } from "./Dota2HeroCard/Dota2HeroCard";

export const Dota2HeroCards = () => {
  const { data } = useHeroesList();

  const heroesList = data?.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="grid grid-cols-3 items-center justify-center gap-2 lg:grid-cols-4">
      {heroesList &&
        heroesList.map((heroData, index) => (
          <Dota2HeroCard
            heroName={heroData.name.replaceAll("npc_dota_hero_", "")}
            heroAttribute={heroData.primary_attr}
            key={index}
          />
        ))}
    </div>
  );
};
