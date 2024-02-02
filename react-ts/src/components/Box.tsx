import { Dispatch, SetStateAction } from "react";

// type PropsType={
//     heading:string;
//     count?:number;
//     children:ReactNode

// }

type InputValType = string | number;

const Box = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <div>
      {/* <h1>{heading}</h1>
        {count&&<h1>{count}</h1>}
        {children} */}

      <form>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setter(e.target.value as T)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Box;
