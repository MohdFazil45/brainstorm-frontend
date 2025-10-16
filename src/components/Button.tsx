import type { ReactElement } from "react";

type Variants = "primary" | "secondary"; 
interface ButtonsProps { 
    variant: Variants; 
    size:"sm" | "md" | "lg"; 
    text: string; 
    startIcon?: ReactElement; 
    endIcon?: ReactElement; 
    onClick?: () => void 
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

const Button = ({variant, size , startIcon, text, endIcon, onClick}: ButtonsProps) => { 
    return ( 
    <button onClick={onClick} className={` ${variantsStyles[variant]} ${variantsSize[size]} rounded-md flex gap-2 items-center justify-center hover:scale-105 cursor-pointer`}>
      {startIcon}
      {text}
      {endIcon}
    </button> 
    )
} 

export default Button