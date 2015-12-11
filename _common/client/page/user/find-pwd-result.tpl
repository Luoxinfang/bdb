{% extends '_common:page/result.tpl' %}
{% block head %}
    {% require "_common:less/public/form.less" %}
{% endblock %}

{% block result-content %}
<style>
    div{
        text-align: center
    }
    .result-text1{
        color: #24a80a;
        text-align: center;
    }
    .result-text2{
        margin-top: 0.2rem;
    }
    .btn{
        width: 3.75rem;
        margin-top: 4.5rem;
    }

</style>
<div>
    <p class="fs-2 result-text1">修改密码成功</p>
    <p class="fs-3 fc-4 result-text2"><em id="time">3</em>秒后自动跳转到主页...</p>
    <a class="btn btn-white">立刻跳转</a>
</div>
{% endblock %}