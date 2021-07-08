<template>
	<view class="maintainPage">
		<view class="table-nav">
			<table>
				<tr>
					<th width="25%">区位</th>
					<th width="20%">编号</th>
					<th width="20%">保养级别</th>
					<th width="20%">截止日期</th>
					<th width="15%">状态</th>
				</tr>
				<tr v-for="(item,index) in tableData">
					<td width="25%">{{item.data1}}</td>
					<td width="20%">{{item.data2}}</td>
					<td width="20">{{item.data3}}</td>
					<td width="20%">{{item.data4}}</td>
					<td width="15%" :class="{'nohaved': item.data5=='已超期','wait': item.data5=='待保养'}">{{item.data5}}</td>
				</tr>				
			</table>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				tableData: [{
					data1: '1#车间机加线',
					data2: 'SC01',
					data3: '1级',
					data4: '05-21',
					data5: '待保养',
				},{
					data1: '1#车间机加线',
					data2: 'SC01',
					data3: '1级',
					data4: '05-21',
					data5: '待保养',
				},{
					data1: '1#车间机加线',
					data2: 'SC01',
					data3: '1级',
					data4: '05-21',
					data5: '待保养',
				},{
					data1: '1#车间机加线',
					data2: 'SC01',
					data3: '1级',
					data4: '05-21',
					data5: '待保养',
				},{
					data1: '1#车间机加线',
					data2: 'SC01',
					data3: '1级',
					data4: '05-21',
					data5: '已超期',
				},]
			}
		}
	}
</script>

<style lang="scss">
	.maintainPage {
		.table-nav {
			padding: 1rem 0;
			table {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				empty-cells: show;
				table-layout: fixed;
				tr {
					font-size:1.2rem;
					margin: 0;
					overflow: visible;
					height: 3.5rem;
					line-height: 3.5rem;
					th {
						text-align: center;
						font-weight: 400;
						color: #999;
					}
					td {
						text-align: center;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						border-top: 1px solid #ededed;
						&.haved {
							color: $font-color-spec;
						}
						&.nohaved {
							color: $uni-color-error;
						}
						&.wait {
							color: #E6A23C;
						}
					}
				}
			}
		}
	}
</style>
