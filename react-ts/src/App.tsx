import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [] = useState();
  return (
    <>
      <div>
        <Box label="Search" value={""} onChange={() => {}} />
      </div>
    </>
  );
}

export default App;
{
  /* <Box children={<>lol</>} heading={"Hello world red freeman"} count={234} /> */
}
