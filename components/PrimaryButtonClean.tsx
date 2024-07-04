import Link from "next/link";

const PrimaryButtonClean = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link
      href={`${url}`}
      className="text-[14px] py-4 px-10 hover:bg-primary-grayishdarkblue hover:text-secondary-verylightgray transition-colors duration-200 border-[1px] font-Public-sans font-light border-solid border-black flex justify-center items-center text-nowrap uppercase tracking-widest w-max"
    >
      {label}
    </Link>
  );
};

export default PrimaryButtonClean;
