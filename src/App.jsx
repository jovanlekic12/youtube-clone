import "./App.css";
import { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router";
import Home from "./Components/pages/Home";
import links from "./assets/links";
function App() {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(links[index].name);
  //kad ukucam nesto u search u url upisem to sto sam ukucao
  //onda aktiviram submit event i unutar toga submit eventa procitam te paramatre
  // sad imam search bez da imam state??
  //pogledaj router setParams i useParams
  const [searchParams, setSearchParmas] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    setIndex(0);
    setPage(searchParams);
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
            searchParams={searchParams}
          />
        }
      />
    </Routes>
  );
}

export default App;
