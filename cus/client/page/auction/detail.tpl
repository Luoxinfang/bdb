{% extends '_common:page/auction/detail.tpl' %}

{% block auctionDialog %}
	<div class="auction-dialog">
			<ul>


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