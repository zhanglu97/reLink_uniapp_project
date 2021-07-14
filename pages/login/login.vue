<template>
	<view class="login">
		<view class="bg_color">
			<image class="login-logo" src="../../static/img/login_logo.png" mode=""></image>
		</view>
		<view class="con">
			<view class="type_tab">
				<text @click="changeType(0)" :class="{'active': loginType == 0}">账号密码登录</text>
				<text class="split">|</text>
				<text @click="changeType(1)" :class="{'active': loginType == 1}">手机验证码登录</text>
			</view>
			
			<view v-if="loginType == 0">
				<view class="list">
					<view class="input_icon">
						<uni-icons type="contact" size="20" color="#E5E5E5"></uni-icons>
					</view>
					<view class="input_input">
						<input v-model="userLogin.name" class="uni-input" placeholder="请输入用户名" />
					</view>
				</view>
				<view class="list">
					<view class="input_icon">
						<uni-icons type="locked" size="20" color="#E5E5E5"></uni-icons>
					</view>
					<view class="input_input">
						<input v-model="userLogin.password" class="uni-input" placeholder="请输入密码" @confirm="login()" />
					</view>
				</view>
			</view>
			<view v-if="loginType == 1">
				<view class="list">
					<view class="input_icon">
						<uni-icons type="phone" size="20" color="#E5E5E5"></uni-icons>
					</view>
					<view class="input_input">
						<input v-model="userLogin.phone" class="uni-input" focus placeholder="请输入手机号" />
					</view>
				</view>
				<view class="list">
					<view class="input_icon">
						<uni-icons type="locked" size="20" color="#E5E5E5"></uni-icons>
					</view>
					<view class="input_input">
						<input v-model="userLogin.code" class="uni-input" placeholder="请输入验证码" @confirm="login()" />
					</view>
				</view>
			</view>
			
			<view class="botton" style="margin-top: 30px;">
				<div class="botton_login " @click="login()">登 录</div>
			</view>
		</view>
		<view class="copyright">
			<text>©2020至今 REFO 睿孚科技 · 版权所有</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userLogin: {
					name: '',
					password: '',
					phone: '',
					code: '',
				},
				loginType: 0
			};
		},
		
		onLoad() {
			
		},
		methods: {
			changeType(type) {
				this.loginType = type
			},
			login() {
				if( this.loginType == 0 ) {
					if (!this.userLogin.name) {
						this.$api.msg('请输入用户名')
						return;
					}
					if (!this.userLogin.password) {
						this.$api.msg('请输入密码')
						return;
					}
				}else if( this.userLogin.loginType == 1 ) {
					if(this.userLogin.phone) {
        				const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
						if (!reg.test(this.userLogin.phone)) {
							this.$api.msg('请输入正确的手机号!');
							return;
						}
					}else {
						this.$api.msg('请输入手机号')
						return;
					}
					if (!this.userLogin.code) {
						this.$api.msg('请输入验证码')
						return;
					}
				}
				uni.setStorage({
				    key: 'userInfo',
				    data: this.userLogin,
				});
				uni.setStorageSync('token',1);
				uni.navigateTo({
					url: '/pages/HomePage/index'
				})
			},
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100%;
		position: relative;
		min-height: 100vh;
		.bg_color {
			background: $main-title-color;
			height: 35%;
			min-height: 50vh;
			display: flex;
			justify-content: center;
			.login-logo {
				width: 20rem;
				height: 6rem;
				z-index: 1111;
			}
		}
		.con {
			position: absolute;
			width: calc(90%);
			left: 5%;
			top: 30vh;
			background: #FFFFFF;
			box-shadow: 0 0 1rem #a3c8ca;
			padding: 2rem 2rem;
			.type_tab {
				text-align: center;
				text {
					color: #999;
					font-size: 1.4rem;
					&.split {
						padding: 0 1rem;
						color: $font-color-disabled;
					}
					&.active {
						color: $main-title-color;
					}
				}
			}
			.list {
				border-bottom: 2px solid #F7F7F7;
				padding-top: 2rem;
				display: flex;
				.input_icon {
					width: 4rem;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.input_input {
					flex-grow: 1;
					padding-right: 1rem;
				}
				input::-webkit-input-placeholder {
					color: #D2D2D2;
				}
			}
			.botton_login {
				background-color: $main-title-color;
				color: #ffffff;
				border-radius: 4rem;
				height: 4rem;
				line-height: 4rem;
				font-size: $font-base;
				text-align: center;
				border: 1px solid #F0F0F0;
				width: 100%;
			}
		}
		.copyright {
			position: fixed;
			bottom: 0.5rem;
			font-size: 1rem;
			color: #d0d0d0;
			width: 100%;
			text-align: center;
		}
	}
</style>
