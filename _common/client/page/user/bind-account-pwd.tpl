{% extends '_common:page/layout.tpl' %}
{% block head %}
    {% require "_common:less/public/form.less" %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
    <div id="content">
        <!--注册表单-->
        <div class="form">

            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="password" id="pwd" placeholder="请输入新密码" minlength="4" maxlength="12" autoconmplete='off'/>
                </li>
                <li class="form-li-input">
                    <input type="password" id="pwd_again" placeholder="请再次输入新密码" minlength="4" maxlength="12" autoconmplete='off'/>
                </li>
            </ul>
            <a class="btn btn-red">确认</a>
        </div>
    </div>
{% endblock %}