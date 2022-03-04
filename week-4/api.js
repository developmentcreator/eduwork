const { default: axios } = requer("axios");
const apiKey = "4d99d2c9ab144aa59f62b17b7a648d64";

async function getUserAxios() {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2021-12-02&sortBy=publishedAt&apiKey=${apiKey}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
getUserAxios();
