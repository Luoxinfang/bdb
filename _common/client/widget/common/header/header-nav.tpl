{% require '_common:widget/common/header/header.less' %}
<div class="header-wrap">
    <div class="header-content">
        {% if header.leftIcon %}
            <a {% if header.backUrl %}href="{{ header.backUrl }}" {% endif %}class="left icon-60 icon-back"></a>
        {% endif %}
        <div>
            <ul class="nav">
            {% for item in header.nav %}
                {% if item.default %}
                    <a class="li on" href="{{ item.url }}">{{ item.val }}</a>
                {% else %}
                    <a class="li" href="{{ item.url }}">{{ item.val }}</a>
                {% endif %}
            {% endfor %}
             </ul>
        </div>
    {% if header.sort %} {#排序，默认：无，需要的话直接配置header.sort值#}
        <div class="right sort fs-2 fc-2">{{ header.sort }}</div>
    {% endif %}
    </div>
</div>