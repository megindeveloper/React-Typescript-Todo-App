import { ReactSetState } from "../types/utils";

type Input = {
  types: "text" | "checkbox" | "color";
  inputValue: string;
  setInputValue?: ReactSetState<string> | undefined;
};

export const Input = ({ types, inputValue, setInputValue }: Input) => {
  return (
    <input
      type={types}
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
      className="w-full p-2 rounded-sm mb-2  text-black"
    />
  );
};
