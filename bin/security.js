var path = require('path');
var fs = require('fs');

const checkCookies = (cookies) => {
    // This checks to ensure the app and user cookies are set
    const appToken = cookies['app-token'];
    const userToken = cookies['user-token'];

    var cookieStatus = {'status': true, 'message': 'Cookies have not been checked'};

    if(appToken == '2234FFR1RRDF' && userToken == '2234FFR1RRDF'){
        cookieStatus = {'status': true, 'message':'Cookies are set and returning properly'};
    }else{
        cookieStatus = {'status': false, 'message':'Your App or User token is not set, please run the /auth and /auth/user to set tokens '};
    }
    return cookieStatus;
}

exports.checkCookies = checkCookies;