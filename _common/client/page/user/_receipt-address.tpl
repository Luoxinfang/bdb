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
                    <input type="text" id="name" placeholder="姓名" minlength="2" maxlength="4"/>
                </li>
                <li class='form-li-input'>
                    <input type="tel" id="tel" placeholder="电话" minlength="11" maxlength="11"/>
                </li>
                <li class='form-li-input'>
                    <input type="tel" id="code" placeholder="邮政编码" minlength="6" maxlength="6"/>
                </li>
            </ul>
            <ul class="form-ul">
                <li class='form-li-input form-li-textarea'>
                    <textarea id="address" placeholder="详细地址..."></textarea>
                </li>
            </ul>
            <a class="btn btn-red">保存</a>
        </div>
    </div>
{% endblock %}