<template>
	<view class="AddFriend">
		<view class="search_top">
			<u-search class="search_input" v-model="searchInput"  placeholder="搜索" shape="square" :show-action="false" :bg-color="'#ffffff'" v-on:focus="focus()"></u-search>
		</view>
		<view class="searchList" v-if="isSearch">
			<view v-if="searchList.length == 0" class="noData">该用户不存在</view>
			<view v-else class="list">
				<view v-for="user in searchList" :key="user.userId"  class="list-cell" @tap="linkToCard(user)" hover-class="message-hover-class">
					<image mode="aspectFill" :src="user.headImg" />
					<view  class="list-cell-name">{{user.userName}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSearch: false,
				searchInput: '',
				searchList: [],
			}
		},
		methods:{
			focus(){
				if(document.querySelector('input')==document.activeElement){
					this.InputSearch(this.searchInput.trim());
				}
			 },
			InputSearch(value){
			    var that = this;
			    if(!value){
			        that.searchList=[];
					that.isSearch = false
			        return;
			    }else{
					that.isSearch = true
					let newListData = []
					this.searchList = that.firendList.filter(item => {
					   if (item.wechatNumber.toLowerCase().indexOf(that.searchInput) !== -1 || item.userName.toLowerCase().indexOf(that.searchInput) !== -1) {
							newListData.push(item);
					   }
					})
					that.searchList = newListData
				}
			 },
			linkToCard({userId}){
				this.$u.route({
					url: 'pages/ChatRoom/businessCard/businessCard',
					params:{ userId }
				})
			}
		},
		watch:{
			searchInput:function(){
				this.focus();
			},
		}
	}
</script>

<style lang="scss">
	.AddFriend {
		height: 100%;
		background: #f8f8f8;
		.search_top {
			padding: 1rem;
			display: flex;
			.search_bt {
				height: 3.2rem;
				line-height: 3.2rem;
				margin-left: 1rem;
				&.go {
					background-color: #1296db !important;
				}
			}
		}
		.searchList {
			background: #FFFFFF;
			padding: 1rem;
			.noData {
				height: 4rem;
				line-height: 4rem;
				text-align: center;
			}
			.list {
				.list-cell {
					display: flex;
					box-sizing: border-box;
					width: 100%;
					padding: 10px 24rpx;
					overflow: hidden;
					color: #323233;
					font-size: 28rpx;
					line-height: 48rpx;
					background-color: #fff;
					align-items: center;
					image {
						width: 76rpx;
						height: 76rpx;
						border-radius: 12rpx;
						flex: 0 0 76rpx;
					}
					&-name{
						padding-left: 20rpx;
					}
				}
			}
		}
	}
</style>
