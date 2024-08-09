import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: IProps) {
  return (
    <input
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}
      {...rest}
    />
  );
}
