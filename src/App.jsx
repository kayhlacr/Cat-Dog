// import { useState } from "react";

import "./App.css";
import StudentListContainer from "./routes/StudentListContainer";
import CatListContainer from "./routes/CatsListContainer";
import DogListContainer from "./routes/DogsListContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<StudentListContainer />} />
        <Route path="/cats" element={<CatListContainer />} />
        <Route path="/dogs" element={<DogListContainer />} />
      </Routes>
    </>
  );
}

export default App;
