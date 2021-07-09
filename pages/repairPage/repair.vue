<template>
	<view class="repairPage">
		 <uni-forms :modelValue="formData" :rules="rules" ref="form">
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
				<uni-easyinput type="textarea" maxlength="100" autoHeight v-model="formData.data5" placeholder="请输入问题描述(少于100字)" />
			</uni-forms-item>
			<uni-forms-item label="现场图片" name="data6">
				<uni-file-picker v-model="formData.imageValue" :limit="3" fileMediatype="image" mode="grid" @select="select" />
			</uni-forms-item>
			<button class="botton_Submit" @click="submitForm">立即报修</button>
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
					imageValue:[]
				},
				rules: {
					data1: {
						rules: [{ required: true, errorMessage: '请输入设备编码', },]
					},
					data2: {
						rules: [{ required: true, errorMessage: '请输入设备名称', }]
					},
					data3: {
						rules: [{ required: true, errorMessage: '请输入设备型号', }]
					},
					data4: {
						rules: [{ required: true, errorMessage: '请输入报警代码', }]
					},
					data5: {
						rules: [{ required: true, errorMessage: '请输入问题描述', }]
					}
				}
			}
		},
		methods: {
			submitForm(form) {
				// 手动提交表单
				this.$refs.form.validate().then((res)=>{
					console.log(res)
					uni.switchTab({
					    url: '/pages/repairPage/index',
					});
				})
			},
			select(e) {
				console.log(e.tempFilePaths[0]);
			},
		}
	}
</script>

<style lang="scss">
	.repairPage {
		padding: 2rem 1rem;
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
	}
</style>
