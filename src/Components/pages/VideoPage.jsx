import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar";
import VideoLink from "../../UI/VideoLink";

import VideoComments from "../../UI/VideoComments";
function VideoPage({ setIndex, setPage, searchParams, setSearchTerms }) {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  let params = useParams();

  console.log(video);

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
      setVideo(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRelatedVideos = async () => {
    try {
      await fetchVideo();
      const response = await fetch(
        `
https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${params.id}&part=snippet,id&order=date&maxResults=34`,
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

  const fetchVideoComments = async () => {
    try {
      const response = await fetch(
        `
https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${params.id}&maxResults=100`,
        {
          headers: {
            "x-rapidapi-key":
              "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
          },
        }
      );
      const data = await response.json();
      setComments(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Promise.all([fetchVideo(), fetchRelatedVideos(), fetchVideoComments()]);
  }, []);

  return (
    <div className="container">
      <Navbar
        setIndex={setIndex}
        setPage={setPage}
        searchParams={searchParams}
        setSearchTerms={setSearchTerms}
      ></Navbar>
      {video && (
        <main className="video__container">
          <VideoComments video={video} comments={comments} id={params.id} />
          <div className="related__videos">
            {relatedVideos &&
              relatedVideos.map((video) => {
                return <VideoLink {...video} type="related" />;
              })}
          </div>
        </main>
      )}
    </div>
  );
}

export default VideoPage;
