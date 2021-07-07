<template>
	<view class="locationData">
		<view class="location" @click="test">{{latitude}}°E <text>/</text> {{longitude}}°W</view>
		<view class="location">江苏省南京市江宁区天印大道1555号多伦科技有限公司</view>
		<map style="width: 100%;height: 200px;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				id:0, // 使用 marker点击事件 需要填写id
	            latitude: 31.930647,
	            longitude: 118.874762,
				markers: [],
	        }
	    },
	    methods: {
			test() {
				let that = this
				var venue = [{
					id:0,
					latitude: 31.930647,
					longitude: 118.874762,
					iconPath: require("../../../static/img/iconP.png"),
				}];
				that.markers = venue;
			}
		},
		mounted() {
			this.test()
		}
	}
</script>

<style lang="scss" scoped>
	.locationData {
		.location {
			font-size: $font-base;
			color: $uni-color-primary;
			margin-bottom: 20upx;
			text {
				margin: 0 20upx;
			}
		}
	}
</style>
