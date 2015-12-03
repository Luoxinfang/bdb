{% require '_common:widget/header/header.less' %}
<div class="header-wrap">
    <div class="header">
        {% if header.back %} {#是否有返回按钮，默认：有#}
            <div class="left icon-60 icon-back"></div>
        {% endif %}
        <ul class="nav">
        {% for item in header.nav %}
            {% if loop.index==1 %}
                <li class="li on">{{ item }}</li>
            {% else %}
                <li class="li">{{ item }}</li>
            {% endif %}
        {% endfor %}
         </ul>
    </div>
</div>