{% extends '_common:page/_layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../less/public/form.less"/>
    <style>
        .form .has-multi-line{
            height: 1.71875rem;
        }
        .has-label-div{
            padding-left: 2.25rem;
            line-height:normal;
        }
        .has-label-div p{
            color: #2197f6;
            line-height:1rem;
        }
        .has-label-div span{
            color: #7f7f7f;
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
                <li class='form-li-input has-label has-multi-line'>
                    <label for="card_name">银行卡</label>
                    <div class="has-label-div">
                        <p class="fs-1">建设银行储蓄卡(1452)</p>
                        <span class="fs-3">预计三天内到账</span>
                    </div>
                </li>
                <li class='form-li-input has-label'>
                    <label for="card_name">金额(￥)</label>
                    <input type="tel" name="card_name" id="money" placeholder="请输入金额" minlength="1" maxlength="6"/>
                </li>
            </ul>
            <a class="btn btn-white btn-disabled">下一步</a>
        </div>
    </div>
{% endblock %}