<!doctype html>
{%html lang="en" framework="_common:js/lib/mod.js"%}
  {%head%}
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{app.description}}">
    <meta name="author" content="{{app.author}}">
    <title>{{app.title}}</title>
    {%require "_common:css/normalize.css"%}
    <link rel="stylesheet" href="../css/_index.css?__inline"/>
    <script src="../js/inc/init-app.js?__inline"></script>
    {%require "_common:js/lib/zepto.js"%}

  {%endhead%}

  {%body%}
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

    {%script%}
      //设置屏幕的高度
      var height = Math.max(document.documentElement.clientHeight,
                            document.body.offsetHeight);
      document.getElementById('container').style.height =  height + 'px';

    {%endscript%}
  {%endbody%}
{%endhtml%}