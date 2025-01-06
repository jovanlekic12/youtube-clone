import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import VideoSection from "../VideoSection";
function Home({ index, page, setIndex, setPage }) {
  return (
    <div className="container">
      {/* //share layout */}
      <Navbar></Navbar>
      <main className="main__container">
        <h1 className="main__heading">
          {index === 0 ? "New" : page} <span>videos</span>
        </h1>
        <SideBar
          index={index}
          page={page}
          setIndex={setIndex}
          setPage={setPage}
        ></SideBar>
        <VideoSection page={index === 0 ? "New" : page}></VideoSection>
      </main>
    </div>
  );
}

export default Home;
