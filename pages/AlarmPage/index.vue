<template>
	<view class="MainPage">
		<!-- <view class="header">
			<view class="header_login">
				<text class="title">设备实时运行一览</text>
				<view class="goLogin">
					<my-icon type="person" size="14px" color="#FFFFFF"></my-icon>
					<text class="txt" @click="goLogin()">请登录</text>
				</view>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listNav: [{
					imgUrl: require("../../static/img/shebei.png"),
					state: '加工',
					name: '三菱卧式加工中心',
					bh: 'MT80',
					today: '7',
				}, {
					imgUrl: require("../../static/img/shebei.png"),
					state: '停机',
					name: '三菱卧式加工中心',
					bh: 'MT80',
					today: '22',
				}, {
					imgUrl: require("../../static/img/shebei.png"),
					state: '报警',
					name: '三菱卧式加工中心',
					bh: 'MT80',
					today: '12',
				}, {
					imgUrl: require("../../static/img/shebei.png"),
					state: '报警',
					name: '三菱卧式加工中心',
					bh: 'MT80',
					today: '12',
				}, {
					imgUrl: require("../../static/img/shebei.png"),
					state: '报警',
					name: '三菱卧式加工中心',
					bh: 'MT80',
					today: '12',
				}]
			}
		},
		onLoad() {

		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			goDetail(data) {
				uni.navigateTo({
					url:"/pages/FirstPage/listNav?detailData="+JSON.stringify(data)
				})
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">
	.MainPage {
		min-height: 100%;
		background-color: $background-color;
		padding-bottom: 5.5rem;
		.clearBoth {
			clear: both;
		}
		.header {
			background: $main-title-color;
			height: 150upx;
			background-size: 100%;
			color: #FFFFFF;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 111111;
			.header_login {
				height: 150upx;
				line-height: 200upx;
				padding: 0 40upx;
				text-align: center;
				position: relative;
				.goLogin {
					position: absolute;
					right: 20upx;
					top: 0;
				}
				.txt {
					font-size: $font-base;
					text-align: right;
				}
			}
		}
		.list {
			// padding-top: 150upx;
		}
		.list_nav {
			margin: 20upx;
			margin-top: 0;
			padding: 20upx;
			width: calc(100% - 80upx);
			background-color: #FFFFFF;
			.left_img {
				float: left;
				width: 200upx;
				.imgUrl {
					width: 100%;
					height: 280upx;
				}
			}
			.right_list {
				float: left;
				width: calc(100% - 220upx);
				font-size: $font-base;
				padding-left: 20upx;
				.nav {
					position: relative;
					height: 70upx;
					line-height: 70upx;
					display: flex;
					.nav-name {
						padding-left: 20upx;
						color: #888888;
						width: 160upx;
						&::before {
							content: ' ';
							width: 6upx;
							height: 6upx;
							background-color: #333;
							border-radius: 3upx;
							position: absolute;
							left: 0;
							top: 32upx;
						}
					}
					.nav-de {
						text-align: center;
						width: calc(100% - 160upx);
						&.jg {
							color: #FFFFFF;
							background-color: $uni-color-success;
							border-radius: 50upx;
							height: 50upx;
							line-height: 50upx;
							margin-top: 10upx;
						}
						&.tj {
							color: #FFFFFF;
							background-color: $uni-color-warning;
							border-radius: 50upx;
							height: 50upx;
							line-height: 50upx;
							margin-top: 10upx;
						}
						&.bj {
							color: #FFFFFF;
							background-color: $uni-color-error;
							border-radius: 50upx;
							height: 50upx;
							line-height: 50upx;
							margin-top: 10upx;
						}
					}
				}
			}
		}
	}
</style>
