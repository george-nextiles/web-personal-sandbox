//*********************************************************************************//
//                     Functions that will not break                               //
//*********************************************************************************//
const fetch = require('node-fetch');

const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
    for(key in obj){
       if(typeof obj[key] !== 'object'){
          res[extraKey + key] = obj[key];
       }else{
          flattenJSON(obj[key], res, `${extraKey}${key}.`);
       };
    };
    return res;
 };


//*********************************************************************************//
// Date Range Class Constructor 
//*********************************************************************************//
class DateRange {
    constructor(number){
        this.number = number
    }

    calcRange (){
        let date_range = {}
        for(let i = 1; i <= this.number; i ++){
            let date = new Date();
            date.setDate(date.getDate()-i);
            date_range[i] = new Date(date).toISOString().slice(0, 10);
        }
        return date_range
    }
}

//*********************************************************************************//
// Fetch Data
//*********************************************************************************//
async function fetchData (url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


 module.exports = {
    flattenJSON, DateRange, fetchData
 }