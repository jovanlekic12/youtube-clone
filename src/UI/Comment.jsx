import { formatDistanceToNow } from "date-fns";

function Comment(props) {
  const { snippet } = props;
  const { topLevelComment } = snippet;

  return (
    <article className="comment">
      <img
        src={topLevelComment.snippet.authorProfileImageUrl}
        alt=""
        className="comment__author__photo"
      />
      <div>
        <header className="comment__author__info">
          <h5 className="comment__author__username">
            {topLevelComment.snippet.authorDisplayName}
          </h5>
          <span className="formated__date__comment">
            {" "}
            {formatDistanceToNow(new Date(topLevelComment.snippet.publishedAt))}
          </span>
        </header>
        <p className="comment__text">{topLevelComment.snippet.textDisplay}</p>
      </div>
    </article>
  );
}

export default Comment;
