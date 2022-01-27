const box = document.getElementById("data");
const search = document.getElementById("input-search");
const img = document.getElementById("img");
const title = document.getElementById("title");
const content = document.getElementById("content");
const description = document.getElementById("description");
const publishedAt = document.getElementById("publishedAt");
let katakunci = "tesla";
let url =
  "https://newsapi.org/v2/everything?q=" +
  katakunci +
  "&apiKey=4d99d2c9ab144aa59f62b17b7a648d64";

console.log("Eduwork News");

const iniPromise = new Promise((resolve, reject) => {
  console.log("axiosrun");
  axios
    .get(url)
    .then(function (response) {
      console.log(url, response);
      resolve(response.data);
    })
    .catch(function (error) {
      console.log(error, url);
      reject(error);
    });
});

async function myFunction() {
  katakunci = document.getElementById("inputkatakunci").value;
  url =
    "https://newsapi.org/v2/everything?q=" +
    katakunci +
    "&apiKey=4d99d2c9ab144aa59f62b17b7a648d64";

  console.log(katakunci, "myFunction");
  ambilData();
  //const data = await iniPromise;
  //console.log(data);
}

function render(result) {
  let articles = "";
  result.forEach((element) => {
    articles += `<img src ="${element.urlToImage}" class="img"></img>
    <img src ="${element.urlToImage}" id="img"></img>
    <h3>${element.title}</h3>
    <p>${element.content}</p>
    <p>${element.description}</p>
    <p>${element.publishedAt}</p>`;
  });
  const boxHtml = document.getElementById("box-articles");
  boxHtml.innerHTML = articles;
}

async function ambilData() {
  console.log(katakunci, "ambildata");
  const data = await iniPromise;
  render(data.articles);
  return box;
}

ambilData();
