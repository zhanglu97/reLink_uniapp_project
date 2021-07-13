<template>
	<view class="AlarmPage">
		<view class="listPage">
			<view class="noData"  v-if="listData.length == 0">
				<text>暂无数据</text>
			</view>
			<view class="nav" v-else v-for="(item,index) in listData" >
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
				<view class="clearBoth"></view>
			</view>
		</view>
		<tabBar currentPage="/pages/AlarmPage/index"></tabBar>
	</view>
</template>

<script>
	import tabBar from "@/components/tabBar.vue"
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				listData: [
					{ data1: '列表', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
					{ data1: '列表', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
				],
			}
		},
		onLoad() {

		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
	.AlarmPage {
		min-height: 100vh;
		background-color: $background-color;
		.listPage {
			.noData {
				text-align: center;
				margin-top: 0.5rem;
				padding: 1rem;
				color: #888888;
			}
			.nav {
				background: #FFFFFF;
				border-bottom: 1px solid #EEEEEE;
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
			}
		}
	}
</style>
