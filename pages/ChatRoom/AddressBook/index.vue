<template>
	<view class="AddressBook">
		<nav-header title="通讯录" backgroundColor="#1296db" :isUrgency="false"></nav-header>
		
		<tabBarChat currentPage="/pages/ChatRoom/AddressBook/index"></tabBarChat>
	</view>
</template>

<script>
	import tabBarChat from "@/components/tabBarChat.vue"
	import navHeader from "@/components/navHeader.vue"
	export default {
		components: {
			tabBarChat,navHeader
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.AddressBook {
		
	}
</style>
