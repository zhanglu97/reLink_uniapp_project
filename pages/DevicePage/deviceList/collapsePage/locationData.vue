<template>
	<view class="locationData">
		<table>
			<tr>
				<td class="nav">注册日期</td>
				<td>2020-12-15</td>
			</tr>
			<tr>
				<td class="nav">状态</td>
				<td>在用</td>
			</tr>
			<tr>
				<td class="nav">睿采智连终端码</td>
				<td>RC20120282</td>
			</tr>
			<tr>
				<td class="nav">Mac</td>
				<td>5C-ED-22-B3-9U-S0</td>
			</tr>
			<tr>
				<td class="nav">经纬度</td>
				<td>{{latitude}}°E <text> / </text> {{longitude}}°W</td>
			</tr>
		</table>
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
					iconPath: require("../../../../static/img/iconP.png"),
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
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			empty-cells: show;
			margin-bottom: 1rem;
			tr {
				font-size: $font-sm;
				margin: 0;
				overflow: visible;
				height: 3rem;
				line-height: 3rem;
				border: 1px solid #f2f2f2;
				td {
					text-align: center;
					&.nav {
						background-color: #d1dcef;
						color: #888;
					}
				}
			}
		}
	}
</style>
