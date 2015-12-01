{% extends '_common:page/_result.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../less/public/form.less"/>
{% endblock %}

{% block result-content %}
    <div class="form">
        <ul class="form-ul">
            <li class='form-li-input has-label'>
                <label>银行卡</label>
                <span>建设银行储蓄卡(1452)</span>
            </li>
            <li class='form-li-input has-label'>
                <label>提取现金</label>
                <span>￥1540.00</span>
            </li>
        </ul>
        <a class="btn btn-red">完成</a>
    </div>
{% endblock %}