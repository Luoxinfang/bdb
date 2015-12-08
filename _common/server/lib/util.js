/**
 * @description 工具类
 */

module.exports = {
	//获取函数调用者的路径
	getCallerPath: function () {
		var originalFunc = Error.prepareStackTrace;
		var callerFile;
		try {
			var err = new Error();
			var currentFile;
			Error.prepareStackTrace = function (err, stack) { return stack; };
			//这里并不是真正的currentFile 因为这里函数已经是被调用了一次了 所以要先出一次
			err.stack.shift();
			currentFile = err.stack.shift().getFileName();
			while (err.stack.length) {
				callerFile = err.stack.shift().getFileName();
				if(currentFile !== callerFile) break;
			}
		} catch (e) {}
		Error.prepareStackTrace = originalFunc;
		return callerFile;
	}
};