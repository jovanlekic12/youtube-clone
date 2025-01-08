import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar";
import ReactPlayer from "react-player/youtube";
import VideoLink from "../../UI/VideoLink";
function VideoPage({ setIndex, setPage, handleSubmit, searchParams }) {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  let params = useParams();

  const fetchVideo = async () => {
    try {
      const response = await fetch(
        `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${params.id}`,
        {
          headers: {
            "x-rapidapi-key":
              "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
          },
        }
      );
      const data = await response.json();
      setVideo(data.items);
      fetchRelatedVideos();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const response = await fetch(
        `
https://youtube-v31.p.rapidapi.com/search?channelId=${video[0].snippet.channelId}&part=snippet,id&order=date&maxResults=34`,
        {
          headers: {
            "x-rapidapi-key":
              "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
          },
        }
      );
      const data = await response.json();
      setRelatedVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  console.log(relatedVideos);

  return (
    <div className="container">
      <Navbar
        setIndex={setIndex}
        setPage={setPage}
        handleSubmit={handleSubmit}
        searchParams={searchParams}
      ></Navbar>
      {video && (
        <main className="video__container">
          <div className="video__comments">
            <ReactPlayer
              className="react__player"
              url={`https://www.youtube.com/watch?v=${params.id}`}
              controls={true}
            ></ReactPlayer>
          </div>
          <div className="related__videos">
            {relatedVideos &&
              relatedVideos.map((video) => {
                return <VideoLink {...video} />;
              })}
          </div>
        </main>
      )}
    </div>
  );
}

export default VideoPage;
