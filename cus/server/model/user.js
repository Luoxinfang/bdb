/*session model*/

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();
var serviceName = 'user'
module.exports = {
  getData: function (data) {
    console.log(data);
    var query = server.parserData(data, serviceName);
    //console.log('/interface/user/index?' + query);
    return yog.ral(serverId, {
      path: '/interface/user/index?' + query
    });
  }
};