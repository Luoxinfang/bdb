{% extends '_common:widget/auction/auction-detail.tpl' %}

{% block auctionDialog %}
	<div class="auction-dialog{{ ' '+auctionStatus }}">
		{% if auctionStatus == 'pmz' || auctionStatus == 'cj' %}
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
		{% endif %}
	</div>
{% endblock %}