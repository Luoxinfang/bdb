{% extends '_common:page/_layout.tpl' %}

{% block header %}
	{% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
	{% require '_common:less/public/form.less' %}
	<div class="form">
		<input type="text" placeholder="商品名称">
		<a class="icon-add btn-file mt20"><input type="file" class="file" accept="image/*"></a>
		<textarea class="mt20" placeholder="请输入介绍信息"></textarea>
		<div class="form-group mt20">
			<div class="item icon-right">
				<span class="fl">类别</span>
				<span class="fr">翡翠</span>
			</div>
		</div>
		<div class="form-group mt20">
			<div class="item icon-right">
				<span class="fl">市场价</span>
				<span class="fr">￥<i data-role="input">5000</i></span>
			</div>
			<div class="item icon-right">
				<span class="fl">保证金</span>
				<span class="fr">￥<i data-role="input">100</i></span>
			</div>
			<div class="item icon-right">
				<span class="fl">起拍价</span>
				<span class="fr">￥<i data-role="input">500</i></span>
			</div>
			<div class="item icon-right">
				<span class="fl">加价幅度</span>
				<span class="fr">￥<i data-role="input">200</i></span>
			</div>
		</div>
		<div class="form-group mt20">
			<div class="item">
				<span class="fl">开始时间</span>
				<span class="fr"><i data-role="input">2015-10-08 18:00</i></span>
			</div>
			<div class="item">
				<span class="fl">结束时间</span>
				<span class="fr"><i data-role="input">2015-10-09 18:00</i></span>
			</div>
		</div>
		<div class="form-group mt20">
			<div class="item">
				<span class="fl">7天无条件退货</span>
				<div class="checkbox-wrap">
					<input type="checkbox" id="checkbox-1" class="checkbox">
					<label for="checkbox-1"></label>
				</div>
			</div>
			<div class="item">
				<span class="fl">包邮</span>
				<div class="checkbox-wrap">
					<input type="checkbox" id="checkbox-2" class="checkbox" checked>
					<label for="checkbox-2"></label>
				</div>
			</div>
		</div>
		<a href="/shelves/list" class="btn btn-red mt20">确定</a>
	</div>
{% endblock %}