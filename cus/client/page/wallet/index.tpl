{% extends '_common/page/_layout.tpl' %}

{% block head %}
    {% require "_common:less/public/form.less" %}
    {% require "cus:widget/wallet/index/index.less" %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block body %}
    <div id="content">
        <div id="head-pic">
            <p class="fs-1">￥ 1510.00</p>
        </div>
        <div class="form-list">
            <ul class="form-ul">
                <li class="form-li">
                    <a href="/wallet/trans-list">交易明细</a>
                </li>
                <li class="form-li">
                    <a href="/recharges">充值</a>
                </li>
                <li class="form-li">
                    <a href="/withdrawals">提现</a>
                </li>
            </ul>
            <ul class="form-ul">
                <li class="form-li">
                    <a href="">银行卡管理</a>
                </li>
                <li class="form-li">
                    <a href="">安全</a>
                </li>
            </ul>
        </div>
    </div>

{% endblock %}