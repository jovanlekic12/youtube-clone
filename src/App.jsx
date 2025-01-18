import "./App.css";
import { useState } from "react";
import { Route, Routes, useSearchParams } from "react-router";
import Home from "./Components/pages/Home";
import Channel from "./Components/pages/Channel";
import VideoPage from "./Components/pages/VideoPage";
function App() {
  const [index, setIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerms, setSearchTerms] = useState("");

  return (
    <Routes>
      <Route
        index
        element={
          <Home
            index={index}
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            setIndex={setIndex}
            searchParams={searchParams}
          />
        }
      />
      <Route
        path="channel/:id"
        setSearchTerms={setSearchTerms}
        element={<Channel setIndex={setIndex} searchParams={searchParams} />}
      />
      <Route
        path="video/:id"
        element={
          <VideoPage
            setSearchTerms={setSearchTerms}
            setIndex={setIndex}
            searchParams={searchParams}
          />
        }
      />
    </Routes>
  );
}

export default App;
