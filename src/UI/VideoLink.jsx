import { Link, useSearchParams } from "react-router";
import { formatDistanceToNow } from "date-fns";

function VideoLink(props) {
  const { id, snippet, type } = props;
  const relatedClass = type;
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Link
      className="video__card__link"
      to={
        id.kind === "youtube#video"
          ? `video/${id.videoId}`
          : `channel/${id.channelId}`
      }
    >
      <div
        className={
          id.kind === "youtube#channel"
            ? "channel__card"
            : `video__card ${relatedClass}__video__card`
        }
      >
        <img
          className={
            id.kind === "youtube#channel"
              ? "channel__card__thumbnail"
              : `video__card__thumbnail ${relatedClass}__video__card__thumbnail`
          }
          src={snippet?.thumbnails?.high?.url ?? ""}
          alt={snippet.title}
        />
        {id.kind === "youtube#channel" ? (
          <div className="video__card__description">
            <h5 className="channel__card__title">{snippet.channelTitle}</h5>
            <p className="channel__card__description">{snippet.description}</p>
          </div>
        ) : (
          <div className="video__card__description">
            <h5 className="video__card__title">
              {snippet.title.length > 80
                ? snippet.title.slice(0, 80) + "..."
                : snippet.title}
            </h5>
            <p className="video__card__channel">{snippet.channelTitle}</p>
            <p className="video__card__formated__date">
              {formatDistanceToNow(new Date(snippet.publishTime))} ago
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default VideoLink;
