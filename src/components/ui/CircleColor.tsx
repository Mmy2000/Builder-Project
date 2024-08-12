
interface IProps {
    color : string
}


export default function CircleColor({color}:IProps) {
  return (
    <span className={`block w-5 h-5 cursor-pointer  rounded-full`} style={{backgroundColor : color}}></span>
  );
}
