<template>
	<view class="devicePage">
		<view class="nav-list">
			<view class="nav">
				<view class="nav-part">
					<image class="device_img" src="../../static/img/shebei-img.png" mode=""></image>
					<view class="num">
						<text class="number">13</text>
						<text class="txt">设备总数</text>
					</view>
				</view>
				<view class="nav-part nav-part2">
					<view class="weixiu">维修中</view>
					<view class="num">
						<text class="txt">1</text>
					</view>
				</view>
			</view>
			<view class="nav nav2">
				<view class="nav-part">
					<view class="zll-button run">运行</view>
					<view class="num">
						<text class="txt run">9</text>
					</view>
				</view>
				<view class="nav-part">
					<view class="zll-button stop">停机</view>
					<view class="num">
						<text class="txt stop">2</text>
					</view>
				</view>
				<view class="nav-part">
					<view class="zll-button bj">报警</view>
					<view class="num">
						<text class="txt bj">1</text>
					</view>
				</view>
				<view class="nav-part">
					<view class="zll-button gj">关机</view>
					<view class="num">
						<text class="txt gj">1</text>
					</view>
				</view>
			</view>
		</view>
		<view class="table-nav">
			<table>
				<tr>
					<th width="25%">今日点检</th>
					<th width="25%">应点</th>
					<th width="25%">已完成</th>
					<th width="25%">未完成</th>
				</tr>
				<tr v-for="(item,index) in tableData">
					<td width="25%">{{item.data1}}</td>
					<td width="25%">{{item.data2}}</td>
					<td width="25%" class="haved">{{item.data3}}</td>
					<td width="25%" class="nohaved">{{item.data4}}</td>
				</tr>
			</table>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					data1: '08:00',
					data2: '13',
					data3: '8',
					data4: '5',
				},{
					data1: '08:00',
					data2: '13',
					data3: '8',
					data4: '5',
				},{
					data1: '08:00',
					data2: '13',
					data3: '8',
					data4: '5',
				},{
					data1: '08:00',
					data2: '13',
					data3: '8',
					data4: '5',
				},{
					data1: '08:00',
					data2: '13',
					data3: '8',
					data4: '5',
				},{
					data1: '08:00',
					data2: '13',
					data3: '8',
					data4: '5',
				}]
			}
		}
	}
</script>

<style lang="scss">
	.devicePage {
		.nav-list {
			display: flex;
			border-bottom: 1px solid #ddd;
			padding: 1.5rem 0;
			.nav {
				width: 50%;
				display: flex;
				justify-content: space-evenly;
				flex-direction: column;
				align-items: center;
				.zll-button {
					font-size: 1.2rem;
					width: 6.4rem;
					height: 2.4rem;
					line-height: 2.4rem;
					border-radius: 1.2rem;
					margin-right: 1rem;
					color: #FFFFFF;
					background: #bfbfbf;
					text-align: center;
				}
				.nav-part {
					display: flex;
					width: 80%;
					margin-bottom: 3rem;
					.weixiu {
						width: 6.4rem;
						margin-right: 1rem;
						text-align: center;
						border: 1px dashed #bfbfbf;
						height: 2.2rem;
						line-height: 2.2rem;
						color: #888888;
					}
					.device_img {
						width: 4.8rem;
						height: 4.8rem;
						margin-right: 1rem;
						padding: 0.8rem;
					}
					.num {
						width: calc(100% - 8.4rem);
						display: flex;
						flex-direction: column;
						justify-content: space-evenly;
						align-items: center;
						.number {
							text-align: center;
							color: $main-title-color;
							font-size: 1.6rem;
						}
						.txt {
							text-align: center;
							color: #999;
							&.run {
								color: $button-run;
							}
							&.stop {
								color: $button-stop;
							}
							&.bj {
								color: $button-bj;
							}
							&.gj {
								color: $button-gj;
							}
						}
					}
				}
				&.nav2 {
					width: 40%;
					padding-left: 10%;
					.nav-part {
						margin-bottom: 1rem;
						.zll-button {
							height: 2.2rem;
							line-height: 2.2rem;
							&.run {
								background: $button-run;
							}
							&.stop {
								background: $button-stop;
							}
							&.bj {
								background: $button-bj;
							}
							&.gj {
								background: $button-gj;
							}
						}
					}
				}
			}
		}
		.table-nav {
			padding: 1.5rem 0;
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
						&.haved {
							color: $uni-color-success;
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
