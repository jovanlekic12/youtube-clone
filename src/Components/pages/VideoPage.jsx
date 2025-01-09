import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar";
import ReactPlayer from "react-player/youtube";
import VideoLink from "../../UI/VideoLink";
import Comment from "../../UI/Comment";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
function VideoPage({ setIndex, setPage, handleSubmit, searchParams }) {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
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
https://youtube-v31.p.rapidapi.com/search?channelId=${video.snippet.channelId}&part=snippet,id&order=date&maxResults=34`,
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
      fetchRelatedVideos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRelatedVideos();
    fetchVideoComments();
  }, []);

  console.log(video);

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
          <section className="video__comments">
            <ReactPlayer
              className="react__player"
              url={`https://www.youtube.com/watch?v=${params.id}`}
              controls={true}
            ></ReactPlayer>
            <div className="video__stats">
              <h3 className="video__title">{video.snippet.title}</h3>
              <div className="video__stats__info">
                <p className="video__views">
                  {Number(video.statistics.viewCount).toLocaleString("en-US")}{" "}
                  views
                </p>
                <div className="video__right__side">
                  <div className="video__right__side__block">
                    <button className="video__right__side__button">
                      <AiOutlineLike />
                    </button>
                    <p className="video__likes">
                      {Number(video.statistics.likeCount).toLocaleString(
                        "en-US"
                      )}
                    </p>
                    <button className="video__right__side__button">
                      <AiOutlineDislike />
                    </button>
                  </div>
                  <div className="video__right__side__block">
                    <button className="video__right__side__button">
                      <IoIosShareAlt />
                      <p>Share</p>
                    </button>
                  </div>
                  <div className="video__right__side__block">
                    <button className="video__right__side__button">
                      <IoDownloadOutline />
                      <p>Download</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ul className="comments__list">
              {comments &&
                comments.map((comment) => {
                  return <Comment {...comment} key={comment.id} />;
                })}
            </ul>
          </section>
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
