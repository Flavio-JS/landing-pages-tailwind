import { AxiosHerosClient } from "@/clients/axiosHeroClient";
import { exportData } from "@/handlers/ApiHandler";
import { QueryFnOptions } from "@/lib/react-query";
import { useQuery } from "@tanstack/react-query";

export type HeroesData = {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
};

// https://www.dota2.com/datafeed/herodata?language=brazilian&hero_id=102
// https://www.dota2.com/datafeed/herolist?language=brazilian

export const getHeroesListPath = "/heroes";

export const getHerosList = () => {
  return AxiosHerosClient.get<HeroesData[]>(getHeroesListPath).then(exportData);
};

type UseUserCredentialsOptions<TData = HeroesData[]> = {
  options?: QueryFnOptions<HeroesData[], TData>;
};

export const getHeroesListQueryKey = "getHeroesListQueryKey";

export const useHeroesList = <TData = HeroesData[]>({
  options = {},
}: UseUserCredentialsOptions<TData> = {}) => {
  return useQuery({
    ...options,
    queryKey: [getHeroesListQueryKey],
    queryFn: () => getHerosList(),
  });
};
