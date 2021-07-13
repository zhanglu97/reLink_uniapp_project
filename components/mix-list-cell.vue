<template>
	<view class="content">
		<view class="mix-list-cell" :class="border" @click="eventClick" hover-class="cell-hover" :hover-stay-time="50">
			<uni-icons v-if="icon" class="cell-icon yticon" :type="icon" size="20upx" :color="iconColor"></uni-icons>
			<i v-if="fontIcon" class="iconfont" :class="fontIcon" :style="{'color': iconColor}"></i>
			<image v-if="imgIcon" :src="imgIcon" mode="" class="imgicon"></image>
			<text class="cell-tit clamp">{{title}}</text>
			<text v-if="tips" class="cell-tip">{{tips}}</text>
			<text class="cell-more yticon" :class="typeList[navigateType]"></text>
			<uni-icons type="arrowright" size="20upx"></uni-icons>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList: {
					left: 'icon-zuo',
					right: 'icon-you',
					up: 'icon-shang',
					down: 'icon-xia'
				},
			}
		},
		props: {
			icon: {
				type: String,
				default: ''
			},
			fontIcon: {
				type: String,
				default: ''
			},
			imgIcon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '标题'
			},
			tips: {
				type: String,
				default: ''
			},
			navigateType: {
				type: String,
				default: 'right'
			},
			border: {
				type: String,
				default: 'b-b'
			},
			hoverClass: {
				type: String,
				default: 'cell-hover'
			},
			iconColor: {
				type: String,
				default: '#333'
			}
		},
		methods: {
			eventClick() {
				this.$emit('eventClick');
			}
		},
	}
</script>

<style lang='scss'>
	.icon .mix-list-cell.b-b:after {
		left: 90upx;
	}
	.iconfont.jt {
		color: #dbdbdb;
	}
	.mix-list-cell {
		display: flex;
		align-items: baseline;
		padding: 1rem;
		line-height: 3rem;
		position: relative;
		align-items: center;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		.cell-icon {
			align-self: center;
			width: 2.8rem;
			max-height: 3rem;
			font-size: 1.6rem;
		}

		.cell-more {
			align-self: center;
			font-size: 1.5rem;
			color: $font-color-base;
			margin-left: 1rem;
		}

		.cell-tit {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
			margin-right: 0.5rem;
			margin-left: 1rem;
		}

		.cell-tip {
			font-size: $font-sm+2upx;
			color: $font-color-light;
		}
		.imgicon {
			width: 1.6rem;
			height: 1.6rem;
		}
	}
</style>
