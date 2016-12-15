//promise-based http request package
const axios = require('axios'),
      qs    = require('querystring');

// Geocoder API
// Helper functions for making API Calls
let helpers = {

  // This function serves our purpose of running the query to geolocate.
  _nytGet: function(q, begin_date, end_date) {

    let data = qs.stringify ({
        apikey: "77477d08cc0a4b84b344710a4dccb09d", 
        q: q, 
        sort: "newest", 
        hl: true, 
        fl: "web_url,abstract,headline,byline,pub_date", 
        begin_date:  begin_date, 
        end_date:    end_date
      });
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?' + data, {
      headers: { 
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
module.exports = helpers;
