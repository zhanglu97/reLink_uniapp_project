<template>
	<view class="minePage">
		<view class="user-section">
			<view class="user-info-box">
				<view class="portrait-box" @click="goPage('/pages/login/login')">
					<image class="portrait" src="/static/img/defaultUser.png"></image>
				</view>
				<view class="info-box">
					<text class="username">登录</text>
				</view>
			</view>
		</view>
		<view class="cover-container">
			<view class="history-section icon">
				<view @click="goPage('/pages/login/changePassword')">
					<list-cell icon="locked" iconColor="#5fcda2" title="修改密码"></list-cell>
				</view>
				<view @click="goPage('/pages/minePage/about')">
					<list-cell icon="info" iconColor="#347eeb" title="关于我们"></list-cell>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import listCell from '@/components/mix-list-cell';
	let startY = 0,
		moveY = 0,
		pageAtTop = true;
	export default {
		components: {
			listCell,
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			goPage(data) {
				uni.navigateTo({
					url: data
				})
			},
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>
<style lang="scss">
	.minePage {
		%flex-center {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		%section {
			display: flex;
			justify-content: space-around;
			align-content: center;
			background: #fff;
			border-radius: 10upx;
		}

		.user-section {
			height: 218upx;
			position: relative;
			background: url(../../static/img/userBg.png);
			background-size: cover;
			padding: 40upx 80upx 0;
		}

		.user-info-box {
			height: 180upx;
			display: flex;
			align-items: center;
			position: relative;
			z-index: 1;

			.portrait {
				width: 100upx;
				height: 100upx;
				border: 5upx solid #fff;
				border-radius: 50%;
			}

			.username {
				font-size: $font-lg + 6upx;
				color: $font-color-white;
				margin-left: 20upx;
			}
		}

		.cover-container {
			position: relative;
			padding-bottom: 20upx;
		}

		.history-section {
			margin-top: 20upx;
			background: #fff;
			border-radius: 10upx;
		}
	}
</style>
