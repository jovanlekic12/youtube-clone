import { useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import VideoSection from "../VideoSection";
function Home({
  index,
  page,
  setIndex,
  setPage,
  setSearchValue,
  searchValue,
  handleSubmit,
}) {
  return (
    <div className="container">
      {/* //share layout */}
      <Navbar
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
        searchValue={searchValue}
      ></Navbar>
      <main className="main__container">
        <h1 className="main__heading">
          {index === 0 ? "New" : page} <span>videos</span>
        </h1>
        <SideBar
          index={index}
          page={page}
          setIndex={setIndex}
          setPage={setPage}
          setSearchValue={setSearchValue}
        ></SideBar>
        <VideoSection page={page}></VideoSection>
      </main>
    </div>
  );
}

export default Home;
