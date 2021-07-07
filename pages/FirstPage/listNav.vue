<template>
	<view class="listNav-shebei">
		<!-- <view class="header">
			<view class="header_login">
				<view class="goback" @click="goBack()">
					<my-icon type="back" size="18px" color="#FFFFFF"></my-icon>
				</view>
				<text class="title">设备实时运行一览</text>
			</view>
		</view> -->
		
		<view class="list">
			<view class="list_nav">
				<view class="left_img">
					<image class="imgUrl" :src="detailData.imgUrl" mode="aspectFit"></image>
				</view>
				<view class="right_list">
					<view class="nav">
						<text class="nav-name">当前状态：</text>
						<view class="nav-de" :class="{'jg':detailData.state == '加工','tj':detailData.state == '停机','bj':detailData.state == '报警',}">{{detailData.state}}</view>
					</view>
					<view class="nav">
						<text class="nav-name">设备名称：</text>
						<view class="nav-de">{{detailData.name}}</view>
					</view>
					<view class="nav">
						<text class="nav-name">设备编号：</text>
						<view class="nav-de">{{detailData.bh}}</view>
					</view>
					<view class="nav">
						<text class="nav-name">今日加工：</text>
						<view class="nav-de">{{detailData.today}}</view>
					</view>
				</view>
				<view class="clearBoth"></view>
			</view>
		</view>
		
		<view class="collapse_list">
			<uni-collapse accordion="true" @change="changeNav">
			    <uni-collapse-item title="运行时间" thumb="../../static/img/time.png" >
			        <view style="padding: 20rpx;">
			            <run-time></run-time>
			        </view> 
			    </uni-collapse-item>
			    <uni-collapse-item title="实时数据" thumb="../../static/img/dataimg.png">
			        <view style="padding: 20rpx;">
			            <real-time-data></real-time-data>
			        </view>
			    </uni-collapse-item>
			    <uni-collapse-item title="报警记录" thumb="../../static/img/warning.png">
			        <view style="padding: 20rpx;">
			            <alarm-record></alarm-record>
			        </view>
			    </uni-collapse-item>
			    <uni-collapse-item title="维护保养" thumb="../../static/img/weixiu.png">
			        <view style="padding: 20rpx;">
			            <maintain></maintain>
			        </view>
			    </uni-collapse-item>
			    <uni-collapse-item title="定位数据" thumb="../../static/img/dingwei.png">
			        <view style="padding: 20rpx;">
			           <location-data v-if="showMap"></location-data>
			        </view>
			    </uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
import myIcon from "@/components/uni/my-icon/my-icon.vue"
import uniCollapse from "@/components/uni/uni-collapse/uni-collapse.vue"
import uniCollapseItem from "@/components/uni/uni-collapse-item/uni-collapse-item.vue"
import runTime from "./collapsePage/runTime.vue"
import realTimeData from "./collapsePage/realTimeData.vue"
import alarmRecord from "./collapsePage/alarmRecord.vue"
import maintain from "./collapsePage/maintain.vue"
import locationData from "./collapsePage/locationData.vue"
export default {
	components: {
		myIcon, uniCollapse, uniCollapseItem, runTime, realTimeData, alarmRecord, maintain, locationData
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
