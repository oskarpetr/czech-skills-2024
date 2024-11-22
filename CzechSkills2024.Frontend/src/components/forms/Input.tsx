import { ChangeEvent, FocusEvent, Fragment } from "react";
import FormError from "./FormError";

interface Props {
  type?: "text" | "email" | "password";
  name: string;
  onChange: (event: ChangeEvent) => void;
  onBlur: (event: FocusEvent) => void;
  placeholder: string;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
}

export default function Input({
  type = "text",
  name,
  placeholder,
  onChange,
  onBlur,
  value = "",
  error,
  touched,
}: Props) {
  return (
    <Fragment>
      <div className="relative flex items-center">
        <input
          key={name}
          type={type}
          name={name}
          className="focus:ring-4 ring-opacity-5 ring-neutral-600 transition-all outline-none w-full px-6 py-3 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20 text-white"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>

      <FormError error={error} touched={touched} />
    </Fragment>
  );
}
