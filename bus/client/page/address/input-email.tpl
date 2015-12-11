{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require "_common:less/public/address.less" %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        <div class="form">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="text" id="email" placeholder="请输入邮箱地址" minlength="2"/>
                </li>
            </ul>
            <a class="btn btn-disabled">完成</a>
        </div>
    </div>
{% endblock %}