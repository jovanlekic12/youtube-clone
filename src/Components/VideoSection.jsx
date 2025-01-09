import { Link } from "react-router";
import { useEffect, useState } from "react";
import VideoLink from "../UI/VideoLink";
import { useSearchParams } from "react-router";
function VideoSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const page = searchParams.get("page");

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
    searchParams.set("page", "Home");
    setSearchParams(searchParams);
  }, [page]);

  return (
    <section className="video__section">
      {items &&
        items.map((item) => {
          return (
            <VideoLink
              {...item}
              key={
                item.id.kind === "youtube#video"
                  ? item.id.videoId
                  : item.id.channelId
              }
            />
          );
        })}
    </section>
  );
}

export default VideoSection;
