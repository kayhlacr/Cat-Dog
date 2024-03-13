import Cat from "./Cat";
import { useNavigate } from "react-router-dom";

export default function CatList({ cats }) {
  const navigate = useNavigate();

  const handleCatClick = (catId) => {
    navigate(`/cats/${catId}`);
  };

  return (
    <div className="Cats">
      {cats.map((cat) => (
        <div
          key={cat.id}
          className="CatItem"
          onClick={() => handleCatClick(cat.id)}
        >
          <Cat cat={cat} />
        </div>
      ))}
    </div>
  );
}
