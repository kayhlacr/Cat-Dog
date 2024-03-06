import DogList from "../components/DogList";
import { dogs } from "../data";

function DogListContainer() {
  return (
    <div className="container">
      <DogList dogs={dogs} />
    </div>
  );
}

export default DogListContainer;
