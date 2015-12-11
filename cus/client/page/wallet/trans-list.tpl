{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/common/header/header.tpl' %}
	{% require '_common:widget/wallet/trans.less' %}
	<div class="trans-time pb10">
		<div class="time start"><span>起</span><span>2015-10-07</span><input type="date" value="2015-10-07"></div>
		<div class="time end"><span>止</span><span>2015-10-07</span><input type="date" value="2015-10-07"></div>
	</div>
	{% script %}
	$(function(){
	require('_common:widget/wallet/trans-time.js').init();
	})
	{% endscript %}
{% endblock %}

{% block body %}
	{% widget '_common:widget/dialog/dialog.tpl' %}
	<div class="trans-list">
		<div class="trans-item showDialog" dialog="trans-01">
			<div class="type">提现</div>
			<div class="time">2015-09-21 19:37:21</div>
			<div class="num red">-10.00元</div>
		</div>
		<div class="trans-item showDialog" dialog="trans-02">
			<div class="type">充值</div>
			<div class="time">2015-09-21 12:41:03</div>
			<div class="num green">+1500.00元</div>
		</div>
		<div class="trans-item showDialog" dialog="trans-03">
			<div class="type">支付</div>
			<div class="time">2015-09-19 11:21:54</div>
			<div class="num red">-500.00元</div>
		</div>
		<div class="trans-item showDialog" dialog="trans-04">
			<div class="type">充值</div>
			<div class="time">2015-09-18 14:17:40</div>
			<div class="num green">+500.00元</div>
		</div>
		<div class="trans-item showDialog" dialog="trans-05">
			<div class="type">提现</div>
			<div class="time">2015-12-05 12:24:03</div>
			<div class="num red">-10.00元</div>
		</div>
	</div>
	<div class="dialog-wrap trans-dialog" id="trans-01">
		<div class="dialog-mask"></div>
		<div class="dialog">
			<div class="dialog-hd">账单</div>
			<div class="dialog-bd">
				<div class="clearfix">
					<span class="fl">时间</span>
					<span class="fr">2015-10-27</span>
				</div>
				<div class="clearfix">
					<span class="fl">类型</span>
					<span class="fr">提现</span>
				</div>
				<div class="clearfix">
					<span class="fl">金额</span>
					<span class="fr">￥10</span>
				</div>
				<div class="clearfix">
					<span class="fl">流水号</span>
					<span class="fr">2102155201120</span>
				</div>
				<div class="clearfix">
					<span class="fl">资金流向</span>
					<span class="fr">XXX银行卡</span>
				</div>
			</div>
		</div>
	</div>
	<div class="dialog-wrap trans-dialog" id="trans-02">
		<div class="dialog-mask"></div>
		<div class="dialog">
			<div class="dialog-hd">账单</div>
			<div class="dialog-bd">
				<div class="clearfix">
					<span class="fl">时间</span>
					<span class="fr">2015-09-21</span>
				</div>
				<div class="clearfix">
					<span class="fl">类型</span>
					<span class="fr">充值</span>
				</div>
				<div class="clearfix">
					<span class="fl">金额</span>
					<span class="fr">￥1500</span>
				</div>
				<div class="clearfix">
					<span class="fl">流水号</span>
					<span class="fr">2102155201120</span>
				</div>
				<div class="clearfix">
					<span class="fl">资金流向</span>
					<span class="fr">XXX银行卡</span>
				</div>
			</div>
		</div>
	</div>
	<div class="dialog-wrap trans-dialog" id="trans-03">
		<div class="dialog-mask"></div>
		<div class="dialog">
			<div class="dialog-hd">账单</div>
			<div class="dialog-bd">
				<div class="clearfix">
					<span class="fl">时间</span>
					<span class="fr">2015-10-27</span>
				</div>
				<div class="clearfix">
					<span class="fl">类型</span>
					<span class="fr">支付</span>
				</div>
				<div class="clearfix">
					<span class="fl">金额</span>
					<span class="fr">500</span>
				</div>
				<div class="clearfix">
					<span class="fl">流水号</span>
					<span class="fr">2102155201120</span>
				</div>
				<div class="clearfix">
					<span class="fl">资金流向</span>
					<span class="fr">XXX订单</span>
				</div>
			</div>
		</div>
	</div>
	<div class="dialog-wrap trans-dialog" id="trans-04">
		<div class="dialog-mask"></div>
		<div class="dialog">
			<div class="dialog-hd">账单</div>
			<div class="dialog-bd">
				<div class="clearfix">
					<span class="fl">时间</span>
					<span class="fr">2015-10-27</span>
				</div>
				<div class="clearfix">
					<span class="fl">类型</span>
					<span class="fr">充值</span>
				</div>
				<div class="clearfix">
					<span class="fl">金额</span>
					<span class="fr">￥500</span>
				</div>
				<div class="clearfix">
					<span class="fl">流水号</span>
					<span class="fr">2102155201120</span>
				</div>
				<div class="clearfix">
					<span class="fl">资金流向</span>
					<span class="fr">余额</span>
				</div>
			</div>
		</div>
	</div>
	<div class="dialog-wrap trans-dialog" id="trans-05">
		<div class="dialog-mask"></div>
		<div class="dialog">
			<div class="dialog-hd">账单</div>
			<div class="dialog-bd">
				<div class="clearfix">
					<span class="fl">时间</span>
					<span class="fr">2015-10-27</span>
				</div>
				<div class="clearfix">
					<span class="fl">类型</span>
					<span class="fr">充值</span>
				</div>
				<div class="clearfix">
					<span class="fl">金额</span>
					<span class="fr">￥1500</span>
				</div>
				<div class="clearfix">
					<span class="fl">流水号</span>
					<span class="fr">2102155201120</span>
				</div>
				<div class="clearfix">
					<span class="fl">资金流向</span>
					<span class="fr">余额</span>
				</div>
			</div>
		</div>
	</div>
{% endblock %}