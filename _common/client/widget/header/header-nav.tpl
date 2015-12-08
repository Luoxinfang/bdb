{% require '_common:widget/header/header.less' %}
<div class="header-wrap">
    <div class="header">
        {% if header.leftIcon %}
            <a {% if header.backUrl %}href="{{ header.backUrl }}" {% endif %}class="left icon-60 icon-back"></a>
        {% endif %}
        <div>
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
    {% if header.sort %} {#排序，默认：无，需要的话直接配置header.sort值#}
        <div class="right sort fs-2 fc-2">{{ header.sort }}</div>
    {% endif %}
    </div>
</div>

{% script %}
    require('header-nav.js').init();
{% endscript %}