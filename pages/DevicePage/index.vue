<template>
	<view class="DevicePage">
		<view class="MainBody">
			<device-page></device-page>
		</view>
		<view class="device_list">
			<view class="item" @click="goPage('/pages/DevicePage/deviceList/index')">
				<list-cell imgIcon="../../static/img/device-icon1.png" iconColor="#347eeb" title="设备列表"></list-cell>
			</view>
			<view class="item" @click="goPage('/pages/DevicePage/spotCheck/index')">
				<list-cell imgIcon="../../static/img/device-icon2.png" iconColor="#4caf50" title="点检"></list-cell>
			</view>
			<view class="item" @click="goPage('/pages/DevicePage/giveAlarm/index')">
				<list-cell imgIcon="../../static/img/device-icon3.png" iconColor="#ff5722" title="报警记录"></list-cell>
			</view>
			<view class="item" @click="goPage('/pages/DevicePage/recordLog/index')">
				<list-cell imgIcon="../../static/img/device-icon4.png" iconColor="#03a9f4" title="维修记录"></list-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import devicePage from "@/components/modulePage/devicePage.vue"
	import listCell from '@/components/mix-list-cell'
	export default {
		components: {
			devicePage,listCell,
		},
		data() {
			return {
				
			}
		},
		methods: {
			goPage(data) {
				uni.navigateTo({
					url: data
				})
			},
		}
	}
</script>

<style lang="scss">
	.DevicePage {
		position: relative;
		.MainBody {
			padding: 0 1rem;
			border-bottom: 5px solid #EEEEEE;
		}
		.device_list {
			.item {
				border-bottom: 1px solid #EEEEEE;
				padding: 0 1rem;
			}
		}
	}
</style>
