import Dog from "./Dog";
import { useNavigate } from "react-router-dom";

export default function DogList({ dogs }) {
  const navigate = useNavigate();

  const handleDogClick = (dogId) => {
    navigate(`/dogs/${dogId}`);
  };

  return (
    <div className="Dogs">
      {dogs.map((dog) => (
        <div
          key={dog.id}
          className="DogItem"
          onClick={() => handleDogClick(dog.id)}
        >
          <Dog dog={dog} />
        </div>
      ))}
    </div>
  );
}
