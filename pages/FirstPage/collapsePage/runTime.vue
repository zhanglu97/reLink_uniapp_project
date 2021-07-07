<template>
	<view class="runTime">
		<view class="leftNav">
			<view class="item">
				<view class="bt jg">加工</view>
				<view class="time jg">
					<text>1109 时 15 分</text>
				</view>
			</view>
			<view class="item">
				<view class="bt tj">停机</view>
				<view class="time tj">
					<text>311 时 22 分</text>
				</view>
			</view>
			<view class="item">
				<view class="bt bj">报警</view>
				<view class="time bj">
					<text>17 时 03 分</text>
				</view>
			</view>
			<view class="item">
				<view class="bt gj">关机</view>
				<view class="time gj">
					<text>33 时 51 分</text>
				</view>
			</view>
		</view>
		<view class="rightNav">
			<echarts :option="option" style="height: 150px;"></echarts>
		</view>
	</view>
</template>

<script>
import echarts from '@/components/echarts/echarts.vue'

export default {
	data() {
		return {
			option: {
				color: ['#4cd964','#f0ad4e','#dd524d','#909399'],
				series: [
					{
						name: '',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '14',
							}
						},
						labelLine: {
							show: false
						},
						data: [
							{value: 1048, name: '加工'},
							{value: 735, name: '停机'},
							{value: 580, name: '报警'},
							{value: 484, name: '关机'},
						]
					}
				]
			},
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.runTime {
	.leftNav {
		float: left;
		width: calc(100% - 300upx);

		.item {
			display: flex;
			height: 80upx;
			line-height: 80upx;

			.bt {
				font-size: $font-sm;
				color: #FFFFFF;
				width: 120upx;
				height: 48upx;
				line-height: 48upx;
				margin-top: 16upx;
				border-radius: 40upx;
				margin-right: 20upx;
				text-align: center;

				&.jg {
					background-color: $uni-color-success;
				}

				&.tj {
					background-color: $uni-color-warning;
				}

				&.bj {
					background-color: $uni-color-error;
				}

				&.gj {
					background-color: $uni-color-close;
				}
			}

			.time {
				font-size: $font-base;

				&.jg {
					color: $uni-color-success;
				}

				&.tj {
					color: $uni-color-warning;
				}

				&.bj {
					color: $uni-color-error;
				}

				&.gj {
					color: $uni-color-close;
				}
			}
		}
	}

	.rightNav {
		float: left;
		width: 300upx;
		height: 300upx;
		.echart {
			width: 300upx;
			height: 300upx;
		}
	}
}
</style>
