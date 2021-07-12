<template>
	<view class="realTimeData">
		<table>
			<tr>
				<td class="nav">时间戳</td>
				<td>2020-12-15 13:33:01</td>
			</tr>
			<tr>
				<td class="nav">程序名</td>
				<td>SD18W</td>
			</tr>
			<tr>
				<td class="nav">当前产量</td>
				<td>12</td>
			</tr>
			<tr>
				<td class="nav">当前刀具</td>
				<td>钛合金T60铣刀</td>
			</tr>
			<tr>
				<td class="nav">机械坐标</td>
				<td>344.291，-163.722，-327.211</td>
			</tr>
			<tr>
				<td class="nav">主轴转速</td>
				<td>70</td>
			</tr>
			<tr>
				<td class="nav">主轴倍率</td>
				<td>70</td>
			</tr>
			<tr>
				<td class="nav">主轴负载</td>
				<td>70</td>
			</tr>
			<tr>
				<td class="nav">进给速度</td>
				<td>70</td>
			</tr>
			<tr>
				<td class="nav">进给倍率</td>
				<td>70</td>
			</tr>
		</table>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.realTimeData {
	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		empty-cells: show;
		tr {
		    font-size: $font-sm;
		    margin: 0;
		    overflow: visible;
		    height: 3rem;
			line-height: 3rem;
			border: 1px solid #f2f2f2;
			td {
				text-align: center;
				&.nav {
					background-color: #d1dcef;
					color: #888;
				}
			}
		}
	}
}
</style>
