<template>
	<view class="navHeader"  :style="{background: backgroundColor}">
		<view class="tabs" :style="{height: navbarHeight + 'px'}"></view>
		<uni-nav-bar :title="title" :backgroundColor="backgroundColor" color="#ffffff" v-if="title == '设备列表'" id="navbar"
			:leftIcon="leftIcon" :rightIcon="rightIcon"  @clickLeft="clickLeft"  @clickRight="clickRight"
		></uni-nav-bar>
		
		<uni-nav-bar :title="title" :backgroundColor="backgroundColor" :color="color" v-else id="navbar" :leftIcon="leftIcon"  @clickLeft="clickLeft2">
			<button type="warn" size="mini" class="urgency_button" @click="goRepair" v-if="isUrgency">
				<image src="../static/img/jinji.png" mode="" class="iconfont"></image> 紧急报修
			</button>
		</uni-nav-bar>
		
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: 'settings'
			},
			color: {
				type: String,
				default: '#ffffff'
			},
			backgroundColor: {
				type: String,
				default: '#34bfc6'
			},
			isUrgency: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				navbarHeight: 0,
			}
		},
		methods: {
			goRepair() {
				uni.navigateTo({
				    url: '/pages/repairPage/repair',
				});
			},
			clickLeft() {
				uni.navigateTo({
				    url: '/pages/DevicePage/index',
				});
			},
			clickLeft2() {
				this.$emit("getclickLeft");
			},
			clickRight() {
				this.$emit("getclickRight");
			}
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#navbar').boundingClientRect(data => {
			  this.navbarHeight = data.height
			}).exec();
		}
	}
</script>

<style lang="scss">
	.navHeader {
		position: fixed;
		width: 100%;
		z-index: 11111;
		.tabs {
			position: sticky;
			z-index: 999;
		}
		.urgency_button {
			font-size: 1.2rem;
			height: 2.6rem;
			line-height: 2.6rem;
			float: right;
			border-radius: 1.5rem;
			margin-top: 0.8rem;
			padding: 0 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			right: 1rem;
			bottom: 1rem;
			.iconfont {
				margin-right: 0.2rem;
				width: 1.6rem;
				height: 1.6rem;
			}
		}
	}
</style>
