var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
var request = require('request')
var leagueToken = "RGAPI-832f88e8-d3ab-45e7-b1be-e05d11e7fc8c"

router.get('/', function(req, res, next) {
    lastGame(function(last) {
        res.send(last);
        return;
      });
});

function lastGame(callback){
    var summoner = "ih8myx"
    var customRequest = {
    url: 'https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/' + summoner,
    headers: {
      "X-Riot-Token": leagueToken.toString()
        }
    };

  //custom get request, where I get the information of the asked for Account, like a google account or anything else
  //go down "var last = lastGame(accountId....)" to see the problem
    request.get(customRequest, function (error, response, body) {
        if (response.statusCode >= 400 && response.statusCode <500){
        msg.channel.send("league api token needs to updated for this to work")
        return;
        }
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode);
        console.log("responsebody: " + response.body);
        jsonBody = JSON.parse(body);
        accountId = jsonBody.accountId;
        console.log("players accountId: " + accountId);
        callback(response.body)
    })
}
module.exports = router;