{#聊天列表#}
{% for item in consultInfo %}
	{% if item.userid == userid %}
		<div class="consultation-sTime">
			{% if item.createtime >= nowDate %}
				{{ item.createtime | date('H:i', -480, 'CCT') }}
			{% else %}
				{{ item.createtime | date('Y-m-d H:i:s', -480, 'CCT') }}
			{% endif %}
		</div>
		<div class="consultation-li self clearfix">
			<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fr mr20">

			<div class="info">{{ item.content }}</div>
		</div>
	{% else %}
		<div class="consultation-sTime">
			{% if item.createtime >= nowDate %}
				{{ item.createtime | date('H:i', -480, 'CCT') }}
			{% else %}
				{{ item.createtime | date('Y-m-d H:i:s', -480, 'CCT') }}
			{% endif %}
		</div>
		<div class="consultation-li other clearfix">
			<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="" class="img fl ml20">

			<div class="info">{{ item.content }}</div>
		</div>
	{% endif %}
{% endfor %}