import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode ,
    className : string
}

export default function Buttons({children , className , ...rest}:IProps) {
  console.log(rest);
  
  return (
    <button className={`flex-1 py-2 rounded-md transition-colors ${className}`} {...rest}>
      {children}
    </button>
  );
}
