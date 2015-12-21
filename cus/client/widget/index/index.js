/**
 * Created by chenzhenhua on 2015/11/30.
 */
var B = require('_common:js/bdb/core.js');
module.exports = {
  init: function () {
    this.events();
  },
  events: function () {
    $('.icon-me').on('click', B.toggleDrawer);
  }
};