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
        if(item.ITU === value){
          return i;
        }
    });
    return filteredObj;
}



exports.getSingleRecord = getSingleRecord;
exports.buildRecord = buildRecord;
exports.getCountry = getCountry;