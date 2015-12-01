{% extends '_common:page/_layout.tpl' %}


{% block body %}
  {% widget '_common:widget/header/header.tpl' %}
  <style>
    .result-icon{
      height:5.625rem;
    }
  </style>
  <div id="content">
    <div class="result-icon result-icon-success"></div>
    {% block result-content %}{% endblock %}
  </div>
{% endblock %}