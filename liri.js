

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case "myTweets":
    myTweets();
    break;
    
    case "spotify":
        spotify();
        break;
        
    case "movie":
        movie();
        break;
        
    case "doWhat":
        doWhat();
        break;
}
// this is how to get up to 20 most recent tweets from my user

function myTweets() {
console.log("starting");

var Twit = require('twit');

var config = require('./keys.js');

var T = new Twit(config.twitterKeys);

var params = {
    screen_name: 'weslaughter0717',
    count: 20
};


T.get('statuses/user_timeline', params, function(err, data){
      for (var i = 0; i< data.length; i++){
        console.log(data[i].text);
    }
});
}

// //this is how to post to twitter
// var tweet = {
//     status: "everything"
// };

// T.post('statuses/update', tweet, tweeted);

// function tweeted(err, data, response) {
//     if (err) {
//     console.log("something went wrong");
// } else {
//     console.log('it worked');
// }
// }


 //spotify api
 function spotify() {

var spot = require('node-spotify-api');

var config1 = require('./keys.js');
var S = new spot( config1.spotifyKeys);
     console.log("2nd start");
     
     var trackRequest;
     if(value === undefined) {
         trackRequest = "The Sign by Ace of Base"
     } else {
         trackRequest = value;
     }



S.search({ type: 'track', query: trackRequest}, function(err, data) {
    if (err) {
        console.log("something else is wrong" + err);
        return;
            }else{
                  //tried searching for release year! Spotify doesn't return this!
	  		console.log("Artist: " + data.tracks.items[0].artists[0].name);
	        console.log("Song: " + data.tracks.items[0].name);
	        console.log("Album: " + data.tracks.items[0].album.name);
	        console.log("URL: " + data.tracks.items[0].preview_url);
	    }

});  
}

function movie(){
var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[3];
     if(movieName === undefined) {
         movieName = "Mr. Nobody"
     } else {
         movieName = value;
     }


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).Ratings.imbdRating);
    console.log(JSON.parse(body).Ratings.tomatoRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
  }
});
}
function doWhat() {
var fs = require('fs');

fs.readFile('random.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    
    var dataArray = data.split(",");
    if (dataArray[0] === 'spotify') {
        value = dataArray[1]; // this is what  spotify() uses
        spotify(/* whatever we put here is being ignored */);
    }
    console.log(dataArray)
})
}