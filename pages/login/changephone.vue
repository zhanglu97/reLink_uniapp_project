<template>
	<view class="changephone">
		 <uni-forms ref="form" :value="formData" :rules="rules">
			<uni-forms-item label="用户名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入用户名" />
			</uni-forms-item>
			<uni-forms-item label="原手机号" name="phone">
				<uni-easyinput class="input" v-model="formData.phone" type="text" placeholder="请输入原手机号"  />
			</uni-forms-item>
			<uni-forms-item label="新手机号" name="newphone">
				<uni-easyinput class="input" v-model="formData.newphone" type="text" placeholder="请输入新手机号"  />
			</uni-forms-item>
			<button class="submit" @click="submit">提交</button>
		</uni-forms>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				name: '',
				phone: '',
				newphone: '',
			},
			rules: {
				name: {// 对name字段进行必填验证
					rules: [{
						required: true,
						errorMessage: '请输入姓名',
					},]
				},
				phone: {// 对phone字段进行必填验证
					rules: [{
						required: true,
						errorMessage: '请输入原手机号',
					}]
				},
				newphone: {// 对phone字段进行必填验证
					rules: [{
						required: true,
						errorMessage: '请输入新手机号',
					}]
				}
			}
		}
	},
	methods: {
		submit() {
			this.$refs.form.submit().then(res=>{
				console.log('表单数据信息：', res);
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.changephone {
	padding: 1rem;
	.submit {
		background-color: $main-title-color;
		color: #FFFFFF;
		border-radius: 2rem;
		height: 4rem;
		line-height: 4rem;
		margin-top: 2rem;
		font-size: 14px;
	}
}
</style>
