import { HTMLAttributes, ReactNode } from "react";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  urlImage: string;
}

export const Banner = ({ children, urlImage, ...props }: BannerProps) => {
  return (
    <div
      className={props.className}
      style={{
        position: "relative",
        backgroundImage: `url('${urlImage}')`,
        backgroundPosition: "left center",
      }}
    >
      {children}
    </div>
  );
};
