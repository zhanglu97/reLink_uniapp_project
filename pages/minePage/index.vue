<template>
	<view class="minePage">
		<nav-header title=""></nav-header>
		<view class="user-section">
			<view class="user-info-box" v-if="isLogin">
				<view class="portrait-box">
					<uni-file-picker class="upload" disable-preview :del-icon="false" return-type="object">上传头像</uni-file-picker>
				</view>
				<view class="info-box">
					<view class="username">{{userInfo.name}}</view>
					<view class="dept">{{userInfo.dept}}</view>
				</view>
			</view>
			<view class="user-info-box" v-else>
				<view class="portrait-box">
					<image @click="goPage('/pages/login/login')" class="portrait" src="/static/img/defaultUser.png"></image>
				</view>
				<view class="info-box">
					<view class="username">请登录</view>
				</view>
			</view>
		</view>
		<view class="cover-container">
			<view class="history-section icon">
				<view class="line" @click="goPage('/pages/login/changePassword')">
					<list-cell icon="locked" iconColor="#03a9f4" title="修改密码"></list-cell>
				</view>
				<view class="line" @click="goPage('/pages/login/changephone')">
					<list-cell icon="phone" iconColor="#00bcd4" title="修改手机号"></list-cell>
				</view>
				<view class="line" @click="goPage('/pages/minePage/about')">
					<list-cell icon="info" iconColor="#ff9800" title="睿采智连"></list-cell>
				</view>
				<view class="line" @click="goPage('/pages/minePage/help')">
					<list-cell icon="email" iconColor="#8bc34a" title="帮助与反馈"></list-cell>
				</view>
			</view>
		</view>
		<view v-if="isLogin" class="loginOut" @click="loginOut()">退出</view>
		
		<tabBar currentPage="/pages/minePage/index"></tabBar>
	</view>
</template>
<script>
	import tabBar from "@/components/tabBar.vue"
	import listCell from '@/components/mix-list-cell';
	import navHeader from "@/components/navHeader.vue"
	let startY = 0,
		moveY = 0,
		pageAtTop = true;
	export default {
		components: {
			tabBar,listCell,navHeader
		},
		data() {
			return {
				isLogin: false,
				userInfo: {
					name: '张三',
					dept: '生产部 维修组',
					imageValue: [],
				},
			}
		},
		onShow() {
			this.goNextToken("pages/HomePage/index")
			let _this = this
			uni.getStorage({
			    key: 'userInfo',
			    success: function (res) {
					if(!res.data) {
						_this.isLogin = false
					}else{
						_this.isLogin = true
					}
			    }
			});
		},
		methods: {
			goPage(data) {
				uni.navigateTo({
					url: data
				})
			},
			loginOut() {
				uni.removeStorage({
				    key: 'userInfo',
				});
				uni.removeStorageSync('token');
				uni.clearStorageSync();
				uni.clearStorage();
				uni.reLaunch({
				    url: '/pages/login/login'
				});
			},
		},
		mounted() {
			let _this = this
			uni.getStorage({
			    key: 'userInfo',
			    success: function (res) {
					if(!res.data) {
						_this.isLogin = false
					}else{
						_this.isLogin = true
					}
			    }
			});
		}
	}
</script>
<style lang="scss">
	.minePage {
		background: #f2f2f2;
		min-height: 100vh;
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
			border-radius: 0.5rem;
		}
		.user-section {
			padding-top: 9rem;
			position: relative;
			background: $main-title-color;
			background-size: cover;
			.user-info-box {
				display: flex;
				align-items: center;
				position: relative;
				z-index: 1;
				padding: 2rem;
				.portrait {
					width: 6rem;
					height: 6rem;
					border-radius: 5px;
					margin-right: 0.5rem;
					background: #FFFFFF;
				}
				.upload {
					width: 6rem;
					height: 6rem;
					margin-right: 0.5rem;
					.file-picker__box {
						width: 6rem;
						height: 6rem;
					}
				}
				.username {
					color: $font-color-white;
					margin: 0 0rem 1rem 1rem;
					font-size: 2rem;
				}
				.dept {
					font-size: 1.2rem;
					margin-left: 1rem;
					color: $font-color-white;
				}
			}
		}
		.cover-container {
			position: relative;
			.history-section {
				margin-top: 0.5rem;
				background: #fff;
				border-radius: 0.5rem;
				.line {
					border-bottom: 1px solid #EEEEEE;
				}
			}
		}
		.loginOut {
			height: 4rem;
			line-height: 4rem;
			text-align: center;
			background: #FFFFFF;
			margin-top: 0.5rem;
		}
	}
</style>
