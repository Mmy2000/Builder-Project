import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode ,
    className : string ,
    width? : "w-full" | "w-fit"
}

export default function Buttons({children , className , width='w-full' , ...rest}:IProps) {
  
  return (
    <button className={` py-2 px-4 rounded-md ${width} transition-colors  ${className}`}  {...rest}>
      {children}
    </button>
  );
}
