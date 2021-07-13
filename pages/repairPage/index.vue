<template>
	<view class="repairIndex">
		<nav-header title="维修" :isUrgency="true"></nav-header>
		<view class="fixed">
			<uni-segmented-control :current="current" :values="tabItems" styleType="text" activeColor="#34bfc6" @clickItem="onClickItem"></uni-segmented-control>
		</view>
		<view class="content">
		 	<view v-for="(item,index) in tabItems" v-if="current === index">
		 		<list-nav :listData="listData"></list-nav>
		 	</view>
		 </view>
	</view>
</template>

<script>
	import navHeader from "@/components/navHeader.vue"
	import ListNav from './list.vue'
	export default {
		components: {
			ListNav,navHeader
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
			findListData() {
				if(this.current === 0) {
					this.listData = [
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '待处理',},
						{ data1: 'F2103120092', data2: '上海远大', data3: '1#车间机加线', data4: '数控立车', data5: 'SC01', data6: '李俊如', data7: '2021-03-12', data8: '处理中',},
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
		position: relative;
		.fixed {
			width: 100%;
			padding-top: 9rem;
		}
		.content {
		}
	}
</style>
