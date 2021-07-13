<template>
	<view class="help">
		<uni-forms :modelValue="formData" :rules="rules" ref="form">
			<view class="yijian">
				<uni-icons type="compose" color="#8bc34a"></uni-icons> 反馈意见
			</view>
			<uni-forms-item label="" name="data1">
				<uni-easyinput type="textarea" maxlength="800" autoHeight v-model="formData.data1" placeholder="请输入反馈意见(800字以内)" />
			</uni-forms-item>
		</uni-forms>
		<view class="txt">
			欢迎您为我们提出宝贵的意见和建议，您留下的任何信息都将用来改善我们的软件。
		</view>
		<button class="botton_Submit" @click="submitForm">提交</button>
	</view>
</template>

<script>export default {
		data() {
			return {
				formData:{
					data1:'',
				},
				rules: {
					data1: {
						rules: [{ required: true, errorMessage: '请输入反馈意见', },]
					},
				}
			}
		},
		methods: {
			submitForm(form) {
				// 手动提交表单
				this.$refs.form.validate().then((res)=>{
					uni.switchTab({
					    url: '/pages/minePage/index',
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.help {
	padding: 1rem;
	.yijian {
		line-height: 4rem;
	}
	.botton_Submit {
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
	.txt {
		color: #888;
		font-size: 12px;
		margin-bottom: 2rem;
		text-align: center;
		padding: 0 3rem;
	}
}
</style>
