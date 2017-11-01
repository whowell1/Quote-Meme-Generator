var randomQuotes = "https://talaikis.com/api/quotes/random/";
var request = require("request");
// var http = require("http");
// var require = require("require");
var giphyKey = "9xaw8gi6cJtrQZ0nLZ79Loc9YqIwLc8a" ;



function getResponseGiphy(keyword){
  var url = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + giphyKey + "&q=" + keyword + "&limit=25&offset=0&lang=en"
 console.log(url);
  request(url, function(err, response, body){
    body = JSON.parse(body);
    // console.log(body.data[Math.floor(Math.random()*24)].url);
    console.log(body.data[Math.floor(Math.random()*24)].images.fixed_height_downsampled.url);
  })
}

function quotes(){
request(randomQuotes, function(err, res, body) {
  body = JSON.parse(body);
  var quote = body.quote;
  var author = body.author.replace(" ","+");
  var category = body.cat;
  getResponseGiphy(category)
  recommendBook(author);

})
}

function recommendBook(author) {
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + author;
  console.log(url);
  request(url, function(err, response, body){
    body = JSON.parse(body);
    // console.log(body.items[0].volumeInfo.imageLinks.thumbnail);

  })




}

quotes();
