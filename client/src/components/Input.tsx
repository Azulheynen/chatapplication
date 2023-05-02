import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";


export const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
   return <input className={`py-1 px-2 border-gray-900 focus:border-blue-500 outline-double rounded  w-full ${className} `} 
  {...rest} ref={ref} />;
});
