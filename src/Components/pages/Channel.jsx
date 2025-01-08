import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar";
import VideoLink from "../../UI/VideoLink";
function Channel({ setIndex, setPage, handleSubmit, searchParams }) {
  let params = useParams();

  const [channel, setChannel] = useState();
  const [channelVideos, setChannelVideos] = useState([]);
  const fetchChannelInfo = async () => {
    try {
      const response = await fetch(
        `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${params.id}`,
        {
          headers: {
            "x-rapidapi-key":
              "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
          },
        }
      );
      const data = await response.json();
      setChannel(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChannelVideos = async () => {
    try {
      const response = await fetch(
        `https://youtube-v31.p.rapidapi.com/search?channelId=${params.id}&part=snippet,id&order=date&maxResults=34`,
        {
          headers: {
            "x-rapidapi-key":
              "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
          },
        }
      );
      const data = await response.json();
      setChannelVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChannelInfo();
    fetchChannelVideos();
  }, []);

  return (
    <div className="container">
      <Navbar
        setIndex={setIndex}
        setPage={setPage}
        handleSubmit={handleSubmit}
        searchParams={searchParams}
      ></Navbar>
      {channel && (
        <main className="channel__container">
          <div className="channel__info__container">
            <img
              src={channel.items[0].snippet.thumbnails.high.url}
              alt={channel.items[0].snippet.title}
              className="channel__info__photo"
            />
            <h1 className="channel__info__name">
              {channel.items[0].snippet.title}
            </h1>
            <p className="channel__info__description">
              {channel.items[0].snippet.description}
            </p>
          </div>
          <h1 className="main__heading">
            <span>{channel.items[0].snippet.title}'s</span> videos
          </h1>
          <section className="video__section">
            {channelVideos &&
              channelVideos.map((item) => {
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
        </main>
      )}
    </div>
  );
}

export default Channel;
