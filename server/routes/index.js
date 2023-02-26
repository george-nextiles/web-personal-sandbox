var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');
var mock = require('../controllers/mock');
// console.log("The Routes Page has been accessed");

//*********************************************************************************//
// Index Controller
//*********************************************************************************//

// GET Routes
router.get('/', controller.login_view)
router.get('/logout', controller.logout)
router.get('/dashboard', controller.dashboard)
router.get('/get_all_users', controller.get_all_users)
router.get('/active_users/:day', controller.filter_users)
router.get('/specificsession', controller.specific_session)
router.get('/sessions/:athlete', controller.user_sessions);
router.get('/analyzedsession/:username/:org/:start_range/:end_range', controller.analyzed_session);

// POST Routes
router.post('/login_route', controller.login_route);
router.post('/get_all_users_for_react', controller.get_all_users_for_react);

//*********************************************************************************//
// Mock Controller
//*********************************************************************************//

router.get('/test', mock.test)
router.get('/dash', mock.dash)
router.get('/linegraph', mock.linegraph)
router.get('/togglelinegraphs', mock.togglelinegraphs)
router.get('/multiplelinegraphs', mock.multiplelinegraphs)
router.get('/barchart', mock.bar_chart)
router.get('/stackedchart', mock.stacked_chart)
router.get('/boxplot', mock.stacked_boxplot)
router.get('/multipleboxplots', mock.multiple_boxplots)
router.get('/threeone', mock.three_one)
router.get('/threetwo', mock.three_two)
router.get('/threethree', mock.three_three)

//*********************************************************************************//
// Connection testing
//*********************************************************************************//

module.exports = router;



