import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
function App() {
  const url =
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "x-rapidapi-key":
            "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
