import { Link } from "react-router";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

function VideoSection({ page }) {
  const [items, setItems] = useState([]);
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${
    page === "Home" ? "New" : page
  }&part=snippet,id&maxResults=24&regionCode=US`;
  const fetchHomeData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "x-rapidapi-key":
            "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
        },
      });
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHomeData();
  }, [page]);

  return (
    <section className="video__section">
      {items &&
        items.map((item) => {
          return (
            <Link
              className="video__card__link"
              to={`/video/${item.id.videoId}`}
              key={item.id.videoId}
            >
              <div
                className={
                  item.id.kind === "youtube#channel"
                    ? "channel__card"
                    : "video__card"
                }
              >
                <img
                  className={
                    item.id.kind === "youtube#channel"
                      ? "channel__card__thumbnail"
                      : "video__card__thumbnail"
                  }
                  src={item.snippet.thumbnails.high.url}
                  alt={item.snippet.title}
                />
                {item.id.kind === "youtube#channel" ? (
                  <div className="video__card__description">
                    <h5 className="channel__card__title">
                      {item.snippet.channelTitle}
                    </h5>
                    <p className="channel__card__description">
                      {item.snippet.description}
                    </p>
                  </div>
                ) : (
                  <div className="video__card__description">
                    <h5 className="video__card__title">
                      {item.snippet.title.length > 80
                        ? item.snippet.title.slice(0, 80) + "..."
                        : item.snippet.title}
                    </h5>
                    <p className="video__card__channel">
                      {item.snippet.channelTitle}
                    </p>
                    <p className="video__card__formated__date">
                      {formatDistanceToNow(new Date(item.snippet.publishTime))}{" "}
                      ago
                    </p>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
    </section>
  );
}

export default VideoSection;
