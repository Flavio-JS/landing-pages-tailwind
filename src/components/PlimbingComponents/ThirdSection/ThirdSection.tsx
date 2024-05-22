import { Icons } from "@/components/Icons/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export const ThirdSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 bg-[#50B2EA] px-4 py-12">
      <h2 className="text-2xl font-bold text-white">Testymonials</h2>
      <div className="grid w-full grid-cols-1 place-items-center gap-x-[50px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="flex w-full max-w-[500px] gap-4 p-7">
            <div>
              <Avatar>
                <AvatarImage src="/imgs/user.png" alt="user.png" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-[#50B2EA]">
                Courtney Henry
              </h4>
              <span className="text-sm text-[#19435A]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </span>
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icons.StarIcon key={index} />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
