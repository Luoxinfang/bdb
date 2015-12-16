/*
 * app相关信息
 **/
module.exports = {
  //返回应用程序的信息
  getInfo: function () {
    return {
      title: '百多宝--珠宝电商平台',
      author: '百多宝前海科技有限公司',
      keyword: '百多宝,珠宝,电商平台',
      description: '百多宝--珠宝电商平台',
      copyright: 'Copyright&copy;2015 bdbvip.com All Rights Reserved'
    };
  },
  getHeader:function(){
    return {
      title: '百多宝',       //header标题
      leftIcon: 'back',     //左侧默认返回按钮
      leftUrl: '/',         //左侧图标默认链接
      rightIcon: false,     //右侧单个图标
      rightUrl: false,      //右侧图标或文字链接
      rightIcons: false,    //右侧图标组
      rightText: false,     //右侧文字
      rightSort: false,     //右侧排序数组
      nav: ['系统消息', '用户消息'],     //头部nav数组
      tab: ['全部', '进行中', '未开始'],  //头部tab数组
      set: false
    };
  },
  //返回开发者信息
  getAuthor: function () {
    return '百多宝前端团队'
  }
};

