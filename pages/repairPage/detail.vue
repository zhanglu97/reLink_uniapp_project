<template>
	<view class="repairDetail">
		<view class="list">
			<text class="name">服务单号</text>
			<text class="value">{{detailData.data1}}</text>
			<text class="state" :class="{'wait':detailData.state == '待处理','on':detailData.state == '处理中','ing':detailData.state == '维修中'}">
				{{detailData.state}}
			</text>
		</view>
		<view class="list">
			<text class="name">客户名称</text>
			<text class="value">{{detailData.data2}}</text>
		</view>
		<view class="list">
			<text class="name">报修人</text>
			<text class="value">{{detailData.data3}}</text>
		</view>
		<view class="list">
			<text class="name">设备名称</text>
			<text class="value">{{detailData.data4}}</text>
		</view>
		<view class="list">
			<text class="name">设备型号</text>
			<text class="value">{{detailData.data5}}</text>
		</view>
		<view class="list">
			<text class="name">问题描述</text>
			<view class="value">{{detailData.data6}}</view>
		</view>
		<view class="list">
			<text class="name">现场图片</text>
			<view class="value">
				<image class="imgxianchang" v-for="(item,index) in detailData.data7" :src="item.img" mode=""></image>
			</view>
		</view>
		<view class="list">
			<text class="name">报修日期</text>
			<text class="value">{{detailData.data8}}</text>
		</view>
		<view class="list exceed">
			<text class="name">处理日期</text>
			<text class="value">{{detailData.data9}}</text>
			<text class="out"> 超期</text>
		</view>
		<view class="list">
			<text class="name">完成日期</text>
			<text class="value">{{detailData.data10}}</text>
		</view>
		<view class="list">
			<text class="name">技术支持</text>
			<text class="value">{{detailData.data11}} {{detailData.phone}}</text>
			<view class="button">
				<uni-icons class="cl" type="phone" size="20" color="#f56c6c" @click="goPhone"></uni-icons>
				<uni-icons type="chat" size="20" color="#2196f3" @click="goChat"></uni-icons>
			</view>
		</view>
		<view class="list">
			<text class="name">服务轨迹</text>
			<view class="value">
				<uni-steps :options="detailData.options"  direction="column" :active="0" active-color="#34bfc6"></uni-steps>
			</view>
		</view>
		<view class="clearBoth"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailData:{
					state: '',
					data1:'',
					data2:'',
					data3:'',
					data4:'',
					data5:'',
					data6:'导轨行进1/3不禁吓下列公安的啊情况导致开不了机',
					data7:[
						{img: require("../../static/img/ad-banner.jpg")},
						{img: require("../../static/img/ad-banner.jpg")},
						{img: require("../../static/img/ad-banner.jpg")},
					],
					data8:'2021-03-12 12:15:43',
					data9:'2021-03-12 12:46:22',
					data10:'',
					data11:'徐茂斌',
					phone: '18998905566',
					options: [
						{title: '你的服务已接收【 工程师：陶开军，手机：13305213313 】，他会尽快与您联系，请稍等。',desc:'2021-03-15 15:55'},
						{title: '客户发起 F2103120092 服务需求。 ',desc:'2021-03-15 15:37'},
					]
				},
			}
		},
		methods: {
			onLoad(option){
				if(option.detailData) {
					const detailData = JSON.parse(decodeURIComponent(option.detailData));
					this.detailData.state = detailData.data8
					this.detailData.data1 = detailData.data1
					this.detailData.data2 = detailData.data2
					this.detailData.data3 = detailData.data6
					this.detailData.data4 = detailData.data4
					this.detailData.data5 = detailData.data5
				}
			},
			goPhone() {
				uni.makePhoneCall({
				    phoneNumber: this.detailData.phone 
				});
			},
			goChat() {
				uni.navigateTo({
					url: '/pages/ChatRoom/Home/home'
				})
			}
		}
	}
</script>

<style lang="scss">
	.repairDetail {
		padding: 2rem 2rem;
		.list {
			line-height: 4rem;
			float: left;
			width: 100%;
			position: relative;
			.name {
				float: left;
				width: 8rem;
				color: #888888;
			}
			.value {
				float: left;
				width: calc(100% - 8rem);
				min-width: 15rem;
				.imgxianchang {
					width: 30%;
					max-width: 20rem;
					max-height: 6rem;
					float: left;
					margin: 1rem 1.5%;
				}
			}
			.state {
				position: absolute;
				right: 0;
				color: #888888;
				&.wait {
					color: $repair-wait;
				}
				&.on {
					color: $repair-on;
				}
				&.ing {
					color: $repair-ing;
				}
			}
			&.exceed {
				.value {
					color: #fa436a;
					width: calc(100% - 20rem);
				}
			}
			.out {
				color: #fa436a;
				float: left;
			}
			.button {
				position: absolute;
				right: 0;
				.cl {
					margin-right: 2rem;
				}
			}
		}
	}
</style>
