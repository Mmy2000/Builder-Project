
interface IProps {
    text : string ,
    className : string
}

export default function Buttons({text , className}:IProps) {
  return (
    <button className={className}>
      {text}
    </button>
  );
}
