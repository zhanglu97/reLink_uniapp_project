<template>
	<view class="listPage">
		<view class="noData"  v-if="listData.length == 0">
			<text>暂无数据</text>
		</view>
		<view class="nav" v-else v-for="(item,index) in listData" @click="goDetail(item)">
			<view class="left">
				<text class="bm">{{item.data1}}</text>
				<view class="txt">
					<text class="item1">{{item.data2}}</text>
					<text class="item2">{{item.data3}}</text>
					<text>{{item.data4}}</text>
					<text>{{item.data5}}</text>
				</view>
				<view class="txt">
					<text class="item1">{{item.data6}}</text>
					<text class="item2">{{item.data7}}</text>
				</view>
			</view>
			<view class="right">
				<text :class="{'wait':item.data8 == '待处理','on':item.data8 == '处理中','ing':item.data8 == '维修中'}">
					{{item.data8}}
				</text>
			</view>
			<view class="clearBoth"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			listData: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			goDetail(val) {
				uni.navigateTo({
				    url: '/pages/repairPage/detail?detailData=' + encodeURIComponent(JSON.stringify(val)),
				});
			}
		}
	}
</script>

<style lang="scss">
	.listPage {
		.noData {
			text-align: center;
			margin-top: 0.5rem;
			padding: 1rem;
			color: #888888;
		}
		.nav {
			background: #FFFFFF;
			border-top: 1px solid #eeeeee;
			padding: 1rem;
			.left {
				width: calc(100% - 6rem);
				float: left;
				.bm {
					color: $main-title-color;
				}
				.txt {
					color: #888888;
					margin-top: 0.4rem;
					font-size: 1.2rem;
					text {
						margin-right: 0.5rem;
						&.item1 {
							width: 6rem;
							display: inline-block;
						}
					}
				}
			}
			.right {
				width: 6rem;
				float: right;
				text-align: right;
				text {
					color: #888888;
					&.wait {
						color: $repair-wait;
					}
					&.on {
						color: $repair-on;
					}
					&.ing {
						color: $repair-ing;
					}
				}
			}
		}
	}
</style>
