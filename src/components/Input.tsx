import type { Ref } from "react";

interface InputProps {
    ref:Ref<HTMLInputElement>;
    placeholder: string;
    width?: boolean
}

const Input = ({ref, placeholder,width}: InputProps) => {
  return (
    <div>
        <input type="text" className={`px-4 py-2 bg-gray-200
         outline-none border border-gray-400 rounded-md ${width ? "w-full" : "w-96"}`} placeholder={placeholder} ref={ref}/>
    </div>
  )
}

export default Input