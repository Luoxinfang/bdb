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
                    <input type="text" id="name" placeholder="中国" minlength="2" maxlength="4"/>
                </li>
            </ul>
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="tel" id="tel" placeholder="广东" minlength="11" maxlength="11"/>
                </li>
                <li class='form-li-input'>
                    <input type="tel" id="code" placeholder="深圳" minlength="6" maxlength="6"/>
                </li>
            </ul>
            <ul class="form-ul">
                <li class='form-li-input form-li-textarea'>
                    <textarea id="address" placeholder="请输入详细街道信息..."></textarea>
                </li>
            </ul>
            <a class="btn btn-red">完成</a>
        </div>
    </div>
{% endblock %}