var path = require('path');
var fs = require('fs');
var Records = require('./records');

// Read the country files
var countriesPathJSON = path.join(__dirname, '../lib/geography', 'countries.json');
var countryOBJ =  require(countriesPathJSON);

// Read the country files
var statePathJSON = path.join(__dirname, '../lib/geography', 'states.json');
var statesOBJ =  require(statePathJSON);

// Read the City Files 
var citiesPathJSON = path.join(__dirname, '../lib/geography', 'cities.json');
var citiesOBJ =  require(citiesPathJSON);

const ListCountries = () => {
    return countryOBJ;
}

const ListStates = () => {
    return statesOBJ;
}

const GetCountry = (CT) => {
    var rec = Records.getCountry(countryOBJ, CT);
    return rec;
}

const ListCitiesByCountry = (CT) => {
    var rec = Records.getCities(citiesOBJ, CT);
    console.log(rec);
    return rec;
}


exports.ListCountries = ListCountries;
exports.ListStates = ListStates;
exports.GetCountry = GetCountry;
exports.ListCitiesByCountry = ListCitiesByCountry;