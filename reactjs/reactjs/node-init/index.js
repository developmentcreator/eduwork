let katakunci = "teknologi";
let url = `https://newsapi.org/v2/everything?q=${katakunci}&apiKey=4d99d2c9ab144aa59f62b17b7a648d64`;

//console.log("Eduwork News");

const iniPromise = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

function myFunction() {
  katakunci = document.getElementById("inputkatakunci").value;
  url = `https://newsapi.org/v2/everything?q=${katakunci}&apiKey=4d99d2c9ab144aa59f62b17b7a648d64`;

  ambilData();
}

function render(result) {
  let articles = "";
  result.forEach((element) => {
    articles += `
    <h3>${element.title}</h3>
    <img src ="${element.urlToImage}" class="img"></img>
    <p>${element.content}</p>
    <p>${element.description}</p>
    <p>${element.publishedAt}</p>
    <hr />`;
  });
  const boxHtml = document.getElementById("box-articles");
  boxHtml.innerHTML = articles;
}

async function ambilData() {
  const data = await iniPromise();
  render(data.articles);
}

ambilData();
