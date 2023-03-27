// Fetch Api
fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
