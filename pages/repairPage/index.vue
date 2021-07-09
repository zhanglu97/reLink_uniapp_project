<template>
	<view class="repairIndex">
		<view class="rightTop-urgency">
			<text class="title">维修</text>
			<button type="warn" size="mini" class="urgency_button" @click="goRepair">
				<i class="iconfont icon-jinji"></i> 紧急报修
			</button>
		</view>
		 <uni-segmented-control class="fixed" :current="current" :values="tabItems" styleType="text" activeColor="#34bfc6" @clickItem="onClickItem"></uni-segmented-control>
		 <view class="content">
		 	<view v-for="(item,index) in tabItems" v-if="current === index">
		 		<list-nav :listData="listData"></list-nav>
		 	</view>
		 </view>
	</view>
</template>

<script>
	import ListNav from './list.vue'
	export default {
		components: {
			ListNav
		},
		data() {
			return {
				current: 0,
				tabItems: ['全部','待处理','维修中','已完成','已取消'],
				listData: [],
			}
		},
		methods: {
			onPullDownRefresh() {
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
			},
			onClickItem(val) {
				this.current = val.currentIndex
			},
			goRepair() {
				uni.navigateTo({
				    url: '/pages/repairPage/repair',
				});
			},
			findListData() {
				if(this.current === 0) {
					this.listData = [
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '处理中',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '维修中',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '已完成',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '已完成',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '已完成',},
					]
				}else if(this.current === 1) {
					this.listData = [
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
					]
				}else if(this.current === 2) {
					this.listData = [
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '维修中',},
					]
				}else if(this.current === 3) {
					this.listData = [
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '已完成',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '已完成',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '已完成',},
					]
				}else if(this.current === 4) {
					this.listData = []
				}
			}
		},
		mounted() {
			this.findListData()
		},
		watch: {
			current(val) {
				this.findListData()
			}
		},
	}
</script>

<style lang="scss">
	.repairIndex {
		min-height: 100vh;
		background: #efefef;
		position: relative;
		padding-bottom: 5.5rem;
		.rightTop-urgency {
			background: $main-title-color;
			height: 4.4rem;
			padding: 0 1rem;
			position: fixed;
			width: calc(100% - 2rem);
			z-index: 1111;
			display: flex;
			justify-content: center;
			align-items: center;
			.title {
				color: #FFFFFF;
				font-size: 1.6rem;
			}
			.urgency_button {
				font-size: 1.2rem;
				height: 2.6rem;
				line-height: 2.6rem;
				float: right;
				border-radius: 1.5rem;
				padding: 0 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				right: 1rem;
				.iconfont {
					margin-right: 0.2rem;
				}
			}
		}
		.fixed {
			position: fixed;
			width: 100%;
			top: 4.4rem;
			z-index: 1111;
			background: #efefef;
		}
		.content {
			padding-top: 8rem;
		}
	}
</style>
