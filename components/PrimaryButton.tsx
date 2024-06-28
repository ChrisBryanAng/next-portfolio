import Image from "next/image";

import DownArrows from "@/public/icons/down-arrows.svg";

const PrimaryButton = ({ label }: { label: string }) => {
  return (
    <button
      type="button"
      className="flex text-white h-[70px] md:h-[50px] bg-primary-darkblue "
    >
      <div className="flex items-center w-[72px] md:w-[54px] h-full justify-center p-4 bg-black/15">
        <Image src={DownArrows} alt="down-arrows" className="h-5 w-6" />
      </div>
      <p className="bg-primary-darkblue w-[220px] md:w-[164px] md:text-[12px] h-full flex items-center justify-center text-center uppercase font-Public-sans tracking-[3px] font-normal">
        {label}
      </p>
    </button>
  );
};

export default PrimaryButton;
