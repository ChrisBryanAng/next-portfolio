import PrimaryButtonClean from "./PrimaryButtonClean";

const Interested = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center lg:justify-between font-bold mt-28 lg:mt-56 lg:mb-32">
      <p className="lg:w-[660px] font-Ibarra text-[42px] md:text-[42px] p-4 lg:p-0 leading-tight text-center md:text-start lg:text-start">
        Interested in doing a project together?
      </p>
      <div className="hidden md:block h-[1px] w-[210px] lg:w-full mr-4 lg:ml-10 border-[1px] border-solid border-black/15" />
      <PrimaryButtonClean label="Contact me" url="/contact" />
    </div>
  );
};

export default Interested;
