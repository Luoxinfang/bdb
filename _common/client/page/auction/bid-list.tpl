{#出价列表#}
{% for item in data %}
	{% if page==1 && loop.index==1 %}
	<li class="item max-price" data-total="{{ total }}" data-max-price="{{ item.amount }}">
	{% else %}
		<li class="item">
	{% endif %}
	<img class="user-img" src="{{ item.imgurl }}" alt="">

	<div class="d-c ml20">
		<div class="clearfix">
			<span class="name">{{ item.username }}</span>
			<span class="emoji"></span>
		</div>
		<div class="clearfix mt10">
			<span class="price">￥{{ item.amount }}</span>
		</div>
	</div>
	<div class="d-r tr">
		{% if page==1 && loop.index==1 %}
		<div class="state">(<span id="first-price"></span>)领先</div>
		{% else %}
			<div class="state">出局</div>
		{% endif %}
		<div class="time">{{ item.createtime | date('m-d H:i:s' ) }}</div>
	</div>
	</li>
{% endfor %}