<template>
	<view class="repairPage">
		<view class="search-nav">
			<view class="inputsearch">
				<uni-easyinput prefixIcon="search"  class="zll-input" v-model="value" borderColor="#34bfc6"></uni-easyinput>
			</view>
			<view class="button">
				<button type="warn" size="mini" class="zll-button search">查询</button>
				<button type="default" size="mini" class="zll-button">清除</button>
			</view>
			<view class="clearBoth"></view>
		</view>
		<view class="table-nav">
			<table>
				<tr>
					<th width="35%">时间</th>
					<th width="25%">区位</th>
					<th width="15%">名称</th>
					<th width="10%">编号</th>
					<th width="15%">状态</th>
				</tr>
				<tr v-for="(item,index) in tableData">
					<td width="35%">{{item.data1}}</td>
					<td width="25%">{{item.data2}}</td>
					<td width="15%">{{item.data3}}</td>
					<td width="10%">{{item.data4}}</td>
					<td width="15%" :class="{'nohaved': item.data5=='待响应','haved': item.data5=='维修中'}">{{item.data5}}</td>
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
					data1: '2021-03-12 13:41:55',
					data2: '1#车间机加线',
					data3: '数控立车',
					data4: 'SC01',
					data5: '待响应',
				},{
					data1: '2021-03-12 13:41:55',
					data2: '1#车间机加线',
					data3: '数控立车',
					data4: 'SC01',
					data5: '维修中',
				},{
					data1: '2021-03-12 13:41:55',
					data2: '1#车间机加线',
					data3: '数控立车',
					data4: 'SC01',
					data5: '维修中',
				},{
					data1: '2021-03-12 13:41:55',
					data2: '1#车间机加线',
					data3: '数控立车',
					data4: 'SC01',
					data5: '已完成',
				},{
					data1: '2021-03-12 13:41:55',
					data2: '1#车间机加线',
					data3: '数控立车',
					data4: 'SC01',
					data5: '已完成',
				},{
					data1: '2021-03-12 13:41:55',
					data2: '1#车间机加线',
					data3: '数控立车',
					data4: 'SC01',
					data5: '已取消',
				}]
			}
		}
	}
</script>

<style lang="scss">
	.repairPage {
		.search-nav {
			padding: 1.5rem 0 0.5rem;
			.inputsearch {
				width: 40%;
				float: left;
			}
			.button {
				float: left;
				.zll-button {
					font-size: 1.2rem;
					width: 6rem;
					height: 2.6rem;
					line-height: 2.6rem;
					margin-left: 1rem;
					text-align: center;
					float: left;
					&.search {
						background: $main-title-color;
					}
				}
			}
		}
		.table-nav {
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
					}
				}
			}
		}
	}
</style>
