{% for item in activityList %}
	<div class="activity-item">
		<a href="/activity/detail?activename={{ item.activename }}&activityid={{ item.id }}">
			<img src="http://img5.imgtn.bdimg.com/it/u=346760668,2243348761&fm=21" alt="">
		</a>
		<div class="z-1">
			<p class="s-1">{{ item.activename }}</p>
		</div>
	</div>
{% endfor %}