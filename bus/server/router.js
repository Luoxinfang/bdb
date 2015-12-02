module.exports = function (router) {

    var appInfo = yog.require('_common/model/app.js');
    var resObj = {
        app: appInfo.getInfo()
        ,header: {
            title: '百多宝'    //header标题
            ,back: true       //返回按钮（默认：有）
            ,backUrl: '/cus'  //返回链接（默认：用户首页）
            ,me: false        //首页我
            ,rGup1: false     //右侧搜索和消息图标
            ,rGup2: false     //右侧收藏和分享图标
            ,sort: false      //右侧排序或文字
            ,msg: false       //右侧消息图标
            ,nav: ['系统消息','用户消息']     //头部nav数组
            ,tab: ['全部','进行中','未开始']  //头部tab数组
        }
    };

    router.get('*', function (req, res, next) {

        next();
    });

    //首页
    router.get('/', function (req, res, next) {
        resObj.app.title = '用户登录';
        res.render('bus/page/user/login.tpl', resObj);
    });
    //登录
    router.get('/login', function (req, res, next) {
        resObj.app.title = '用户登录';
        res.render('bus/page/user/login.tpl', resObj);
    });
    //注册 —— 输入电话号码
    router.get('/reg-tel', function (req, res, next) {
        resObj.app.title = resObj.header.title = '注册';
        resObj.header.backUrl = '/bus/login';
        res.render('bus/page/user/reg-tel.tpl', resObj);
    });
    //注册 —— 设置密码
    router.get('/reg-pwd', function (req, res, next) {
        resObj.app.title = resObj.header.title = '注册';
        resObj.header.backUrl = '/bus/reg-tel';
        res.render('bus/page/user/reg-pwd.tpl', resObj);
    });
    //找回密码 —— 输入信息
    router.get('/find-pwd-info', function (req, res, next) {
        resObj.app.title = resObj.header.title = '找回密码';
        resObj.header.backUrl = '/bus/login';
        res.render('bus/page/user/find-pwd-info.tpl', resObj);
    });
    //找回密码 —— 设置新密码
    router.get('/find-pwd-new', function (req, res, next) {
        resObj.app.title = resObj.header.title = '找回密码';
        resObj.header.backUrl = '/bus/find-pwd-info';
        res.render('bus/page/user/find-pwd-new.tpl', resObj);
    });
    //找回密码 —— 找回密码结果页
    router.get('/find-pwd-result', function (req, res, next) {
        resObj.app.title = resObj.header.title = '找回密码';
        resObj.header.back = false;
        res.render('bus/page/user/find-pwd-result.tpl', resObj);
    });
    //绑定第三方账号 —— 输入信息
    router.get('/bind-account-info', function (req, res, next) {
        resObj.app.title = resObj.header.title = '绑定第三方账号';
        resObj.header.back = false;
        res.render('bus/page/user/bind-account-info.tpl', resObj);
    });
    //绑定第三方账号 —— 设置新密码
    router.get('/bind-account-pwd', function (req, res, next) {
        resObj.app.title = resObj.header.title = '绑定第三方账号';
        resObj.header.backUrl = '/bus/bind-account-info';
        res.render('bus/page/user/bind-account-pwd.tpl', resObj);
    });
    //修改密码
    router.get('/change-pwd', function (req, res, next) {
        resObj.app.title = resObj.header.title = '修改密码';
        res.render('bus/page/user/change-pwd.tpl', resObj);
    });
    //更换手机号 —— 验证
    router.get('/change-tel-info', function (req, res, next) {
        resObj.app.title = resObj.header.title = '更换手机号';
        res.render('bus/page/user/change-tel-info.tpl', resObj);
    });
    //更换手机号 —— 输入新号码
    router.get('/change-tel-new', function (req, res, next) {
        resObj.app.title = resObj.header.title = '更换手机号';
        resObj.header.backUrl = '/bus/change-tel-info';
        res.render('bus/page/user/change-tel-new.tpl', resObj);
    });
    //收货地址
    router.get('/receipt-address', function (req, res, next) {
        resObj.app.title = resObj.header.title = '收货地址';
        res.render('bus/page/user/receipt-address.tpl', resObj);
    });
    //我的钱包 —— 首页
    router.get('/wallet', function (req, res, next) {
        resObj.app.title = resObj.header.title = '我的钱包';
        res.render('bus/page/wallet/index.tpl', resObj);
    });
    //我的钱包 —— 提现
    router.get('/withdrawals', function (req, res, next) {
        resObj.app.title = resObj.header.title = '提现';
        resObj.header.backUrl = '/bus/wallet';
        res.render('bus/page/wallet/withdrawals.tpl', resObj);
    });
    //我的钱包 —— 提现结果页
    router.get('/withdrawals-result', function (req, res, next) {
        resObj.app.title = resObj.header.title = '提现';
        resObj.header.backUrl = '/bus/wallet';
        res.render('bus/page/wallet/withdrawals-result.tpl', resObj);
    });
    //我的钱包 ——添加银行卡
    router.get('/add-bank-card', function (req, res, next) {
        resObj.app.title = resObj.header.title = '添加银行卡';
        resObj.header.backUrl = '/bus/wallet';
        res.render('bus/page/wallet/add-bank-card.tpl', resObj);
    });
};