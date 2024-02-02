import { FormEvent, ReactNode, createContext, useState } from "react";
// import Box from "./components/Box";

// interface Person {
//   name: string;
//   age: number;
// }

// function App() {
//   const [user, setUser] = useState<Person>();

//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(user);
//   };
// return (
//   <>
//     <div>
//       {/* <Box label="Search" value={val} setter={setVal} /> */}
//       <form onSubmit={submitHandler}>
//         <input
//           type="number"
//           placeholder="Age"
//           value={user?.age || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
//           }
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={user?.name || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, name: e.target.value }))
//           }
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   </>
// );

// return()
// }

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div>Hello</div>
    </ThemeProvider>
  );
}

export default App;
{
  /* <Box children={<>lol</>} heading={"Hello world red freeman"} count={234} /> */
}
