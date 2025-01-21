import { useEffect, useState } from "react";
import VideoLink from "../UI/VideoLink";
import { useSearchParams } from "react-router";
import { fetchHomeData } from "./api/FetchHomeData";
function VideoSection({ searchTerms }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const page = searchParams.get("page");
  const search = searchTerms;

  const url1 = `https://youtube-v31.p.rapidapi.com/search?q=${
    page === "Home" || !page ? "New" : page
  }&part=snippet,id&maxResults=24&regionCode=US`;

  const url2 = `https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet,id&maxResults=24&regionCode=US`;

  useEffect(() => {
    if (search) {
      setItems(fetchHomeData(url2));
    }
  }, [search]);

  useEffect(() => {
    setItems(fetchHomeData(url1));
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
