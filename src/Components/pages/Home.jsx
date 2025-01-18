import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import VideoSection from "../VideoSection";
function Home({ index, setIndex, searchParams, searchTerms, setSearchTerms }) {
  const page = searchParams.get("page");

  return (
    <div className="container">
      <Navbar
        setIndex={setIndex}
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
      ></Navbar>
      <main className="main__container">
        <h1 className="main__heading">
          {index === 0 ? "New" : page} <span>videos</span>
        </h1>
        <SideBar index={index} setIndex={setIndex}></SideBar>
        <VideoSection searchTerms={searchTerms}></VideoSection>
      </main>
    </div>
  );
}

export default Home;
