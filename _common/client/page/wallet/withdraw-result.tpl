{% extends '_common:page/result.tpl' %}
{% block head %}
    {% require "_common:less/public/form.less" %}
{% endblock %}

{% block result-content %}
    <style>
        .has-label span{
            line-height: 1.4rem;
        }
    </style>
    <div class="form">
        <ul class="form-ul">
            <li class='form-li-input has-label'>
                <label>银行卡</label>
                <span class="fs-2 fr" style="color: #2197f6;">建设银行储蓄卡(1452)</span>
            </li>
            <li class='form-li-input has-label'>
                <label>提取现金</label>
                <span class="fs-2 fr">￥1540.00</span>
            </li>
        </ul>
        <a class="btn btn-red">完成</a>
    </div>
{% endblock %}