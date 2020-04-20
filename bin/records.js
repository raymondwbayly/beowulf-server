const getSingleRecord = (obj,num) => {
    var totalKeys = Object.keys(obj).length
    var tmpInd = num;
    if(num > totalKeys){
        tmpInd = 1;
    }
    return obj[tmpInd];
}


exports.getSingleRecord = getSingleRecord;
exports.getSig