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

const dash = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/dash.liquid');
    console.log("Login Controller has run successfully!")
}

const linegraph = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/linegraph.liquid');
    console.log("Login Controller has run successfully!")
}

const togglelinegraphs = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/togglelinegraphs.liquid');
    console.log("Login Controller has run successfully!")
}

const multiplelinegraphs = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/multiplelinegraphs.liquid');
    console.log("Login Controller has run successfully!")
}

const bar_chart = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/barChart.liquid');
    console.log("Login Controller has run successfully!")
}

const stacked_chart = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/stackedBarChart.liquid');
    console.log("Login Controller has run successfully!")
}

const stacked_boxplot = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/stackedBoxPlot.liquid');
    console.log("Login Controller has run successfully!")
}

const multiple_boxplots = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/multipleBoxPlots.liquid');
    console.log("Login Controller has run successfully!")
}
//*********************************************************************************//
// Testing Out Three.js
//*********************************************************************************//

const three_one = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/threeone.liquid');
    console.log("Login Controller has run successfully!")
}

const three_two = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/threetwo.liquid');
    console.log("Login Controller has run successfully!")
}

const three_three = function(req, res, next) {
    console.log("Login Controller has begun running " + Date().toLocaleString())
    res.render('../views/mock_views/threethree.liquid');
    console.log("Login Controller has run successfully!")
}



module.exports = {
    test, three_one, three_two, three_three, 
    dash, 
    linegraph, multiplelinegraphs, togglelinegraphs, 
    bar_chart, stacked_chart, stacked_boxplot,
    multiple_boxplots
}
