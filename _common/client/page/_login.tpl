{% extends '_common:page/_layout.tpl' %}

{% block head %}
  <link rel="stylesheet" href="../css/_login.css?__inline"/>
{% endblock %}

{% block body %}
    <div class="wrapper">
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
    </div>

    {% script %}
      //设置屏幕的高度
      var height = Math.max(document.documentElement.clientHeight,
                            document.body.offsetHeight);
      document.getElementById('container').style.height =  height + 'px';
    {% endscript %}

{% endblock %}