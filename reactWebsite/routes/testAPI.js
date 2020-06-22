var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

router.get('/', function(req, res, next) {
    
      res.send({res :"server up and running"})
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
    const dates = items.data;
    let a = JSON.stringify(dates)
    callback(dates);
    return
  }
  else{
    if((response.status) == 404){
      callback({message: "Region does not exist"})
      return;
    }
  }
  callback("something went wrong")
  return;
}


// part of an old project
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