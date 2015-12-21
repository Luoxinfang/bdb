{% extends '_common:page/layout.tpl' %}
{%block head%}
  <link rel="stylesheet" href="../less/sys/sys.less?__inline"/>
  <style type="text/css">
    .container{
      background-image: url("../icon/sys/500.png");
    }
  </style>
{%endblock%}
{% block content %}
  <div class="container" id="container">
    <a href="/" class="go-index" style="visibility: hidden;"></a>
    <div class="copyright page500">
      深圳前海百多宝网络科技有限公司
    </div>
  </div>

{% endblock %}