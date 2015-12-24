<!--
	用户头像的组件
	photo:{
		imgurl: 头像的地址 默认是无
		notEditable: 不可以编辑? 默认是false
	}
-->
<div class="user-photo">
	{% if photo.url %}
		<img id="photo" src="{{ photo.url }}" alt="">
	{% else %}
		<img id="photo" src="./default.png" alt="">
	{% endif %}

	{% if !photo.notEditable %}
	<input type="file" class="input-file" accept="image/*">
	{% endif %}
</div>
{% script %}
require('photo.js').init();
{% endscript %}
