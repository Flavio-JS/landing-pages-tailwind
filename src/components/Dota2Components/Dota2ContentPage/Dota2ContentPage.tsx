"use client";

import { useState } from "react";
import { Dota2HeroCards } from "../Dota2HeroCards/Dota2HeroCards";
import { Dota2HeroesFilter } from "../Dota2HeroesFilter/Dota2HeroesFilter";

export const Dota2ContentPage = () => {
  const [heroName, setHeroName] = useState("");

  const handleChangeName = (e: string) => {
    setHeroName(e);
  };

  return (
    <>
      <Dota2HeroesFilter handleChangeName={handleChangeName} />
      <Dota2HeroCards heroName={heroName} />
    </>
  );
};
