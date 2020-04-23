var path = require('path');
var fs = require('fs');
var Records = require('./records');

// Read the country files
var countriesPathJSON = path.join(__dirname, '../lib/geography', 'countries.json');
var countryOBJ =  require(countriesPathJSON);

const ListCountries = () => {
    return countryOBJ;
}

const GetCountry = (CT) => {
    var rec = Records.getCountry(countryOBJ, CT);
    return rec;
}


exports.ListCountries = ListCountries;
exports.GetCountry = GetCountry;