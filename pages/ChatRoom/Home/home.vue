<template>
	<view class="chatHome">
		<selectInput :list="selectList" :list-key="'name'" :show.sync="selectShow" @on-select="checkSelect" @close="closeSelect" />
		<view class="content">
			<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in list" btn-width="160" :key="item.id" @click="click" @open="open" :options="options">
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
			</u-swipe-action>
		</view>
		<tabBarChat currentPage="/pages/ChatRoom/Home/home"></tabBarChat>
	</view>
</template>

<script>
	import tabBarChat from "@/components/tabBarChat.vue"
	import selectInput from '@/components/selectInput/selectInput.vue';
	export default {
		components: {
			tabBarChat,selectInput
		},
		data() {
			return {
				selectShow: false,
				options:[{ text: '删除', style: { backgroundColor: '#dd524d' }}],
				selectList: [{ id: '1', name: '添加朋友', icon: 'man-add-fill' },],
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
			//打开或者关闭弹窗
			showSelect(){
				this.selectShow = !this.selectShow;
			},
			getclickLeft() {
				uni.navigateTo({
				    url: '/pages/repairPage/index',
				});
			},
			//action 点击事件
			click(index, index1) {
				if (index1 == 0) {
					this.list.splice(index, 1);
				} 
			},
			//action 打开事件
			open(index) {
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if (index != idx) this.list[idx].show = false;
				});
			},
			//跳转
			linkTo({ id, name, images ,userId }) {
				uni.navigateTo({
				    url: '/pages/ChatRoom/chat/chat?messageId=' + id + '&fromUserId=' + userId,
				});
			},
			//关闭弹窗
			closeSelect(){
				//小程序兼容
				this.selectShow = false;
			},
			//添加
			checkSelect(index) {
				if (index == 0) {
					uni.navigateTo({
					    url: '/pages/ChatRoom/AddFriend/index',
					});
				}
			},
		},
		onNavigationBarButtonTap({ index }) {
				console.log(index)
			if(index == 0) {
				this.showSelect()
			}
		},
		//返回按钮事件
		onBackPress(e) {
			//以下内容对h5不生效
			//--所以如果用浏览器自带的返回按钮进行返回的时候页面不会重定向 正在寻找合适的解决方案
			uni.navigateTo({
				url: '/pages/repairPage/index',
			});
			return true;
		},
	}
</script>

<style lang="scss">
	.u-border-bottom:after {
	    border-bottom-width: 0px;
	}
	.chatHome {
		height: 100%;
		background: #F2F2F2;
		.content {
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
