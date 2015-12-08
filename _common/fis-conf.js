/**
 * @file FIS 配置
 * @author radish
 */
fis.config.set('namespace', '_common');

// chrome下可以安装插件实现livereload功能
fis.config.set('livereload.port', 35729);

fis.media('debug').match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
fis.config.set('settings.spriter.csssprites', {
    //开启模板内联css处理,默认关闭
    htmlUseSprite: true,
    //图之间的边距
    margin: 0,
    //使用矩阵排列方式，默认为线性`linear`
    layout: 'matrix'
});
//将hz下面我们自己的js模块化
fis.match('/client/js/bdb/**.js', {
    isMod: true
});

//==========生产环境设置=============================
fis.media('prod').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
//对tpl文件进行优化
fis.media('prod').match('/**.tpl', {
    optimizer: fis.plugin('tpl')
});
//把公用的css压缩成global.css
fis.media('prod').match('client/{css,widget}/**.css', {
    packTo: 'css/global.css'
});
//把公用的js压缩成lib.js
fis.media('prod').match('client/js/{lib,plugin}/*.js', {
    packTo: 'js/lib.js',
});
//所有css,js全部加上文件指纹
fis.media('prod').match('client/**.{css,js}',{
    useHash: true
});