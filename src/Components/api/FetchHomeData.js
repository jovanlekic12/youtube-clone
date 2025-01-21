const page = searchParams.get("page");

export const fetchHomeData = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": "fadb7a171cmsh112bc1aa0f920dap1e432cjsn7da29b0294a0",
      },
    });
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log(error);
  }
};
