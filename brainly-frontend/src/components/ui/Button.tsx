import { ReactElement } from "react";

type Variants = "primary" | "secondary"
export interface ButtonProps{
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-200 text-purple-600",
}

const sizeStyles = {
  "sm": "py-2 px-2 text-sm rounded-sm font-light flex items-center",
  "md": "py-2 px-4 text-md rounded-md font-light flex items-center",
  "lg": "py-2 px-6 text-lg rounded-xl font-light flex items-center"
}

const defaultStyles = "rounded-md flex cursor-pointer"

export const Button = (props:ButtonProps) => {

  return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${props.fullWidth ? "w-full flex justify-center items-center" : ""} ${sizeStyles[props.size]}`} >{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} </button>
}

