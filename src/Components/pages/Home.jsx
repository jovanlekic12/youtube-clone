import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import VideoSection from "../VideoSection";
function Home() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <main className="main__container">
        <h1 className="main__heading">
          New <span>videos</span>
        </h1>
        <SideBar></SideBar>
        <VideoSection></VideoSection>
      </main>
    </div>
  );
}

export default Home;
