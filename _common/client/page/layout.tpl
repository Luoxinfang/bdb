<!doctype html>
{% html framework="_common:js/lib/mod.js" %}
  {% head %}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="description" content="百多宝--珠宝电商平台">
    <meta name="author" content="百多宝前海科技有限公司">
    <meta name="keyword" content="百多宝,珠宝,电商平台">
    <title>百多宝--珠宝电商平台</title>
    <link rel="apple-touch-icon" sizes="114x114" href="../icon/logo.png" />
    {% require "_common:less/normalize.less" %}
    {% require "_common:less/global.less" %}
    {% require "_common:js/lib/zepto.js" %}
    <script src="../js/inc/init-app.js?__inline"></script>
    {% block head %}{% endblock %}
  {% endhead %}

  {% body %}
    <div class="page">
			<!--页面的头部-->
			<header class="header">
				{% block header %}{% endblock %}
			</header>
      <!--工具栏-->
      <div class="toolbar">
        {% block toolbar %}{% endblock %}
      </div>
			<!--页面的内容区域-->
      <div class="content">
        {% block content %}{% endblock %}
      </div>
			<!--页面的页脚-->
			<footer class="footer">
				{% block footer %}{% endblock %}
			</footer>
    </div>
		<!--弹出框,遮罩层-->
		<div class="overlay">
			<div class="overlay-mask"></div>
			{% block overlay %}{% endblock %}
		</div>
		<!--抽屉,面板-->
		<div class="drawer">
      <div class="drawer-content">
        {% block drawer %}{% endblock %}
      </div>
      <div class="drawer-holder"></div>
		</div>
  {% endbody %}
{% endhtml %}