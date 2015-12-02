{%extends '_common:page/_layout.tpl'%}

{%block head%}
	<link rel="stylesheet" href="../../less/user/login.less?__inline"/>
{%endblock%}

{% block header %}
  <div class="header" style="height: 100px;">
    实现固定顶部
  </div>
{% endblock %}

{%block body%}
		<div class="container" id="container">
			<div class="logo"></div>
			<div class="login-wrap">
				{%widget '_common:widget/login/login.tpl'%}
			</div>
			<div class="login-other">
				<a href="/login-wx">通过微信登录></a>
			</div>
			{%block content%}{%endblock%}
		</div>
{%endblock%}

{% block footer %}
	<div class="footer" style="height: 100px;">
    实现固定底部
  </div>
{% endblock %}
