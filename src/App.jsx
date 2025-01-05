import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/pages/Home";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
