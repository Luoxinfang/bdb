{% require '_common:widget/auction/auction.less' %}

<div class="auction-item">
	<div class="bg-f pr">
		{% block beforeItem %}{% endblock %}
		<a href="/auction/detail?status={{ item.status }}">
			<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
		</a>
		<a href="/store" class="store mt10">
			<span>{{ item.name }}</span>
			<i class="fr icon-22 icon-free-post"></i>
			<i class="fr icon-22 icon-7days"></i>
			<i class="fr icon-22 icon-gold"></i>
		</a>
		<a href="/auction/detail?status={{ item.status }}" class="tlt">{{ item.shop }}</a>
		<p class="desc">{{ item.details }}</p>
		{% block auctionTime %}{% endblock %}
	</div>
</div>