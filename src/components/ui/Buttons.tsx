import { ReactNode } from "react";

interface IProps {
    children : ReactNode ,
    className : string
}

export default function Buttons({children , className}:IProps) {
  return (
    <button className={`flex-1 py-2 rounded-md transition-colors ${className}`}>
      {children}
    </button>
  );
}
