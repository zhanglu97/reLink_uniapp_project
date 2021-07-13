<template>
	<view class="deviceList">
		<nav-header title="设备列表" leftIcon="back" :rightIcon="rightIcon" @getclickRight="getclickRight"></nav-header>
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
					<tr v-for="(item,index) in listData" @click="goDetail(item)">
						<td width="20%">{{item.data1}}</td>
						<td width="15%">{{item.data2}}</td>
						<td width="40%">{{item.data3}}</td>
						<td width="15%">{{item.data4}}</td>
					</tr>
				</table>
			</view>
			<view class="list-img" v-if="!isList">
				<view class="list">
					<view class="list_nav" v-for="(item, index) in listData" @click="goDetail(item)">
						<view class="left_img">
							<image class="imgUrl" :src="item.imgUrl" mode="aspectFit"></image>
						</view>
						<view class="right_list">
							<view class="nav">
								<text class="nav-name">区位：</text>
								<view class="nav-de">{{item.data1}}</view>
							</view>
							<view class="nav">
								<text class="nav-name">名称：</text>
								<view class="nav-de">{{item.name}}</view>
							</view>
							<view class="nav">
								<text class="nav-name">在产：</text>
								<view class="nav-de"></view>
							</view>
							<view class="nav">
								<text class="nav-name">状态：</text>
								<view class="nav-de" :class="{'run':item.data2 == '运行','stop':item.data2 == '停机','bj':item.data2 == '报警','gj':item.data2 == '关机',}">{{item.data2}}</view>
							</view>
						</view>
						<view class="clearBoth"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navHeader from "@/components/navHeader.vue"
	export default {
		components: {
			navHeader
		},
		data() {
			return {
				rightIcon: 'settings',
				isList: true,
				listData: [{
					name: '车削加工中心',
					data1: '1#车间 J1',
					data2: '运行',
					data3: 'P2101455 三角支架',
					data4: '120/55',
					imgUrl: require('../../../static/img/shebei.png')
				},{
					name: '车削加工中心',
					data1: '1#车间 J1',
					data2: '运行',
					data3: 'P2101455 三角支架',
					data4: '120/55',
					imgUrl: require('../../../static/img/shebei.png')
				},{
					name: '车削加工中心',
					data1: '1#车间 J1',
					data2: '关机',
					data3: '',
					data4: '',
					imgUrl: require('../../../static/img/shebei.png')
				},{
					name: '车削加工中心',
					data1: '1#车间 J1',
					data2: '报警',
					data3: 'P2101455 三角支架',
					data4: '120/35',
					imgUrl: require('../../../static/img/shebei.png')
				},{
					name: '车削加工中心',
					data1: '1#车间 J1',
					data2: '停机',
					data3: 'P2101455 三角支架',
					data4: '120/4',
					imgUrl: require('../../../static/img/shebei.png')
				}]
			}
		},
		methods: {
			getclickRight(val) {
				this.isList = !this.isList
				if(this.isList) {
					this.rightIcon = 'settings'
				}else {
					this.rightIcon = 'list'
				}
			},
			goDetail(data) {
				uni.navigateTo({
					url:"/pages/DevicePage/deviceList/listNav?detailData="+JSON.stringify(data)
				})
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
			padding-top: 9rem;
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
			.list-img {
				.list {
					.list_nav {
						padding: 1rem;
						width: calc(100% - 2rem);
						background-color: #FFFFFF;
						border-top: 1px solid #ededed;
						.left_img {
							float: left;
							width: 10rem;
							.imgUrl {
								width: 100%;
								height: 11rem;
							}
						}
						.right_list {
							float: left;
							width: calc(100% - 11rem);
							font-size: 1.2rem;
							padding-left: 1rem;
							.nav {
								position: relative;
								height: 3rem;
								line-height: 3rem;
								display: flex;
								.nav-name {
									color: #888888;
									width: 6rem;
									text-align: right;
								}
								.nav-de {
									text-align: center;
									width: calc(100% - 6rem);
									&.run {
										color: #FFFFFF;
										background-color: $button-run;
										border-radius: 2rem;
										height: 2rem;
										line-height: 2rem;  
										margin: 0.5rem auto 1px;
										max-width: 8rem;
									}
									&.stop {
										color: #FFFFFF;
										background-color: $button-stop;
										border-radius: 2rem;
										height: 2rem;
										line-height: 2rem;
										margin: 0.5rem auto 1px;
										max-width: 8rem;
									}
									&.bj {
										color: #FFFFFF;
										background-color: $button-bj;
										border-radius: 2rem;
										height: 2rem;
										line-height: 2rem;
										margin: 0.5rem auto 1px;
										max-width: 8rem;
									}
									&.gj {
										color: #FFFFFF;
										background-color: $button-gj;
										border-radius: 2rem;
										height: 2rem;
										line-height: 2rem;
										margin: 0.5rem auto 1px;
										max-width: 8rem;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
