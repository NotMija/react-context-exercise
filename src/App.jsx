import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import { List } from "./pages/ListBeer";
import { BeerDetail } from "./pages/BeerDetail";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<BeerDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
