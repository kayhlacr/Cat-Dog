import { useParams } from "react-router-dom";
import { dogs } from "../data";

const DogDetailsPage = () => {
  const { dogId } = useParams();
  const dog = dogs.find((dog) => dog.id === parseInt(dogId));

  if (!dog) {
    return <div>Sorry, dog not found!</div>;
  }

  return (
    <div className="dog-details-card">
      <h1>Dog Details</h1>
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
    </div>
  );
};

export default DogDetailsPage;
