import type { ReactElement } from "react";

type Variants = "primary" | "secondary"; 
interface ButtonsProps { 
    variant: Variants; 
    size:"sm" | "md" | "lg"; 
    text: string; 
    startIcon?: ReactElement; 
    endIcon?: ReactElement; 
    onClick?: () => void ;
    fullWidth?: boolean;
    loading?: boolean;
} 

const variantsStyles = {
    "primary" : "bg-[var(--color-300)] text-[var(--color-600)]", 
    "secondary" : "bg-[var(--color-600)] text-[var(--color-300)]" 
} 

const variantsSize = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
} 

const Button = ({variant, size , startIcon, text, endIcon,fullWidth,loading, onClick}: ButtonsProps) => { 
    return ( 
    <button onClick={onClick} className={` ${variantsStyles[variant]} ${variantsSize[size]} ${fullWidth ? " w-full flex items-center justify-center" : "" } ${loading ? "opacity-35 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg cursor-pointer" } rounded-md flex gap-2 items-center justify-center transition-transform duration-200 `}>
      {startIcon}
      {text}
      {endIcon}
    </button> 
    )
} 

export default Button