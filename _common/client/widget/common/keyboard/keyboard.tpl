{% set icons = [
{name:'am'},{name:'bs'},{name:'by'},{name:'cy'},{name:'dy'},
{name:'fd'},{name:'gg'},{name:'han'},{name:'hx'},{name:'je'},
{name:'jk'},{name:'jy'},{name:'ku'},{name:'kun'},{name:'ng'},
{name:'nu'},{name:'pz'},{name:'sj'},{name:'tu'},{name:'tx'},
{name:'wq'},{name:'wx'},{name:'zk'}
] %}

<div class="keyboard">
	<div class="keyboard-top ">
		<div class="input"></div>
		<div class="placeholder">请输入出价金额</div>
		<div class="btn-icon"></div>
	</div>
	<div class="keyboard-board ">
		<table class="number-table">
			<tr>
				<td class="number">1</td>
				<td class="number">2</td>
				<td class="number">3</td>
				<td rowspan="3" class="keyboard-submit">出价</td>
			</tr>
			<tr>
				<td class="number">4</td>
				<td class="number">5</td>
				<td class="number">6</td>
			</tr>
			<tr>
				<td class="number">7</td>
				<td class="number">8</td>
				<td class="number">9</td>
			</tr>
			<tr>
				<td class="number">.</td>
				<td class="number">0</td>
				<td class="del">del</td>
				<td class="close">close</td>
			</tr>
		</table>
		<div class="icon-table">
			{% for item in icons %}
				<span data-name="{{ item.name }}" class="facial {{ item.name }}"></span>
			{% endfor %}
		</div>
	</div>
</div>