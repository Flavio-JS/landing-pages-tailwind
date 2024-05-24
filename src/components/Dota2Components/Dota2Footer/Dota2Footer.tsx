import Image from "next/image";

export const Dota2Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4">
      <h1 className="text-white">
        <Image
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
          alt="dota2_logo"
          width={100}
          height={100}
        />
      </h1>
      <span className="text-center text-[8px] text-white">
        Dota e o logotipo do Dota são marcas e/ou marcas registradas da Valve
        Corporation. 2024 Valve Corporation, todos os direitos reservados.
      </span>
    </div>
  );
};
