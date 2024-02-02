import { ReactNode } from "react";

// type PropsType={
//     heading:string;
//     count?:number;
//     children:ReactNode
   
// }

type InputValType=string|number

const Box=<T extends InputValType>({label,value,onChange}:{
label:string,
value:T,
onChange:()=>void
})=> {
   
  return (
    <div>
        {/* <h1>{heading}</h1>
        {count&&<h1>{count}</h1>}
        {children} */}

        <form>
            <label>
              {label}
            </label>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Box