<template>
	<view class="alarmRecord">
		<table>
			<tr>
				<th width="40%">报警时间</th>
				<th width="20%">故障码</th>
				<th width="40%">故障</th>
			</tr>
			<tr>
				<td width="40%">2020-12-15 13:33:01</td>
				<td width="20%" class="red">003</td>
				<td width="40%">代码错误</td>
			</tr>
			<tr>
				<td width="40%">2020-12-15 13:33:01</td>
				<td width="20%" class="red">087</td>
				<td width="40%">轴参数设置有误</td>
			</tr>
			<tr>
				<td width="40%">2020-12-15 13:33:01</td>
				<td width="20%" class="red">224</td>
				<td width="40%">气压过低</td>
			</tr>
		</table>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.alarmRecord {
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			empty-cells: show;
			border: 1px solid #f2f2f2;
			table-layout: fixed;
			tr {
				font-size: $font-sm;
				margin: 0;
				overflow: visible;
				height: 3rem;
				line-height: 3rem;
				border-bottom: 1px solid #f2f2f2;
				th {
					background-color: #d1dcef;
					text-align: center;
					font-weight: 400;
					color: #888;
				}
				td {
					text-align: center;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					&.red {
						color: $uni-color-error;
					}
				}
			}
		}
	}
</style>
