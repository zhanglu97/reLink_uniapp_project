<template>
	<view class="changePassword">
		 <uni-forms ref="form" :value="formData" :rules="rules">
			<uni-forms-item label="用户名" name="name">
				<input type="text" v-model="formData.name" placeholder="请输入用户名" />
			</uni-forms-item>
			<uni-forms-item label="原密码" name="password">
				<input class="input" v-model="formData.password" type="text" placeholder="请输入原密码"  />
			</uni-forms-item>
			<uni-forms-item label="新密码" name="newpassword">
				<input class="input" v-model="formData.newpassword" type="text" placeholder="请输入新密码"  />
			</uni-forms-item>
			<button class="submit" @click="submit">提交</button>
		</uni-forms>
	</view>
</template>

<script>
import uniForms from "@/components/uni/uni-forms/uni-forms.vue"
import uniFormsItem from "@/components/uni/uni-forms-item/uni-forms-item.vue"
export default {
	data() {
		return {
			formData: {
				name: '',
				password: '',
				newpassword: '',
			},
			rules: {
				name: {// 对name字段进行必填验证
					rules: [{
						required: true,
						errorMessage: '请输入姓名',
					},]
				},
				password: {// 对password字段进行必填验证
					rules: [{
						required: true,
						errorMessage: '请输入原密码',
					}]
				},
				newpassword: {// 对password字段进行必填验证
					rules: [{
						required: true,
						errorMessage: '请输入新密码',
					}]
				}
			}
		}
	},
	components: {
		uniForms, uniFormsItem
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
.changePassword {
	padding: 20upx;
	.submit {
		background-color: $main-title-color;
		color: #FFFFFF;
		border-radius: 60upx;
		height: 70upx;
		line-height: 70upx;
		margin-top: 40upx;
		font-size: 14px;
	}
}
</style>
