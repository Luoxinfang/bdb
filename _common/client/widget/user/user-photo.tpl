{% require '_common:widget/user/user.less' %}

<div class="user-photo">
	{% if userPhoto %}
		<img id="photo" src="{{ userPhoto }}" alt="">
	{% else %}
		<img id="photo" src="./icon/default-ph.png" alt="">
	{% endif %}
	{#<img src="{{ userPhoto ||__uri('./icon/default-ph.png')}}" alt="">#}
	<input type="file" class="input-file" accept="image/*">
</div>