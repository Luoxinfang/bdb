/**
 * Created by pulang on 2015/12/04.
 */

module.exports = {
  init: function () {
    this.events();
  },
  events: function () {
    $(document).on('click', '.nav li', function () {
      $(".nav li").removeClass('on')
      $(this).addClass('on');
    });
  }
};