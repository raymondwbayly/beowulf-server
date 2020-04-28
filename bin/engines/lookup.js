const getSingleRecord = (obj,num) => {
    var totalKeys = Object.keys(obj).length
    var tmpInd = num;
    if(num > totalKeys){
        tmpInd = 1;
    }
    return obj[tmpInd];
}

const buildRecord = (obj,num) => {
    var retJSON = {};
    return retJSON;
}

// Returns the country based on the ITU designation
const getCountry = (object, value) => {
    var filteredObj = object.find(function(item, i){
        if(item.ISO3166 === value){
          return i;
        }
    });
    return filteredObj;
}

// Returns the country based on the ITU designation
const getCities = (object, value) => {
    var returnCities = [];
    for(let r of object) {
        if(r.country === value ) {
            returnCities.push(r);
        }
    }
    return returnCities;
}

const searchUsers = (object, value) => {
    var returnUsers = [];
    for(let r of object) {
        if(r.lastname === value ) {
            returnUsers.push(r);
        }
    }
    return returnUsers;
}



exports.getSingleRecord = getSingleRecord;
exports.buildRecord = buildRecord;
exports.getCountry = getCountry;
exports.getCities = getCities;
exports.searchUsers = searchUsers;