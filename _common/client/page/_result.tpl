{% extends '_common:page/_layout.tpl' %}
{% block body %}
  {% widget '_common:widget/header/header.tpl' %}
  <style>
    .result-icon{
      height:5.625rem;
      background-size: 3.125rem;
      background-position: center center;
      background-repeat: no-repeat;
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