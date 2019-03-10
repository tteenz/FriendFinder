// Dependencies
var friends = require('../data/friends.js');

// Route
module.exports = function (app) {

    app.get('/api/friends', function (req, response) {
        response.json(friends);
    });
    app.post("/api/friends", function (req, response) {
        var difference = 40;
        var friendName = '';
        var friendPhoto = '';

        friends.forEach(function (friend) {
            var matchedScoresArray = [];
            var totalDifference = 40;

            function add(total, num) {
                return total + num;
            }

            for (var i = 0; i < friend.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }

            totalDifference = matchedScoresArray.reduce(add, 0);

            if (totalDifference < difference) {
                difference = totalDifference;
                friendName = friend.name;
                friendPhoto = friend.photo;
            }
        });
        response.json({
            name: friendName,
            photo: friendPhoto
        });

        friends.push(req.body);
    });
}
