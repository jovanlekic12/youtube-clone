const url =
  "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";

const fetchHomeData = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
      },
    });
    const data = await response.json();
    console.log(data.items);
    return data.items;
  } catch (error) {
    console.log(error);
  }
};

export default fetchHomeData;
