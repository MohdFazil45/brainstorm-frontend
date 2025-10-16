interface InputProps {
    onChange: () => void,
    placeholder: string
}

const Input = ({onChange, placeholder}: InputProps) => {
  return (
    <div>
        <input type="text" className="px-4 py-2 bg-gray-200
         outline-none border border-gray-400 rounded-md w-96" placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input