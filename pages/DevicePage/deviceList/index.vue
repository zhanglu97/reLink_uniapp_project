<template>
	<view class="deviceList">
		<uni-nav-bar left-icon="back" :rightIcon="rightIcon" title="设备列表" backgroundColor="#34bfc6" color="#ffffff" @clickLeft="clickLeft"  @clickRight="clickRight"></uni-nav-bar>
		<view class="top_total">
			<view class="nav-de">
				<text class="name">总数</text>
				<text class="num">7</text>
			</view>
			<view class="nav-de">
				<text class="name">运行</text>
				<text class="num run">4</text>
			</view>
			<view class="nav-de">
				<text class="name">停机</text>
				<text class="num stop">1</text>
			</view>
			<view class="nav-de">
				<text class="name">报警</text>
				<text class="num bj">1</text>
			</view>
			<view class="nav-de">
				<text class="name">关机</text>
				<text class="num gj">1</text>
			</view>
			<view class="clearBoth"></view>
		</view>
		<view class="device_all">
			<view class="list-table" v-if="isList">
				<table>
					<tr>
						<th width="20%">区位</th><th width="15%">状态</th><th width="40%">名称</th><th width="15%">今日产量</th>
					</tr>
					<tr v-for="(item,index) in listData">
						<td width="20%">{{item.data1}}</td>
						<td width="15%">{{item.data2}}</td>
						<td width="40%">{{item.data3}}</td>
						<td width="15%">{{item.data4}}</td>
					</tr>
				</table>
			</view>
			<view class="list-img" v-if="!isList">
				2
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rightIcon: 'settings',
				isList: true,
				listData: [{
					data1: '1#车间 J1',
					data2: '运行',
					data3: 'P2101455 三角支架',
					data4: '120/55',
					img: require('../../../static/img/shebei.png')
				},{
					data1: '1#车间 J1',
					data2: '运行',
					data3: 'P2101455 三角支架',
					data4: '120/55',
					img: require('../../../static/img/shebei.png')
				},{
					data1: '1#车间 J1',
					data2: '关机',
					data3: '',
					data4: '',
					img: require('../../../static/img/shebei.png')
				},{
					data1: '1#车间 J1',
					data2: '报警',
					data3: 'P2101455 三角支架',
					data4: '120/35',
					img: require('../../../static/img/shebei.png')
				},{
					data1: '1#车间 J1',
					data2: '停机',
					data3: 'P2101455 三角支架',
					data4: '120/4',
					img: require('../../../static/img/shebei.png')
				}]
			}
		},
		methods: {
			clickLeft() {
				uni.switchTab({
				    url: '/pages/DevicePage/index',
				});
			},
			clickRight() {
				this.isList = !this.isList
				if(this.isList) {
					this.rightIcon = 'settings'
				}else {
					this.rightIcon = 'list'
				}
			}
		}
	}
</script>

<style lang="scss">
	.deviceList {
		min-height: 100vh;
		background: #efefef;
		.top_total {
			background: #FFFFFF;
			margin-bottom: 0.5rem;
			.nav-de {
				float: left;
				width: 20%;
				text-align: center;
				height: 4rem;
				line-height: 4rem;
				.name {
					color: #888888;
					margin-right: 0.5rem;
				}
				.num {
					font-weight: 600;
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
		.device_all {
			background: #FFFFFF;
			.list-table {
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
						height: 4rem;
						line-height: 4rem;
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
							
						}
					}
				}
			}
		}
	}
</style>
