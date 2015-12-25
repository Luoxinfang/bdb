{% extends '_common:page/auction/detail.tpl' %}

{% block auctionDialog %}
	{% set statusClass = ['wks','wks','',''] %}
	<div class="auction-dialog {{ statusClass[auctionStatus] }}">
		{% if auctionStatus == 2 || auctionStatus == 3 %}
			<ul>
				<li class="item">
					{{ data }}
					<div class="banner-wrap">
						{% widget '_common:widget/common/banner/banner.tpl' %}
					</div>
				</li>
				<li class="item">
					<div class="d-c ml20">
						<div class="clearfix">
							<span class="name">C罗</span>
							<span class="emoji"></span>
						</div>
						<div class="clearfix mt10">
							<span class="price">￥4200</span>
						</div>
					</div>
					<div class="d-r tr">
						<div class="state">(04:36) 领先</div>
						<div class="time">09-25 14:57:21</div>
					</div>
				</li>
				<li class="item">
					<img src="http://img2.imgtn.bdimg.com/it/u=1341923083,1900907467&fm=23&gp=0.jpg" alt="" class="user-img">

					<div class="d-c ml20">
						<div class="clearfix">
							<span class="name">玉华</span>
							<span class="emoji"></span>
						</div>
						<div class="clearfix mt10">
							<span class="price">￥4000</span>
						</div>
					</div>
					<div class="d-r tr">
						<div class="state">出局</div>
						<div class="time">09-25 14:20:07</div>
					</div>
				</li>
				<li class="item">
					<img src="http://img3.imgtn.bdimg.com/it/u=3741892468,250959383&fm=23&gp=0.jpg" alt="" class="user-img">

					<div class="d-c ml20">
						<div class="clearfix">
							<span class="name">老刘</span>
							<span class="emoji"></span>
						</div>
						<div class="clearfix mt10">
							<span class="price">￥3600</span>
						</div>
					</div>
					<div class="d-r tr">
						<div class="state">出局</div>
						<div class="time">09-25 14:18:45</div>
					</div>
				</li>
				<li class="item">
					<img src="http://img2.imgtn.bdimg.com/it/u=1341923083,1900907467&fm=23&gp=0.jpg" alt="" class="user-img">

					<div class="d-c ml20">
						<div class="clearfix">
							<span class="name">玉华</span>
							<span class="emoji"></span>
						</div>
						<div class="clearfix mt10">
							<span class="price">￥3000</span>
						</div>
					</div>
					<div class="d-r tr">
						<div class="state">出局</div>
						<div class="time">09-25 14:12:50</div>
					</div>
				</li>
			</ul>

		{% endif %}
	</div>
{% endblock %}

{% block footer %}
	{% if auctionStatus == 0 || auctionStatus == 2 %}
		<div class="footer-content">
			<button class="btn btn-red">交保证金参加拍卖</button>
		</div>
	{% endif %}
	{% if auctionStatus == 1 %}
		<div class="footer-content">
			<button class="btn btn-white btn-disabled btn-l">自定出价</button>
			<button class="btn btn-red btn-disabled btn-c ml20">出价100</button>
			<button class="btn btn-white btn-r ml20">托管</button>
		</div>
	{% endif %}
	{% if auctionStatus == 3 %}
		<div class="footer-content">
			<button class="btn btn-white btn-l">自定出价</button>
			<button class="btn btn-red btn-c ml20">出价100</button>
			<button class="btn btn-white btn-r ml20">托管</button>
		</div>
	{% endif %}
	{% script %}
	require("cus:widget/auction/auction-detail.js").init();
	{% endscript %}
{% endblock %}