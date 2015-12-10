/**
 * @author radish
 * @description 这个路由处理user模块 如注册等
 */

//var model = yog.require('_common/lib/loader-model.js')();

var _ = require('lodash');
var model = require('../model/user.js');

module.exports = function (req, res, next) {
	next();
};

//注册
module.exports.post = function (req, res, next) {

};