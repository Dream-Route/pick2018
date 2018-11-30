$(document).ready(function () {
  console.log("ready!");
  var onLoad = ["The Shawshank Redemption", "The Usual Suspects", "Papillon", "The Terminator"];
  NewMovieAdder(onLoad)
  // The createRow function takes data returned by OMDB and appends the table data to the tbody

  //function NewMovieAdder(){


  //NewMovieAdder();
  // clearAndShow();

  $("form").submit(function (event) {
    event.preventDefault()
    console.log("adding movie", $(".inputName").val())
    NewMovieAdder();
  });

  function NewMovieAdder(array) {
    var moviiii = $(".inputName").val();

    var createRow = function (data) {
      // Get reference to existing tbody element, create a new table row element
      var tBody = $("tbody");
      var tRow = $("<tr>");
      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(data.Title);
      var ratedTd = $("<td>").text(data.Rated);
      var runtimeTd = $("<td>").text(data.Runtime);
      var imdb = $("<td>").text(data.Ratings[0].Value);
      var rottenTomatoes = $("<td>").text(data.Ratings[1].Value);
      var metaCritic= $("<td>").text(data.Ratings[2].Value);

      // Append the newly created table data to the table row
      tRow.append(titleTd, ratedTd, runtimeTd,imdb,rottenTomatoes,metaCritic);
      // Append the table row to the table body
      tBody.append(tRow);
    };

    var searchOMDB = function (movie) {
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        createRow(response);
      });
    };
    if (moviiii) { //only run if something is in the text input
      console.log(moviiii)
      // onLoad.push(moviiii);
      searchOMDB(moviiii);
      // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow


    } else if (array) {
      console.log("Moviii was blank, sending default movies")
      for (i = 0; i < array.length; i++) {

        searchOMDB(array[i]);
        // document.getElementById('name-input').innerHTML = addAmovie;
      };
    }
    // Search the OMDB API for the following movies, and append table rows for each


  };


});