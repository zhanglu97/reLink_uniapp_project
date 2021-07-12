<template>
	<view class="listNav-shebei">
		<view class="list">
			<view class="list_nav">
				<view class="left_img">
					<image class="imgUrl" :src="detailData.imgUrl" mode="aspectFit"></image>
				</view>
				<view class="right_list">
					<view class="nav">
						<text class="nav-name">区位：</text>
						<view class="nav-de">{{detailData.data1}}</view>
					</view>
					<view class="nav">
						<text class="nav-name">名称：</text>
						<view class="nav-de">{{detailData.name}}</view>
					</view>
					<view class="nav">
						<text class="nav-name">在产：</text>
						<view class="nav-de">{{detailData.data3}} {{detailData.data4}}</view>
					</view>
					<view class="nav">
						<text class="nav-name">状态：</text>
						<view class="nav-de" :class="{'run':detailData.data2 == '运行','stop':detailData.data2 == '停机','bj':detailData.data2 == '报警','gj':detailData.data2 == '关机',}">{{detailData.data2}}</view>
					</view>
				</view>
				<view class="clearBoth"></view>
			</view>
		</view>
		
		<view class="collapse_list">
			<uni-collapse accordion="true" @change="changeNav">
			    <uni-collapse-item title="实时数据" thumb="../../../static/img/dataimg.png">
			        <view style="padding: 20rpx;">
			            <real-time-data></real-time-data>
			        </view>
			    </uni-collapse-item>
			    <uni-collapse-item title="时间统计" thumb="../../../static/img/time.png" >
			        <view style="padding: 20rpx;">
			            <run-time></run-time>
			        </view> 
			    </uni-collapse-item>
			    <uni-collapse-item title="报警记录" thumb="../../../static/img/warning.png">
			        <view style="padding: 20rpx;">
			            <alarm-record></alarm-record>
			        </view>
			    </uni-collapse-item>
			    <uni-collapse-item title="点检维保" thumb="../../../static/img/weixiu.png">
			        <view style="padding: 20rpx;">
			            <maintain></maintain>
			        </view>
			    </uni-collapse-item>
			    <uni-collapse-item title="注册与定位" thumb="../../../static/img/dingwei.png">
			        <view style="padding: 20rpx;">
			           <location-data v-if="showMap"></location-data>
			        </view>
			    </uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
import runTime from "./collapsePage/runTime.vue"
import realTimeData from "./collapsePage/realTimeData.vue"
import alarmRecord from "./collapsePage/alarmRecord.vue"
import maintain from "./collapsePage/maintain.vue"
import locationData from "./collapsePage/locationData.vue"
export default {
	components: {
		runTime, realTimeData, alarmRecord, maintain, locationData
	},
	data() {
		return {
			detailData: {},
			showMap: false,
			latitude: 34.79977,//纬度
			longitude: 113.66072,//经度
		}
	},
	onLoad(option) {
		this.detailData = JSON.parse(option.detailData)
	},
	methods: {
		goBack() {
			uni.switchTab({
				url:"/pages/FirstPage/index"
			})
		},
		changeNav(e) {
			var _this = this
			if(e[0] == 4) {
				setTimeout(function() {
					_this.showMap = true
			   }, 500)
			}else {
				this.showMap = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/static/style/common.scss";
</style>
