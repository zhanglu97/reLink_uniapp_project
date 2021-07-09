<template>
	<view class="HomePage">
		<view class="rightTop-urgency">
			<button type="warn" size="mini" class="urgency_button" @click="goRepair">
				<i class="iconfont icon-jinji"></i> 紧急报修
			</button>
		</view>
		<view class="NoticeBar">
			<uni-notice-bar class="zll-notice-bar" showClose="true" text="你的报修已接收"你的报修已接收></uni-notice-bar>
		</view>
		<view class="MainBody">
			<view class="ad-banner">
				<image class="bannerImage" src="../../static/img/ad-banner.jpg" mode=""></image>
			</view>
			<view class="tab-list">
				<uni-segmented-control :current="current" :values="tabItems" styleType="text" activeColor="#34bfc6" @clickItem="onClickItem"></uni-segmented-control>
				<view class="content">
					<view v-show="current === 0" @click="goPage">
						<device-page></device-page>
					</view>
					<view v-show="current === 1">
						<alarm-page></alarm-page>
					</view>
					<view v-show="current === 2">
						<repair-page></repair-page>
					</view>
					<view v-show="current === 3">
						<maintain-page></maintain-page>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import devicePage from "@/components/modulePage/devicePage.vue"
	import alarmPage from "@/components/modulePage/alarmPage.vue"
	import repairPage from "@/components/modulePage/repairPage.vue"
	import maintainPage from "@/components/modulePage/maintainPage.vue"
	export default {
		components: {
			devicePage,alarmPage,repairPage,maintainPage
		},
		data() {
			return {
				current: 0,
				tabItems: ['设备','报警','报修','保养',]
			}
		},
		methods: {
			onClickItem(val) {
				this.current = val.currentIndex
			},
			goRepair() {
				uni.navigateTo({
				    url: '/pages/repairPage/repair',
				});
			},
			goPage() {
				uni.switchTab({
				    url: '/pages/DevicePage/index',
				});
			}
		}
	}
</script>

<style lang="scss">
	.HomePage {
		position: relative;
		.rightTop-urgency {
			background: $main-title-color;
			height: 4.4rem;
			padding: 0 1rem;
			position: fixed;
			width: calc(100% - 2rem);
			z-index: 1111;
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
				.iconfont {
					margin-right: 0.2rem;
				}
			}
		}
		.NoticeBar {
			padding-top: 4.4rem;
		}
		.MainBody {
			.ad-banner {
				height: 15rem;
				.bannerImage {
					width: 100%;
					height: 100%;
				}
			}
			.tab-list {
				padding: 1rem;
				.content {
					
				}
			}
		}
	}
</style>
