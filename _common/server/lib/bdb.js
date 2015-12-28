/**
 * @author chenzhenhua
 * @createTime 2015-12-28
 * @description 后端业务逻辑
 */

module.exports = {
	order: {
		/**
		 * 根据状态标识返回订单状态
		 * @param status {
		 *    orderStatus: 订单状态 0处理中 1已完成 2终止交易
		 *    payStatus: 付款标识 0待付款 1已付款
		 *    sendFlag: 发货标识 0待发货 1已发货
		 *    receiveFlag: 收货标识 0待收货 1部分收货 2全收货 3拒绝收货
		 *    pointFlag: 评价标识 0未评价 1已评价
		 *    revokeStatus: 退货标识 0无 1全部退货 2部分退货
		 *  }
		 */
		getOrderStatusName: function (status) {
			if ('0' == status.orderStatus) {
				if ('0' == status.payStatus) {
					return '等待买家付款';
				} else if ('1' == status.payStatus) {
					if ('0' == status.revokeStatus) {
						if ('0' == status.sendFlag) {
							return '等待卖家发货';
						} else if ('1' == status.sendFlag) {
							if ('0' == status.receiveFlag) {
								return '卖家已发货';
							} else {
								if ('0' == status.pointFlag) {
									return '待评价';
								} else if ('1' == status.pointFlag) {
									return '已评价';
								}
							}
						}
					} else {
						return '等待退款';
					}
				}
			} else if ('1' == status.orderStatus) {
				return '已完成';
			} else if ('2' == status.orderStatus) {
				return '已取消';
			}
		},
		/**
		 * 根据前端状态名返回查询条件
		 * @param val
		 */
		getOrderStatusCode: function (val) {
			var status = {};
			if ('dfk' == val) { //待付款
				status = {
					orderStatus: '0',
					payStatus: '0'
				}
			} else if ('dfh' == val) { //待发货
				status = {
					orderStatus: '0',
					payStatus: '1',
					sendFlag: '0',
					revokeStatus: '0'
				}
			} else if ('dsh' == val) { //待收货
				status = {
					orderStatus: '0',
					payStatus: '1',
					sendFlag: '1',
					receiveFlag: '0',
					revokeStatus: '0'
				}
			} else if ('ysh' == val) { //已收货
				status = {
					orderStatus: '0',
					payStatus: '1',
					sendFlag: '1',
					receiveFlag: '1',
					revokeStatus: '0'
				}
			} else if ('thz' == val) { //退货中
				status = {
					orderStatus: '0',
					payStatus: '1',
					revokeStatus: '1'
				}
			} else if ('ygb' == val) { //已关闭
				status = {
					orderStatus: '1'
				}
			}
			return status;
		}
	}
}