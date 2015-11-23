/*
 * app相关
 **/
module.exports = {
  //返回应用程序的信息
  getInfo: function () {
    return {
      title: 'bdb',
      author: 'fed',
      keyword: 'bdb',
      description: 'bdb',
      copyright: 'Copyright&copy;2015 bdb.com All Rights Reserved'
    };
  },
  //返回开发者信息
  getAuthor: function () {
    return '前端团队'
  }
};

