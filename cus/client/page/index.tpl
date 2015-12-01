{% extends '_common/page/_layout.tpl' %}

{% block head %}
	{% require 'cus:widget/index/index.css' %}
	{% require 'cus:widget/index/index.js' %}
{% endblock %}

{% block body %}
	<div class="index">
		{% widget '_common:widget/header/header-top.tpl' %}
		{% widget '_common:widget/banner/banner.tpl' %}
		<div class="category clearfix">
			<a href="">
				<i class="icon icon-01"></i><br/>
				<span>翡翠</span>
			</a>
			<a href="">
				<i class="icon icon-02"></i><br/>
				<span>黄金</span>
			</a>
			<a href="">
				<i class="icon icon-03"></i><br/>
				<span>钻石</span>
			</a>
			<a href="">
				<i class="icon icon-04"></i><br/>
				<span>更多</span>
			</a>
		</div>
		<div class="list">
			<div class="title">
				<span class="sl">平台活动</span>
				<a href="" class="sr">更多</a>
			</div>
			<div class="content clearfix">
				<div class="fl">
					<div class="col col-1"></div>
					<div class="col col-1"></div>
				</div>
				<div class="fr">
					<div class="col col-2"></div>
				</div>
			</div>
		</div>
		<div class="list list-02">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
		</div>
		<div class="list list-03">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
		</div>
		<div class="list list-04">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
		</div>
		<div class="list list-05">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
		</div>
		<div class="list list-06">
			<div class="title">
				<span class="sl">秒杀专场</span>
				<a href="" class="sr">更多</a>
			</div>
		</div>
	</div>
	{% script %}
	$(function(){
		require('cus:widget/index/index.js').init();
	})
	{% endscript %}
{% endblock %}

{% block beforeBody %}
	<div class="mark"></div>
{% endblock %}

{% block afterBody %}
	<div class="me">

	</div>
{% endblock %}