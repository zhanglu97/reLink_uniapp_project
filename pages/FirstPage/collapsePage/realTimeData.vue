<template>
	<view class="realTimeData">
		<table>
			<tr class="nav">
				<td colspan="2">时间戳</td>
				<td>2020-12-15 13:33:01</td>
			</tr>
			<tr>
				<td colspan="2">机械坐标</td>
				<td>344.291，-163.722，-327.211</td>
			</tr>
			<tr class="nav">
				<td rowspan="3">主轴</td>
				<td>转速</td>
				<td>0</td>
			</tr>
			<tr class="nav">
				<td>倍率</td>
				<td>60</td>
			</tr>
			<tr class="nav">
				<td>负载</td>
				<td>0</td>
			</tr>
			<tr>
				<td rowspan="2">进给</td>
				<td>速度</td>
				<td>0</td>
			</tr>
			<tr>
				<td>倍率</td>
				<td>70</td>
			</tr>
			<tr class="nav">
				<td colspan="2">当前刀具</td>
				<td>钛合金T60铣刀</td>
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
		border: 1px solid #FFFFFF;
		tr {
		    font-size: $font-sm;
		    margin: 0;
		    overflow: visible;
		    height: 60upx;
			line-height: 60upx;
			background-color: #edf3fb;
			&.nav {
				background-color: #d1dcef;
			}
			td {
				text-align: center;
				border: 1px solid #FFFFFF;
			}
		}
	}
}
</style>
