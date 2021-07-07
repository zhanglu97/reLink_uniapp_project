<template>
	<view class="maintain">
		<table>
			<tr>
				<th width="30%">科目</th>
				<th width="30%">周期</th>
				<th width="40%">剩余天数</th>
			</tr>
			<tr>
				<td width="30%">润滑系统</td>
				<td width="30%">1个月</td>
				<td width="40%">22天</td>
			</tr>
			<tr>
				<td width="30%">滑台保养</td>
				<td width="30%">1个月</td>
				<td width="40%">22天</td>
			</tr>
			<tr>
				<td width="30%">切屑液泵</td>
				<td width="30%">2个月</td>
				<td width="40%">15天</td>
			</tr>
		</table>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.maintain {
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			empty-cells: show;
			border: 1px solid #FFFFFF;
			table-layout: fixed;
			tr {
				font-size: $font-sm;
				margin: 0;
				overflow: visible;
				height: 60upx;
				line-height: 60upx;
				th {
					background-color: #d1dcef;
					text-align: center;
					border: 1px solid #FFFFFF;
					font-weight: 400;
					color: #888;
				}
				td {
					text-align: center;
					border: 1px solid #FFFFFF;
					background-color: #edf3fb;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
