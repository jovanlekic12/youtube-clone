import ReactPlayer from "react-player/youtube";
import Comment from "../UI/Comment";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";

function VideoComments(props) {
  const { video, comments, id, type } = props;

  return (
    <section className="video__comments">
      <ReactPlayer
        className="react__player"
        url={`https://www.youtube.com/watch?v=${id}`}
        controls={true}
      ></ReactPlayer>
      <div className="video__stats">
        <h3 className="video__title">{video.snippet.title}</h3>
        <div className="video__stats__info">
          <p className="video__views">
            {Number(video.statistics.viewCount).toLocaleString("en-US")} views
          </p>
          <div className="video__right__side">
            <div className="video__right__side__block">
              <button className="video__right__side__button">
                <AiOutlineLike />
              </button>
              <p className="video__likes">
                {Number(video.statistics.likeCount).toLocaleString("en-US")}
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
  );
}

export default VideoComments;
