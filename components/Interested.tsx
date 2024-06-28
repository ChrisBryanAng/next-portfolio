import PrimaryButtonClean from "./PrimaryButtonClean";

const Interested = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center font-bold mt-28">
      <p className="font-Ibarra text-[50px] md:text-[42px] p-4 leading-tight text-center md:text-start">
        Interested in doing a project together?
      </p>
      <div className="hidden md:block h-[1px] w-[210px] mr-4 border-[1px] border-solid border-black/15" />
      <PrimaryButtonClean label="Contact me" />
    </div>
  );
};

export default Interested;
