import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export default function Input({...rest}:IProps) {
  return (
    
      <input  {...rest} />
    
  );
}
