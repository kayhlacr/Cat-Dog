import CatList from "../components/CatList";
import { cats } from "../data";

function CatListContainer() {
  return (
    <div className="container">
      <CatList cats={cats} />
    </div>
  );
}

export default CatListContainer;
