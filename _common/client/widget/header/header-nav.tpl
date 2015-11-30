{% require '_common:widget/header/header.css' %}

<div class="header-wrap">
    <div class="header">
        {% if headerBack %} {#是否有返回按钮，默认：有#}
            <div class="left icon-60 icon-back"></div>
        {% endif %}

        <ul class="nav">
            <li class="li on">系统消息</li>
            <li class="li">用户消息</li>
        </ul>
    </div>
</div>