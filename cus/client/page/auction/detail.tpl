{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header-top.tpl' %}
	{% widget '_common:widget/banner/banner.tpl' %}
	{% require '_common:widget/auction/auction.less' %}
	<div class="auction-detail">
		<div class="store">
			<div class="photo">{% widget '_common:widget/user/user-photo.tpl' %}</div>
			<a href="/store" class="name">小唐的店铺</a>
			<span class="time">开始时间 04:36</span>
		</div>
		<div class="desc"><p>老坑冰种飘绿如意吊坠，尺寸：46*35*6.5mm。重量：23.8g，品相：完美，无裂痕。身检证书编号：6918563211。市场参考价：33000元...</p></div>
		<div class="price">
			<div class="item"><span class="qi">￥1000</span></div>
			<div class="item"><span class="jia">￥100</span></div>
			<div class="item"><span class="bao">￥200</span></div>
		</div>
		<a class="collect-cnt icon-collect-cnt">423</a>
	</div>
{% endblock %}

{% block body %}
	{% if auctionStatus == 0 || auctionStatus == 1 %}
	<div class="auction-status"></div>
	{% endif %}
	{% if auctionStatus == 2 || auctionStatus == 3 %}
		<div class="auction-dialog">
			<div class="li">
				<img src="http://img1.imgtn.bdimg.com/it/u=823916137,3655793224&fm=21&gp=0.jpg" alt="" class="user-img">
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
			</div>
			<div class="li">
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
			</div>
			<div class="li">
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
			</div>
			<div class="li">
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
			</div>
		</div>
	{% endif %}
{% endblock %}

{% block footer %}
	{% require '_common:widget/footer/footer.less' %}
	{% if auctionStatus == 0 || auctionStatus == 2 %}
	<div class="footer">
		<button class="btn btn-red">交保证金参加拍卖</button>
	</div>
	{% endif %}
	{% if auctionStatus == 1 %}
		<div class="footer">
			<button class="btn btn-white btn-disabled btn-l">自定出价</button>
			<button class="btn btn-red btn-disabled btn-c ml20">出价100</button>
			<button class="btn btn-white btn-r ml20">托管</button>
		</div>
	{% endif %}
	{% if auctionStatus == 3 %}
		<div class="footer">
			<button class="btn btn-white btn-l">自定出价</button>
			<button class="btn btn-red btn-c ml20">出价100</button>
			<button class="btn btn-white btn-r ml20">托管</button>
		</div>
	{% endif %}
{% endblock %}