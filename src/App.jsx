import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router";
import Home from "./Components/pages/Home";
import Channel from "./Components/pages/Channel";
import VideoPage from "./Components/pages/VideoPage";
function App() {
  const [index, setIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    setIndex(0);
    setPage(searchParams);
  }

  useEffect(() => {
    searchParams.set("page", "Home");
    setSearchParams(searchParams);
  }, []);

  return (
    <Routes>
      <Route
        index
        element={
          <Home
            index={index}
            setIndex={setIndex}
            handleSubmit={handleSubmit}
            searchParams={searchParams}
          />
        }
      />
      <Route
        path="channel/:id"
        element={
          <Channel
            setIndex={setIndex}
            handleSubmit={handleSubmit}
            searchParams={searchParams}
          />
        }
      />
      <Route
        path="video/:id"
        element={
          <VideoPage
            setIndex={setIndex}
            handleSubmit={handleSubmit}
            searchParams={searchParams}
          />
        }
      />
    </Routes>
  );
}

export default App;
