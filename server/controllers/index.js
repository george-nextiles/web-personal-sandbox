const { json } = require('body-parser');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var flatten = require('flat')
const customErrors = require('../lib/custom_errors')
const utils = require('../lib/utils.js')
const fetchData = utils.fetchData
const dateRange = utils.DateRange
// For example, this is how you create a date range
// let range = new dateRange(4).calcRange()
// console.log(range)


//*********************************************************************************//
// RENDER Login View
//*********************************************************************************//
const login_view = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    req.session.loggedIn = false
    res.render('login.liquid');
    console.log("Login Controller has run successfully!")
}



//*********************************************************************************//
// POST Login 
//*********************************************************************************//
const login_route = function(req, res, next) {
    console.log("Login Route has begun running" + Date().toLocaleString())
    const organization = req.body.org
    console.log("Org", organization)

    let url = new URL(`https://hya1ete7a6.execute-api.us-east-1.amazonaws.com/`)
    url.pathname = `dev/organization`
    url.searchParams.set('organization', `${organization}`)
    console.log("URL", url)


    // There is an error, if organization isnt specified it will always return 
    // nextiles users. 
    async function fetchUsers() {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        if(!json) {
            customErrors.handle404()
        }  else {
            return json;
        }
    }

    fetchUsers(url).then(json => {
        req.session.loggedIn = true
        req.session.organization = organization
        req.session.currentAthlete = []
        req.session.athletes = json.users
        console.log(req.session)
        res.redirect('/dashboard');
    }).catch(next)
    console.log("Login Post has run successfully!")  
}
 
//*********************************************************************************//
// DESTROY Logout
//*********************************************************************************//
const logout = function(req, res, next) {
    console.log("Logout Controller has begun running " + Date().toLocaleString())
    console.log("Session before destroying", req.session)
    req.session.destroy()
    console.log("Session after destroying",req.session)
    res.redirect('/')
    console.log("Logout Controller has run successfully!")
}


//*********************************************************************************//
// GET All Users/Athletes
//*********************************************************************************//
const get_all_users = function(req, res, next) {
    console.log("Get all users has begun running" + Date().toLocaleString())
    const { organization, loggedIn, athletes } = req.session
    console.log(req.session)
   if(loggedIn === true) {
       console.log("Org", organization)
       console.log(athletes)
       res.send({athletes})
    }
    console.log("Get all users has finished running!" + Date().toLocaleString())
}



//*********************************************************************************//
// GET All Users/Athletes for React
//*********************************************************************************//
const get_all_users_for_react = function(req, res, next) {
    console.log("Get all users has begun running" + Date().toLocaleString())
    const organization = req.body.organization
    console.log("Org", organization)

    let url = new URL(`https://hya1ete7a6.execute-api.us-east-1.amazonaws.com/`)
    url.pathname = `dev/organization`
    url.searchParams.set('organization', `${organization}`)
    console.log("URL", url)

    fetchData(url).then(json => {
        console.log(json)
        res.status(200).json({ json })
    }).catch(error => {
        res.send(error)
    })

    console.log("Get all users has finished running!" + Date().toLocaleString())
}

//*********************************************************************************//
// RENDER Dashboard View
//*********************************************************************************//
const dashboard = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    const { organization, loggedIn, athletes } = req.session
    res.render('dashboard.liquid');
    console.log("Login Controller has run successfully!")
}


//*********************************************************************************//
// GET Flattened User Session List
//*********************************************************************************//
const user_sessions = function(req, res, next) {
    console.log("User Sessions has begun running " + Date().toLocaleString())
    const { organization, loggedIn, athletes, currentAthlete } = req.session
    const username = req.params.athlete

    if(!currentAthlete) {
        currentAthlete.push(username)
    } else {
        currentAthlete.pop()
        currentAthlete.push(username)
    }

    let url = new URL(`https://zdhvkpd31a.execute-api.us-east-1.amazonaws.com/`)
    url.pathname = `dev/raw-data`
    url.searchParams.set(`username`,`${username}`)
    url.searchParams.set('organization', `${organization}`)
    url.searchParams.set('listfiles', `true`)

    // async function fetchUserSession() {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     return json;
    // }

    fetchData(url).then(json => {
        var flat = flatten( json, {maxDepth: 2})
        var session_number = Object.keys(flat).length
        res.status(200).json({ flat, session_number })
    }).catch(error => {
        res.send(error)
    })
    console.log("User Sessions has run successfully!")
}


//*********************************************************************************//
// GET User Session Data and CSV 
//*********************************************************************************//
const analyzed_session = function(req, res, next) {
    console.log("Analytics Controller has begun running " + Date().toLocaleString())

    const username = req.params.username
    const organization = req.params.org
    const start_range = req.params.start_range
    const end_range = req.params.end_range
    //start_range = start_range.replace(/[ -.(:)]/g, "")

    let url = new URL(`https://zdhvkpd31a.execute-api.us-east-1.amazonaws.com/`)
    url.pathname = `dev/raw-data`
    url.searchParams.set(`username`,`${username}`)
    url.searchParams.set('organization', `${organization}`)
    url.searchParams.set('start_range', `${start_range}`)
    url.searchParams.set('end_range', `${end_range}`)

    async function fetchUserSessionData() {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    fetchUserSessionData(url).then(json => {
        var flattened_json = flatten (json,{ maxDepth: 3 })
        let csv_data = Object.values(flattened_json)
        res.status(200).json({csv_data })
    }).catch(error => {
        res.send(error)
    })
        console.log("Analytics Controller has run successfully!")
}



//*********************************************************************************//
// GET Specific User Session Data and CSV 
//*********************************************************************************//
const specific_session = function(req, res, next) {
    console.log("Analytics Controller has begun running " + Date().toLocaleString())

    const username = "Basdeo05"
    const organization = "Nextiles"
    const start_range = "20221102000000"
    const end_range = "20221104000000"

    let url = new URL(`https://zdhvkpd31a.execute-api.us-east-1.amazonaws.com/`)
    url.pathname = `dev/raw-data`
    url.searchParams.set(`username`,`${username}`)
    url.searchParams.set('organization', `${organization}`)
    url.searchParams.set('start_range', `${start_range}`)
    url.searchParams.set('end_range', `${end_range}`)

    async function fetchUserSessionData() {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    fetchUserSessionData(url).then(json => {
        var flattened_json = flatten (json,{ maxDepth: 3 })
        let csv_data = Object.values(flattened_json)
        console.log(csv_data)
        res.status(200).json({csv_data})
    }).catch(error => {
        res.send(error)
    })
        console.log("Analytics Controller has run successfully!")
}


//*********************************************************************************//
// Nested For Loop Frustration 
//*********************************************************************************//
const filter_users = function(req,res,next) {
    const { organization, users, loggedIn } = req.session
    const filter_date = req.params.day
    active_users = []

    async function fetchUsers() {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }    

    for(let i = 0; i < users.length; i ++) {
        let user = users[i]

        let url = new URL(`https://zdhvkpd31a.execute-api.us-east-1.amazonaws.com/`)
        url.pathname = `dev/raw-data`
        url.searchParams.set(`username`,`${user}`)
        url.searchParams.set('organization', `${organization}`)
        url.searchParams.set('listfiles', `true`)

        fetchUsers().then(json => {
            let keys = Object.keys(json)
            user_sessions[user] = keys
            for(const property in user_sessions) {
                for(let i = 0; i < user_sessions[property].length; i++){
                    let dates = new DateRange(filter_date).calcRange()
                    let date_values = Object.values(dates)
                    if (date_values.includes(user_sessions[property][i])){
                        active_users.push(property)
                    } 
                }
            }
            console.log(active_users)
        }).catch(next)
    }
}


//*********************************************************************************//
//                             API V2 ACCESS PATTERNS
//*********************************************************************************//
// --------------------------------------------------------------------------------//
//                                 Organizations                                   //
// --------------------------------------------------------------------------------//
//*********************************************************************************//
// GET Organizations 
//*********************************************************************************//

// --------------------------------------------------------------------------------//
//                                    Users                                        //
// --------------------------------------------------------------------------------//
//*********************************************************************************//
// GET User 
//*********************************************************************************//

//*********************************************************************************//
// GET User Per Organization
//*********************************************************************************//

//*********************************************************************************//
// GET List Of Users Per Organization
//*********************************************************************************//



// --------------------------------------------------------------------------------//
//                                    Sessions                                     //
// --------------------------------------------------------------------------------//
//*********************************************************************************//
// GET Session Per Organization Per Time
//*********************************************************************************//

//*********************************************************************************//
// GET Session Per Organization Per Time Per Activity and Product
//*********************************************************************************//

//*********************************************************************************//
// GET Session Per User Per Organization Per Time
//*********************************************************************************//

//*********************************************************************************//
// GET Session Per User Per Organization Per Time Per Activity and Product
//*********************************************************************************//

//*********************************************************************************//
// GET Session List of Users Per Organization Per Time
//*********************************************************************************//

//*********************************************************************************//
// GET Session List of Users Per Organization Per Time Per Activity and Product
//*********************************************************************************//



// --------------------------------------------------------------------------------//
//                            Activity and Product                                 //
// --------------------------------------------------------------------------------//
//*********************************************************************************//
// GET Activity and Product Per Organization Per Time
//*********************************************************************************//

//*********************************************************************************//
// GET Activity and Product Per User Per Organization Per Time
//*********************************************************************************//

//*********************************************************************************//
// GET Activity and Product List Of Users Per Organization Per Time
//*********************************************************************************//




module.exports = {
    login_view, logout, dashboard, analyzed_session, login_route,  user_sessions, filter_users, get_all_users,
    get_all_users_for_react, specific_session
}
