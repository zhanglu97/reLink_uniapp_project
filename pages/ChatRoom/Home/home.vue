<template>
	<view class="chatHome">
		<nav-header title="聊天" backgroundColor="#1296db" :isUrgency="false" leftIcon="back" @getclickLeft="getclickLeft"></nav-header>
		<view class="content">
			<uni-swipe-action>
				 <uni-swipe-action-item  v-for="(item, index) in list" :right-options="options"  @click="bindClick" @change="swipeChange($event)">
					<view class="item" :class="item.isTop ? 'bg_view' : ''" hover-class="message-hover-class" @tap="linkTo(item)">
						<image mode="aspectFill" :src="item.images" />
						<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
						<view class="right u-border-bottom title-wrap">
							<view class="right_top">
								<view class="right_top_name u-line-1">{{ item.name }}</view>
								<view class="right_top_time ">{{ item.updateTime }}</view>
							</view>
							<view class="right_btm ">
								<view class="u-line-1">-</view>
								<view class=""></view>
							</view>
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
		<tabBarChat currentPage="/pages/ChatRoom/Home/home"></tabBarChat>
	</view>
</template>

<script>
	import tabBarChat from "@/components/tabBarChat.vue"
	import navHeader from "@/components/navHeader.vue"
	export default {
		components: {
			tabBarChat,navHeader
		},
		data() {
			return {
				options:[
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				],
				list: [
					{
						id: 1,
						userId:3,
						name: '迪丽热巴',
						images: require('@/static/img/chat/girl.jpg'),
						updateTime: '下午 5:10',
						show: false,
						isTop: true
					},
					{
						id: 2,
						userId:4,
						name: '小贱贱',
						images: require('@/static/img/chat/boy.jpg'),
						updateTime: '下午 5:10',
						show: false
					},
					{
						id: 3,
						userId:2,
						name: '陈冠希',
						images: require('@/static/img/chat/guanxi.jpg'),
						updateTime: '下午 5:10',
						show: false
					}
				],
			}
		},
		methods: {
			getclickLeft() {
				uni.navigateTo({
				    url: '/pages/repairPage/index',
				});
			},
			onClick(e){
				console.log('点击了'+(e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e){
				console.log('当前状态：'+ open )
			}
		}
	}
</script>

<style lang="scss">
	.chatHome {
		height: 100%;
		background: #F2F2F2;
		.content {
			padding-top: 8.8rem;
			.item {
				width: 750rpx;
				display: flex;
				align-items: center;
				background: #FFFFFF;
				border-bottom: 1px solid #F2F2F2;
				image {
					width: 76rpx;
					height: 76rpx;
					margin: 20rpx;
					border-radius: 12rpx;
					flex: 0 0 76rpx;
				}
				.right {
					overflow: hidden;
					flex: 1 0;
					padding: 20rpx 20rpx 20rpx 0;
					&_top {
						display: flex;
						justify-content: space-between;
						&_name {
							font-size: 28rpx;
							color: #303133;
							flex: 0 0 450rpx;
							overflow: hidden;
						}
						&_time {
							font-size: 22rpx;
							color: #c0c4cc;
						}
					}
					&_btm {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 22rpx;
						color: #909399;
						padding-top: 10rpx;
					}
				}
			}
		}
	}
</style>
