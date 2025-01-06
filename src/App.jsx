import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/pages/Home";
import links from "./assets/links";
function App() {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(links[index].name);

  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setIndex(0);
    setPage(searchValue);
  }

  return (
    <Routes>
      <Route
        index
        element={
          <Home
            index={index}
            page={page}
            setIndex={setIndex}
            setPage={setPage}
            handleSubmit={handleSubmit}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        }
      />
    </Routes>
  );
}

export default App;
