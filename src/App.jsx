// import { useState } from "react";
import { students, cats, dogs } from "./data.js";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="Students">
        <h1>Students</h1>
        {students.map((student) => {
          return <h2 key={student.id}>{student.name}</h2>;
        })}
      </div>
      <div className="Cats">
        <h1>Cats</h1>
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="CatCard">
              <h2>{cat.name}</h2>
              <p>Breed: {cat.breed}</p>
              <p>Favorite Toy: {cat.favoriteToy}</p>
            </div>
          );
        })}
      </div>
      <div className="Dogs">
        <h1>Dogs</h1>
        {dogs.map((dog) => {
          return (
            <div key={dog.id} className="DogCard">
              <h2>{dog.name}</h2>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
