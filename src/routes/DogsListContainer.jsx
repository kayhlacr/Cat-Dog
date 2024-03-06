import DogList from "../components/DogList";
import { dogs } from "../data";

function DogListContainer() {
  return (
    <div className="container">
      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </div>
  );
}

export default DogListContainer;
