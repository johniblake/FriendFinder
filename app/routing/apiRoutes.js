var { friends } = require("../data/friends");
var routes = require("express").Router();

//API Routes
//===============================================================
// returns all friends
routes.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Displays a single friend, or returns false
routes.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friend;

  console.log(chosen);

  for (var i = 0; i < friends.length; i++) {
    if (chosen === friend[i].routeName) {
      return res.json(friends[i]);
    }
  }

  return res.json(false);
});

// Create New Friends - takes in JSON input
routes.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  newFriend.scores = newFriend.scores.map(value => {
    return parseInt(value);
  });

  console.log(newFriend);

  let closestFriend = getClosestFriend(newFriend);

  friends.push(newFriend);

  res.json(closestFriend);
});

function getClosestFriend(newFriend) {
  let closestFriend = {};
  let closestScoreDiff = Infinity;
  for (let i = 0; i < friends.length; i++) {
    let scoreDiff = 0;
    for (let j = 0; j < friends[i].scores.length; j++) {
      scoreDiff += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
    }
    if (scoreDiff < closestScoreDiff) {
      closestScoreDiff = scoreDiff;
      closestFriend = friends[i];
    }
  }
  return closestFriend;
}

module.exports = routes;
