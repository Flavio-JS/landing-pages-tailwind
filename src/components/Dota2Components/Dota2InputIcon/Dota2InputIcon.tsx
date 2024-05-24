import { Input } from "@/components/ui/input";
import * as Icon from "lucide-react";
import { ReactNode } from "react";

export type Dota2InputIconProps = {
  icon: ReactNode;
};

export const Dota2InputIcon = ({ icon }: Dota2InputIconProps) => {
  console.log(typeof Icon.Search);
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute left-1">{icon}</div>
      <Input
        className="h-7 border-none bg-[#25282a] p-1 pl-8 text-[#ddd] focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Nome do herói"
      />
    </div>
  );
};
