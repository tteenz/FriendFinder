// Dependencies
var path = require('path');
var friends = require('../data/friends.js');

// Route
module.exports = function (app) {

    app.get('/api/friends', function (req, response) {
        response.json(friends);
    });
    app.post("/api/friends", function (req, response) {
        var difference = 40;
        var matchName = '';
        var matchPhoto = '';

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
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        response.json({
            name: matchName,
            photo: matchPhoto
        });

        friends.push(req.body);
    });
}




// 		var newFriend = request.body;
// 		//console.log(friends[0].score[0]);

//  //console.log(newFriend);

//         for(var i = 0; i < newFriend.scores.length; i++){
//             if(newFriend.scores[i] === "1 (Strongly Disagree)"){
//                 newFriend.scores[i] = 1;
//             }else if(newFriend.scores[i] === "5 (Strongly Agree)"){
//                 newFriend.scores[i] = 5;
//             }else {
//                 newFriend.scores[i] = parseInt(newFriend.scores[i]);
//             }
//         }

//         var diff = [];

//         for(var i = 0; i < friends.length; i++){
//             var compatibleFriend = friends[i];
//             var totalDifference = 0;

//             for(var j = 0; j < compatibleFriend.scores.length; j++){
//                 var tempDiff = Math.abs(compatibleFriend.scores[j] - newFriend.scores[j]);
//                 totalDifference += tempDiff; 
//             }
//             diff.push(totalDifference);
//         }

//         var num = diff[0];
//         var index = 0;

//         for(var x = 0; x < diff.length; x++){
//             if(diff[x] < num){
//                 num = diff[x];
//                 index = x;
//             }
//         }

//         friends.push(newFriend);

//         response.json(friends[index]);
//     });
// }
