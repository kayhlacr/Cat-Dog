// import { useState } from "react";
import { students, cats, dogs } from "./data";
import "./App.css";
import StudentList from "./components/StudentList";
import CatList from "./components/CatList";
import DogList from "./components/DogList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <StudentList students={students} />
      <CatList cats={cats} />
      <DogList dogs={dogs} />
    </div>
  );
}

export default App;
