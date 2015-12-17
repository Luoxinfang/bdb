/*session model*/

var server = yog.require('_common/lib/server.js');
var serverId = server.getServerId();

module.exports = {
  getData: function (data) {
    var query = server.parserData(data, 'user');
    return yog.ral(serverId, {
      path: '/interface/user/index.shtml?' + query
    });
  },
  queryList: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/list.shtml?' + query
    });
  },
  addAddress: function (data) {
    var query = server.parserData(data, 'address');
    return yog.ral(serverId, {
      path: '/interface/user/address/add.shtml?' + query
    });
  }
};