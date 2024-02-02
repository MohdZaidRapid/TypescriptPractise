import { ReactNode } from "react";

type PropsType={
    heading:string;
    count?:number;
    children:ReactNode
   
}

const Box=({heading,count=5,children}:PropsType)=> {
   
  return (
    <div>
        <h1>{heading}</h1>
        {count&&<h1>{count}</h1>}
        {children}
    </div>
  )
}

export default Box