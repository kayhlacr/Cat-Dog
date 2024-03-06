import CatList from "../components/CatList";
import { cats } from "../data";

function CatListContainer() {
  return (
    <div className="container">
      <h1>Cats</h1>
      <CatList cats={cats} />
    </div>
  );
}

export default CatListContainer;
