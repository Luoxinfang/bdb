<div class="wd-login">
  <div class="group-ipt">
    <input type="text" class="username ipt" id="username" value="15989387109"
           placeholder="请输入用户名">
    <input type="password" class="pwd ipt" id="user-pwd"
           placeholder="请输入密码">
  </div>
  <div class="remember">
    <input type="checkbox" class="btn-remember" id="btn-remember">
    <label for="btn-remember">记住账号</label>
    <a class="forgot-pwd" href="/find-pwd-info">忘记密码?</a>
  </div>
  <div class="group-btn">
    <a class="btn btn-white" id="btn-login">登录</a>
    <a class="btn-reg" href="/reg-tel">注册</a>
  </div>
</div>
{%require "_common:js/plugin/zepto-cookie.js"%}
{% script %}
  require("login.js").init();
{% endscript %}