{% require '_common:widget/auction/auction.less' %}

<div class="auction-list clearfix">
    {% for item in data.dataList %}
        {% widget '_common:widget/auction/auction-item.tpl' %}
    {% endfor %}
</div>

{% script %}
require('_common:widget/common/header/header-sort.js').init();
{% endscript %}