var getUserInfo = function() {
  $.ajax({
    url: "http://159.203.175.239:8080/checkouts.txt",
    method: "GET",
    success: function(data){
      crunchUserData(data);
    },
    error: function(data){
      console.log("there was an error with the user ajax request");
    }
  });
};

var getMovieInfo = function(maxID){
  $.ajax({
    url: "http://159.203.175.239:8080/movies.txt",
    method: "GET",
    success: function(data){
      crunchMovieData(data, maxID);
    },
    error: function(data){
      console.log("there was an error with the movie ajax request");
    }
  });
};


var crunchUserData = function(data){
  var userArray = data.split("\n");
  var checkoutLogs = {};
  var userMaxCount = 0;
  var monthMaxCount = 0;
  var movieMaxCount = 0;
  var maxUser;
  var maxMonth;
  var maxMovie;
  for (var i = 0; i < userArray.length; i++) {
    var checkout = userArray[i].split(" ");
    var user = checkout[0];
    var month = checkout[1];
    var movieID = checkout[2];

    if (checkoutLogs[user] === undefined){
      checkoutLogs[user] = 1;
    } else {
      checkoutLogs[user] += 1;
      if (checkoutLogs[user] > userMaxCount){
        maxUser = user;
        userMaxCount = checkoutLogs[user];
      }
    }
    if (checkoutLogs[month] === undefined){
      checkoutLogs[month] = 1;
    } else {
      checkoutLogs[month] += 1;
      if (checkoutLogs[month] > monthMaxCount){
        maxMonth = month;
        monthMaxCount = checkoutLogs[month];
      }
    }
    if (checkoutLogs[movieID] === undefined){
      checkoutLogs[movieID] = 1;
    } else {
      checkoutLogs[movieID] += 1;
      if (checkoutLogs[movieID] > movieMaxCount){
        maxMovie = movieID;
        movieMaxCount = checkoutLogs[movieID];
      }
    }

  }
  getMovieInfo(maxMovie);

};

var crunchMovieData = function(data, maxMovie){
  var movieArray = data.split("\n");
  var movieName = "";
  for (var i = 0; i < movieArray.length; i++) {
    var movieRow = movieArray[i].split(" ");
    if (movieRow[0] === maxMovie){
      movieName = movieRow.slice(1, movieRow.length-1).join(" ");
    }
  }

  console.log(movieName);

};

function callBoth(){
  getUserInfo();
}

$(document).ready(callBoth);
