{% extends '_common:page/layout.tpl' %}
{% block head %}
    {% require "_common:less/public/form.less" %}
{% endblock %}

{% block header %}
    {% widget '_common:widget/common/header/header.tpl' %}
{% endblock %}

{% block content %}
    <div id="content">
        <div class="form" id="form1">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="tel" id="old_tel" value="15989387109" disabled="disabled" />
                </li>
                <li class="form-li-input has-right-bt">
                    <div>
                        <input type="tel" id="message" placeholder="请输入验证码" maxlength="6" />
                    </div>
                    <!--获取验证码按钮不可点增加类btn-disabled即可-->
                    <a id="getMessage1" class="right-btn">获取验证码</a>
                </li>
                <li class='form-li-input'>
                    <input type="tel" id="pwd" placeholder="请输入登录密码" maxlength="11" autoconmplete='on' />
                </li>
            </ul>
            <a class="btn btn-white" id="btn-next">下一步</a>
        </div>
        <div class="form hide" id="form2">
            <ul class="form-ul">
                <li class='form-li-input'>
                    <input type="tel" id="new-tel" placeholder="请输入新的手机号" maxlength="11" autoconmplete='on' />
                </li>
                <li class="form-li-input has-right-bt">
                    <div>
                        <input type="tel" id="new-message" placeholder="请输入验证码" maxlength="6" />
                    </div>
                    <!--获取验证码按钮不可点增加类btn-disabled即可-->
                    <a id="getMessage2" class="right-btn">获取验证码</a>
                </li>
            </ul>
            <a class="btn btn-red" id="btn-submit">完成</a>
        </div>
    </div>
    {% script %}
    require('_common:widget/user/change-tel-info.js').init();
    {% endscript %}
{% endblock %}