<template>
	<view class="maintain">
		<table>
			<tr>
				<th width="40%">时间</th>
				<th width="30%">操作</th>
				<th width="30%">操作人</th>
			</tr>
			<tr>
				<td width="40%">2020-12-27 07:52:0</td>
				<td width="30%">点检</td>
				<td width="30%">王有志</td>
			</tr>
			<tr>
				<td width="40%">2020-12-27 07:52:0</td>
				<td width="30%">1级保养</td>
				<td width="30%">王有志</td>
			</tr>
			<tr>
				<td width="40%">2020-12-27 07:52:0</td>
				<td width="30%">维修</td>
				<td width="30%">王有志</td>
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
			border: 1px solid #f2f2f2;
			table-layout: fixed;
			tr {
				font-size: $font-sm;
				margin: 0;
				overflow: visible;
				height: 3rem;
				line-height: 3rem;
				border: 1px solid #f2f2f2;
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
				}
			}
		}
	}
</style>
