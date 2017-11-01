var ourRequest = new XMLHttpRequest();
var giphyKey = "9xaw8gi6cJtrQZ0nLZ79Loc9YqIwLc8a";

function quotes() {
  console.log("test..");

  $.ajax({
    url: "https://talaikis.com/api/quotes/random/",
    success: function(data) {
     $("#quote").html(data.quote);
    //  var author  = data.author.split(' ').join('+')
    $("#author").html(data.author);
      // var category = $("#category").html(data.cat);
      var category = data.cat;
      console.log(category);
      getGiphyImage(category);

      getGoogleBooks(category);
    },
    async: true,
    dataTyp: "json"
  });
}

function getGiphyImage(keyword) {
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search?" + "api_key=" + giphyKey + "&q=" + keyword + "&limit=25&offset=0&lang=en",
    success: function(data) {
      var imgUrl = (data.data[Math.floor(Math.random() * 24)].images.original.url);
      // console.log(imgUrl);
      var imageString = "<img src=\"" + imgUrl + "\" />";
      //

      // console.log(imageString);
      $("#imageGif").html(imageString);

    },
    async: true,
    dataTyp: "json"
  });
}

function getGoogleBooks(category) {
  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + category,
    success: function(data) {
    // console.log(url);
  var bookUrl = data;
   var imgUrl = (data.items[0].volumeInfo.imageLinks.thumbnail);
    console.log(imgUrl);
   var imageString = "<img src=\"" + imgUrl + "\" />";
  //  console.log(imageString);
   $("#imageBook").html(imageString);

    },
    async: true,
    dataTyp: "json"
  });
}



// function quotes() {
//
//
//   // ourRequest.open("GET", 'https://talaikis.com/api/quotes/random/');
// ourRequest.onload = function() {
//   var body = JSON.parse(ourRequest.responseText);
//   console.log(body.quote);
//   var author = body.author.replace(" ", "+");
//   console.log(author);
//   var category = body.cat;
//   console.log(category);
//   getResponseGiphy(category);
//   recommendBook(author);
//   $('#quote').append(body.quote);
//   $('#author').append(body.author);
//

// ourRequest.open("GET", 'https://talaikis.com/api/quotes/random/');
// ourRequest.onload = function() {
//   var body = JSON.parse(ourRequest.responseText);
//   console.log(body.quote);
//   var author = body.author.replace(" ", "+");
//   console.log(author);
//   var category = body.cat;
//   console.log(category);
//   getResponseGiphy(category);
//   recommendBook(author);
//   $('#quote').append(body.quote);
//   $('#author').append(body.author);
//


// function getResponseGiphy(keyword) {
//   var url = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + giphyKey + "&q=" + keyword + "&limit=25&offset=0&lang=en";
//   console.log(url);
//   ourRequest.open("GET", url);
//   ourRequest.onload = function() {
//     var body = JSON.parse(ourRequest.responseText);
//     console.log(body.data[Math.floor(Math.random() * 24)].url);
//   };
//   ourRequest.send();
// }
//
// function recommendBook(author) {
//   var url = "https://www.googleapis.com/books/v1/volumes?q=" + author;
//   ourRequest.open("GET", url);
//   ourRequest.onload = function() {
//     var body = JSON.parse(ourRequest.responseText);
//     console.log(body.items[0].volumeInfo.imageLinks.thumbnail);
//   };
//   ourRequest.send();
// }







quotes();
getGiphyImage();
getGoogleBooks();
