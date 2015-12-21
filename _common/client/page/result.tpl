{% extends '_common:page/layout.tpl' %}
{% block content %}
  {% widget '_common:widget/common/header/header.tpl' %}
  <style>
    .result-icon{
      height:5.625rem;
      background-size: 3.125rem;
      background: no-repeat center center;
    }
    .result-icon-success{
      background-image: url("../icon/success.png");
    }
    .result-icon-fail{
      background-image: url("../icon/fail.png");
    }
  </style>
  <div id="content">
    <div class="result-icon result-icon-success"></div>
    {% block result-content %}{% endblock %}
  </div>
{% endblock %}