/**
 * @description
 * @author roy
 */

module.exports = {
  login: function (user, callback) {
    var rs = {
      status: '0'
    };
    if (user.uname != 'bdbvip') {
      rs = {
        status: '11111',
        exception: '用户不存在'
      };
    } else if (user.pwd != '123') {
      rs = {
        status: '11112',
        exception: '密码错误'
      };
    } else {
      rs.result = {
        "siteLogo": "//images.bdbvip.com/icon/logo_default.png",
        "email": "331744837@qq.com",
        "contactName": "罗新芳",
        "partnerId": 58818,
        "siteName": "",
        "settleType": 0
      }
    }
    callback(rs);
  }
};