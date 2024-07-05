import Image from "next/image";

import DownArrows from "@/public/icons/down-arrows.svg";

const PrimaryButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex text-white h-[55px] bg-primary-darkblue hover:bg-primary-cyan transition-colors duration-200"
    >
      <div className="flex items-center w-[54px] h-full justify-center p-4 bg-black/15">
        <Image src={DownArrows} alt="down-arrows" className="h-4 w-5" />
      </div>
      <p className="w-[165px] text-[12px] h-full flex items-center justify-center text-center uppercase font-Public-sans tracking-[3px] font-normal">
        {label}
      </p>
    </button>
  );
};

export default PrimaryButton;
