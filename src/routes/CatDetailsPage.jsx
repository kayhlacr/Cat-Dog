import { useParams } from "react-router-dom";
import { cats } from "../data";

const CatDetailsPage = () => {
  const { catId } = useParams();
  const cat = cats.find((cat) => cat.id === parseInt(catId));

  if (!cat) {
    return <div>Sorry, cat not found!</div>;
  }

  return (
    <div className="cat-details-card">
      <h1>Cat Details</h1>
      <p>Name: {cat.name}</p>
      <p>Breed: {cat.breed}</p>
      <p>Favorite Toy: {cat.favoriteToy}</p>
    </div>
  );
};

export default CatDetailsPage;
