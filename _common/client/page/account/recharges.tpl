{% extends '_common:page/layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../less/public/form.less"/>
{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
    <div id="content">
        <div class="form">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="text" id="name" placeholder="请填提现金额" minlength="2" maxlength="4"/>
                </li>
            </ul>
        </div>
    </div>
{% endblock %}