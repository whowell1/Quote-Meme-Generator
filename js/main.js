var ourRequest = new XMLHttpRequest();
var giphyKey = "9xaw8gi6cJtrQZ0nLZ79Loc9YqIwLc8a";

function quotes() {
  console.log("test..");

  $.ajax({
    url: "https://talaikis.com/api/quotes/random/",
    success: function(data) {
     $("#quote").html(data.quote);
    $("#author").html(data.author);
    $("category").html(data.cat);
          var category = data.author;
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

      var imageString = "<img src=\"" + imgUrl + "\" />";
      // document.getElementById(imageString).height = "300";
      //$("#imageGif").html(imageString);
       $("#imageGif").css("background", "transparent url('"+imgUrl+"') no-repeat center");
    },
    async: true,
    dataTyp: "json"
  });
}

function getGoogleBooks(category) {
  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + category,
    success: function(data) {
  var bookUrl = data;
   var imgUrl = (data.items[0].volumeInfo.imageLinks.thumbnail);
    console.log(imgUrl);
   var imageString = "<img src=\"" + imgUrl + "\" />";
   $("#imageBook").html(imageString);
    },
    async: true,
    dataTyp: "json"
  });
}






quotes();
// getGiphyImage();
// getGoogleBooks();
