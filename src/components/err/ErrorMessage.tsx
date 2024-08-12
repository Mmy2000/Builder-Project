
interface IProps {
    msg:string
}

export default function ErrorMessage({msg}:IProps) {
  return (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  )
}
