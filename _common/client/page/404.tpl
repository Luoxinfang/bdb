{% extends '_common:page/layout.tpl' %}
{%block head%}
  <link rel="stylesheet" href="../less/sys/sys.less?__inline"/>
  <style type="text/css">
    .container{
      background-image: url("../icon/sys/404.png");
    }
  </style>
{%endblock%}
{% block content %}
  <div class="container" id="container">
    <a href="/" class="go-index">返回首页</a>
    <div class="copyright page404">
      深圳前海百多宝网络科技有限公司
    </div>
  </div>

{% endblock %}