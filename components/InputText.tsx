import { ChangeEventHandler } from "react";

type TInput = {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onChangeTextArea?: ChangeEventHandler<HTMLTextAreaElement>;
  error: string | undefined;
  isTouched: boolean | undefined;
};

const InputText = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  isTouched,
}: TInput) => {
  return (
    <label htmlFor="fullName">
      {label}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full mt-4 p-4 placeholder-gray-400 focus:border-[1px] focus:border-solid ${
          isTouched && error ? "border-secondary-brightred" : "border-none"
        } bg-secondary-lightgray focus:border-primary-cyan focus:outline-none focus:ring-0 appearance-none`}
      />
      {isTouched && error ? (
        <div className="text-secondary-brightred italic font-Public-sans mt-2">
          {error}
        </div>
      ) : null}
    </label>
  );
};

export default InputText;
