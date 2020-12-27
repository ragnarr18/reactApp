const {createServer} = require("http")
const express = require('express')
const app = express()
const port = 9000 || process.env.PORT
// var router = express.Router();
const fetch = require("node-fetch");
const compression = require("compression")
const morgan = require("morgan")
const path = require("path")
const dev = app.get("env") !== "production"

console.log(dev);
// if(!dev){
app.disable("x-powered-by")
app.use(compression())
app.use(morgan("common"))

app.use(express.static(path.resolve(__dirname, "frontend/build")))

// }

if(dev){
  app.use(morgan("dev"))
}

// const server = createServer(app)

// app.get('/', function(req, res, next) {

//       res.send({res :"server up and running"})
// });

app.get('/region/:regionName', function(req, res, next){
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

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build", "index.html"))
})
app.listen(port)
