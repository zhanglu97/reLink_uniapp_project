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
						<my-icon type="contact" size="25" color="#E5E5E5"></my-icon>
					</view>
					<view class="input_input">
						<input v-model="name" class="uni-input" focus placeholder="请输入用户名" />
					</view>
				</view>
				<view class="list">
					<view class="input_icon">
						<my-icon type="locked" size="25" color="#E5E5E5"></my-icon>
					</view>
					<view class="input_input">
						<input v-model="password" class="uni-input" placeholder="请输入密码" @confirm="login()" />
					</view>
				</view>
			</view>
			<view v-if="loginType == 1">
				<view class="list">
					<view class="input_icon">
						<my-icon type="phone" size="25" color="#E5E5E5"></my-icon>
					</view>
					<view class="input_input">
						<input v-model="phone" class="uni-input" focus placeholder="请输入手机号" />
					</view>
				</view>
				<view class="list">
					<view class="input_icon">
						<my-icon type="locked" size="25" color="#E5E5E5"></my-icon>
					</view>
					<view class="input_input">
						<input v-model="code" class="uni-input" placeholder="请输入验证码" @confirm="login()" />
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
	import myIcon from "@/components/uni/my-icon/my-icon.vue"
	export default {
		data() {
			return {
				name: '',
				password: '',
				phone: '',
				code: '',
				loginType: 0
			};
		},
		components: {
			myIcon
		},
		onLoad() {

		},
		methods: {
			changeType(type) {
				this.loginType = type
			},
			login() {
				if( this.loginType == 0 ) {
					if (this.name.length == '') {
						this.$api.msg('请输入用户名')
						return;
					}
					if (this.password.length == '') {
						this.$api.msg('请输入密码')
						return;
					}
				}else if( this.loginType == 1 ) {
					if (this.phone.length == '') {
						this.$api.msg('请输入手机号')
						return;
					}
					if (this.code.length == '') {
						this.$api.msg('请输入验证码')
						return;
					}
				}
				uni.switchTab({
					url: '/pages/FirstPage/index'
				})
			},
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100%;
		position: relative;
		.bg_color {
			background: $main-title-color;
			height: 35%;
			display: flex;
			justify-content: center;
			align-items: center;
			.login-logo {
				width: 10rem;
				height: 3rem;
			}
		}
		.con {
			position: absolute;
			width: calc(90% - 2rem);
			left: 5%;
			top: 25%;
			background: #FFFFFF;
			box-shadow: 0 0 0.5rem #a3c8ca;
			padding: 1rem 1rem;
			.type_tab {
				text-align: center;
				text {
					color: #999;
					font-size: 0.7rem;
					&.split {
						padding: 0 0.5rem;
						color: $font-color-disabled;
					}
					&.active {
						color: $main-title-color;
					}
				}
			}
			.list {
				border-bottom: 2px solid #F7F7F7;
				padding-top: 1rem;
				display: flex;
				.input_icon {
					width: 2rem;
					text-align: center;
					padding: 0px 0 0.25rem;
				}
				.input_input {
					flex-grow: 1;
					padding-right: 0.5rem;
				}
				input::-webkit-input-placeholder {
					color: #D2D2D2;
				}
			}
			.botton_login {
				background-color: $main-title-color;
				color: #ffffff;
				border-radius: 2rem;
				height: 2rem;
				line-height: 2rem;
				font-size: $font-base;
				text-align: center;
				border: 1px solid #F0F0F0;
				width: 100%;
			}
		}
		.copyright {
			position: fixed;
			bottom: 0.25rem;
			font-size: 0.5rem;
			color: #999;
			width: 100%;
			text-align: center;
		}
	}
</style>
