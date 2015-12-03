{% extends '_common:page/_layout.tpl' %}
{% block head %}
    {% require "_common:less/public/form.less" %}
    <style>
        .form-li-text{
            color: #2297f6;
            position: absolute;
            top:0;
            right: 0.315rem;
        }
    </style>
{% endblock %}

{% block header %}
    {% widget '_common:widget/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        <div class="form">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="text" id="card_no" placeholder="请输入你的银行卡号" minlength="8" maxlength="26"/>
                    /*card_bank_name默认不显示，增加.hide样式*/
                    <span id="card_bank_name" class="form-li-text fs-3">中国民生银行</span>
                </li>
                <li class='form-li-input'>
                    <input type="text" id="card_bank" placeholder="请输入开户支行" minlength="4" maxlength="18"/>
                </li>
                <li class='form-li-input'>
                    <input type="text" id="card_name" placeholder="请输入持卡人姓名" minlength="2" maxlength="4"/>
                </li>
            </ul>
            <a class="btn btn-red btn-disabled">保存</a>
        </div>
    </div>
{% endblock %}