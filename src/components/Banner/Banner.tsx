import { HTMLAttributes, ReactNode } from "react";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  urlImage: string;
  backgroundPosition?: string;
}

export const Banner = ({
  children,
  urlImage,
  backgroundPosition,
  ...props
}: BannerProps) => {
  return (
    <div
      className={props.className}
      style={{
        position: "relative",
        backgroundImage: `url('${urlImage}')`,
        backgroundPosition: backgroundPosition
          ? backgroundPosition
          : "left center",
      }}
    >
      {children}
    </div>
  );
};
