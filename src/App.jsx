import "./App.css";
import StudentListContainer from "./routes/StudentListContainer";
import CatListContainer from "./routes/CatsListContainer";
import DogListContainer from "./routes/DogsListContainer";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import CatDetailsPage from "./routes/CatDetailsPage";
import DogDetailsPage from "./routes/DogDetailsPage";

function App() {
  const navigate = useNavigate();
  const pageRoutes = ["/", "/cats", "/dogs"];

  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cats">Cats</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Dogs</NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            const randomPageIndex = Math.floor(
              Math.random() * pageRoutes.length
            );
            navigate(pageRoutes[randomPageIndex]);
          }}
        >
          Random Page
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<StudentListContainer />} />
        <Route path="/cats" element={<CatListContainer />} />
        <Route path="/dogs" element={<DogListContainer />} />
        <Route path="/cats/:catId" element={<CatDetailsPage />} />
        <Route path="/dogs/:dogId" element={<DogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
