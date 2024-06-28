const PrimaryButtonClean = ({ label }: { label: string }) => {
  return (
    <button
      type="button"
      className="py-4 px-10 border-[1px] font-Public-sans font-light border-solid border-black flex justify-center items-center text-nowrap uppercase tracking-widest w-max"
    >
      {label}
    </button>
  );
};

export default PrimaryButtonClean;
