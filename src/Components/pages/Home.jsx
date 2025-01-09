import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import VideoSection from "../VideoSection";
function Home({ index, setIndex, handleSubmit, searchParams }) {
  const page = searchParams.get("page");

  return (
    <div className="container">
      <Navbar setIndex={setIndex} handleSubmit={handleSubmit}></Navbar>
      <main className="main__container">
        <h1 className="main__heading">
          {index === 0 ? "New" : page} <span>videos</span>
        </h1>
        <SideBar index={index} setIndex={setIndex}></SideBar>
        <VideoSection></VideoSection>
      </main>
    </div>
  );
}

export default Home;
