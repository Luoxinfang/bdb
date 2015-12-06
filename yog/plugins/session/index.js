var session = require('express-session');

module.exports.session = function(app, conf){
    return function(){
        app.use(session(conf));
    };
};