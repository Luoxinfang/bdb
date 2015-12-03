{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require "_common:less/public/form.less" %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        <div class="form">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="password" id="old_pwd" placeholder="请输入旧密码" minlength="4" maxlength="12" autoconmplete='off'/>
                </li>
            </ul>
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="password" id="pwd" placeholder="请输入新密码" minlength="4" maxlength="12" autoconmplete='off'/>
                </li>
                <li class="form-li-input">
                    <input type="password" id="pwd_again" placeholder="请再次输入新密码" minlength="4" maxlength="12" autoconmplete='off'/>
                </li>
            </ul>
            <a class="btn btn-red">完成</a>
        </div>
    </div>
{% endblock %}