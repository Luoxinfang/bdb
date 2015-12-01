{% extends '_common:page/_layout.tpl' %}
{% block head %}
    <link rel="stylesheet" href="../../less/public/form.less"/>
{% endblock %}

{% block body %}
    {% widget '_common:widget/header/header.tpl' %}
    <div id="content">
        <!--注册表单-->
        <div class="form">

            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="tel" id="tel" placeholder="请输入你的手机号码" maxlength="11" autoconmplete='on' />
                </li>
                <li class="form-li-input has-right-bt">
                    <div>
                        <input type="tel" id="message" placeholder="请输入验证码" maxlength="4" />
                    </div>
                    <!--获取验证码按钮不可点增加类btn-disabled即可-->
                    <a id="getMessage" class="right-btn">获取验证码</a>
                </li>
            </ul>
            <a class="btn btn-white">绑定账号</a>
        </div>
    </div>
{% endblock %}