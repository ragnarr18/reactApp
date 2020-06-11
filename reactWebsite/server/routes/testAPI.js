var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
// var request = require('request')
// var leagueToken = "RGAPI-832f88e8-d3ab-45e7-b1be-e05d11e7fc8c"

router.get('/', function(req, res, next) {
    lastGame(function(last) {
        res.send(last);
        return;
      });
});

router.get('/region/:regionName', function(req, res, next){
  console.log("regionName param: " + req.params.regionName)
                            // getRegion(req.body.region, function(regionInfo){
      // WORKS FOR BODY//   res.send(regionInfo)                             
                         // return;
                            // })
  getRegion(req.params.regionName, function(regionInfo){

    if(regionInfo.message != undefined && regionInfo.message == "Region does not exist"){
      console.log("this is the regionInfo: " + regionInfo)
      res.status(404)
    }
    res.send(regionInfo)
    return;
  })
});


async function getRegion(regionString, callback){
  const response = await fetch('https://api.quarantine.country/api/v1/spots/region?region=' + regionString);
  if (response.status >= 200 & response.status < 300){
    const items = await response.json()  // this is used to extract the body from the request
    //const items = await response;
    const dates = items.data;
    // console.log(dates);
    let a = JSON.stringify(dates)
    // console.log("go to callback");
    callback(dates);
    return
    // console.log(response)
  }
  else{
    if((response.status) == 404){
      callback({message: "Region does not exist"})
      return;
    }
    
    // console.log(response)
  }
  callback("something went wrong")
  return;
}

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
        //msg.channel.send("league api token needs to updated for this to work")
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