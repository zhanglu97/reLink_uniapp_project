<template>
	<view class="runTime">
		<view class="leftNav">
			<view class="item">
				<view class="bt run">运行</view>
				<view class="time run">
					<text>1109 时 15 分</text>
				</view>
			</view>
			<view class="item">
				<view class="bt stop">停机</view>
				<view class="time stop">
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
				color: ['#67c23a','#e6a23c','#f56c6c','#909399'],
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
							{value: 1048, name: '运行'},
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

				&.run {
					background-color: $button-run;
				}

				&.stop {
					background-color: $button-stop;
				}

				&.bj {
					background-color: $button-bj;
				}

				&.gj {
					background-color: $button-gj;
				}
			}

			.time {
				font-size: $font-base;
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
