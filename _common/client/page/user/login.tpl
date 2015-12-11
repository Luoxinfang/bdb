{%extends '_common:page/layout.tpl'%}

{%block head%}
	<link rel="stylesheet" href="../../less/user/login.less?__inline"/>
{%endblock%}

{%block body%}
		<div class="container" id="container">
			<div class="logo"></div>
			<div class="login-wrap">
				{%widget '_common:widget/user/login/login.tpl'%}
			</div>
			<div class="login-other">
				<a href="/login-wx">通过微信登录></a>
			</div>
			{%block content%}{%endblock%}
		</div>
{%endblock%}
