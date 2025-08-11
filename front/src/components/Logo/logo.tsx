import Image from "next/image";
import { FC } from "react";




interface NameLogoProps {
  className1?: string;
  className2?: string;
  width?: number;
  height?: number;
}

const NameLogo: FC<NameLogoProps> = ({
  className1 = "flex-row ",
  className2 = `text-2xl`,
  width = 70,
  height = 70,
}) => {
  return (
    <div className="w-fit  ">
      <div
        className={`font-zendots flex ${className1}   items-center  justify-center `}
      >
          <Image
            src="/ChatGPT Image 11 ago 2025, 02_08_33.png"
            alt="Street Flow Logo"
            width={width}
            height={height}
            className="-mt-3 -mb-4"
          />
        <h1 className={`${className2} font-Name font-bold logo text-3xl  `}>
        Home Hero
        </h1>
      </div>
    </div>
  );
};
export default NameLogo;