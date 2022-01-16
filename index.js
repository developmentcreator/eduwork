const { default: axios } = require("axios");

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=4d99d2c9ab144aa59f62b17b7a648d64";

console.log("Eduwork News");

const iniPromise = new Promise((resolve, reject) => {
  axios
    .get(url)
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      reject(error);
    });
});

async function ambilData() {
  const data = await iniPromise;
  console.log(data);
}

ambilData();
