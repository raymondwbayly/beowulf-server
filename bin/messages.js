
const getSuccess = () => {
  return 'Call to Server was Successfull';
};

const getFailure = () => {
    return 'Call to Server failed, please check the server call and URI';
};

const getAuthorized = () => {
    return 'The User or System has been authorized on the server';
};

const getUnAuthorized = () => {
    return 'The user or system could not be authorized on the server, please check the URI or variables you passed';
};

const getSavedMessage = () => {
    return 'The Record has been saved, Record: ' + '\n'
}

const getUpdatedMessage = () => {
    return 'The Record has been Updated, Record: ' + '\n'
}

const getDeleteMessage = () => {
    return 'The Record has been deleted ' + '\n'
}

const getActiveCheckMessage = () => {
    return 'The active status has been changed ' + '\n'
}


exports.getSuccess = getSuccess;
exports.getFailure = getFailure;
exports.getAuthorized = getAuthorized;
exports.getUnAuthorized = getUnAuthorized;
exports.getSavedMessage = getSavedMessage;
exports.getUpdatedMessage = getUpdatedMessage;
exports.getDeleteMessage = getDeleteMessage;
exports.getActiveCheckMessage = getActiveCheckMessage;