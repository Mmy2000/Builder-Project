import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    color : string,
    onClick : () => void
}


export default function CircleColor({color , ...rest}:IProps) {
  return (
    <span className={`block w-5 h-5 cursor-pointer  rounded-full`} style={{backgroundColor : color}} {...rest}></span>
  );
}
