<template>
	<view class="repairPage">
		 <uni-forms :modelValue="formData" ref="form">
			<uni-forms-item label="设备编码" name="data1">
				<uni-easyinput type="text" v-model="formData.data1" placeholder="请输入设备编码" />
			</uni-forms-item>
			<uni-forms-item label="设备名称" name="data2">
				<uni-easyinput type="text" v-model="formData.data2" placeholder="请输入设备名称" />
			</uni-forms-item>
			<uni-forms-item label="设备型号" name="data3">
				<uni-easyinput type="text" v-model="formData.data3" placeholder="请输入设备型号" />
			</uni-forms-item>
			<uni-forms-item label="报警代码" name="data4">
				<uni-easyinput type="text" v-model="formData.data4" placeholder="请输入报警代码" />
			</uni-forms-item>
			<uni-forms-item label="问题描述" name="data5">
				<uni-easyinput type="textarea" v-model="formData.data5" placeholder="请输入问题描述" />
			</uni-forms-item>
			<button @click="submitForm">Submit</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData:{
					data1:'',
					data2:'',
					data3:'',
					data4:'',
					data5:'',
				},
			}
		},
		methods: {
			submitForm(form) {
				// 手动提交表单
				this.$refs.form.submit().then((res)=>{
					console.log('表单返回得值：', res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.repairPage {
		padding: 2rem 1rem;
	}
</style>
