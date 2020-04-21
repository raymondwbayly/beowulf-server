const getSingleRecord = (obj,num) => {
    var totalKeys = Object.keys(obj).length
    var tmpInd = num;
    if(num > totalKeys){
        tmpInd = 1;
    }
    console.log(obj);
    return obj[tmpInd];
}

const buildRecord = (obj,num) => {
    var retJSON = {};
    return retJSON;
}


exports.getSingleRecord = getSingleRecord;
exports.getSig