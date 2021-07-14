<template>
	<view class="HomePage">
		<nav-header title="" :isUrgency="true"></nav-header>
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
					<view v-show="current === 0" @click="goPage('/pages/DevicePage/index')">
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
		<tabBar currentPage="/pages/HomePage/index"></tabBar>
	</view>
</template>

<script>
	import tabBar from "@/components/tabBar.vue"
	import navHeader from "@/components/navHeader.vue"
	import devicePage from "@/components/modulePage/devicePage.vue"
	import alarmPage from "@/components/modulePage/alarmPage.vue"
	import repairPage from "@/components/modulePage/repairPage.vue"
	import maintainPage from "@/components/modulePage/maintainPage.vue"
	export default {
		components: {
			tabBar,navHeader,devicePage,alarmPage,repairPage,maintainPage
		},
		data() {
			return {
				navbarHeight: 0,
				current: 0,
				tabItems: ['设备','报警','报修','保养',]
			}
		},
		methods: {
			onClickItem(val) {
				this.current = val.currentIndex
			},
			goPage(val) {
				uni.navigateTo({
				    url: val,
				});
			}
		}
	}
</script>

<style lang="scss">
	.HomePage {
		position: relative;
		min-height: 100vh;
		background-color: #f2f2f2;
		.NoticeBar {
			padding-top: 8.8rem;
		}
		.MainBody {
			background: #FFFFFF;
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
