const { json } = require('body-parser');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const customErrors = require('../lib/custom_errors')

//*********************************************************************************//
// Test View For D3 and other Technologies
//*********************************************************************************//
const test = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/test.liquid');
    console.log("Login Controller has run successfully!")
}

module.exports = {
    test
}

// const { json } = require('body-parser');
// var express = require('express');
// var router = express.Router();
// const fetch = require('node-fetch');
// var flatten = require('flat')
// const customErrors = require('../lib/custom_errors')
// const { flattenJSON } = require("../lib/util")

// // endpoint
// const endpoint_analytics = "https://zdhvkpd31a.execute-api.us-east-1.amazonaws.com/dev"
// const generate_api_ls = function(username, organization, listfiles) {
//     url = `${endpoint_analytics}/raw-data?username=${username}&organization=${organization}&listfiles=${listfiles}`
//     return url
// }

// //*********************************************************************************//
// // Get list of sessions
// //*********************************************************************************//
// const getSessions = function(req, res, next) {
//     // console.log("User Sessions has begun running " + Date().toLocaleString())
//     // const { organization, loggedIn, athletes, currentAthlete } = req.session
//     // const username = req.params.athlete

//     // for now, hard coded
//     const username = "Basdeo05"
//     const organization = "Nextiles"
//     const listfiles = true
//     var endpoint = generate_api_ls(username, organization, listfiles)
    
//     fetch(endpoint)
//     .then(async function(response) {
//         var data = await response.json() // this is a promise
//         var flattenData = flattenJSON(data)
//         var keys = Object.keys(flattenData)
//         // console.log(keys)
//         // var times = keys.map((e) => {
//         //     date.split(".").slice(2)
//         //     console.log(date)
//         // })

//         return flattenData
//     })
//     .then((data) => {
//         res.status(200)
//         .send({ 
//             sessions: data 
//         });
//     })
// }

// // export
// module.exports = {
//     getSessions
// }