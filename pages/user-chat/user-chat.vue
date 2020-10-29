<template>
	<view>
		<!-- 输入框 -->
		<user-chat @submit="submit"></user-chat>
	</view>
</template>

<script>
	import userChat from "@/components/user-chat/user-chat.vue"
	export default {
		components: {
			userChat
		},
		data() {
			
			return {}
		},
		methods: {
			submit(value) {

			}
		}
	}
</script>

<style lang="less" scoped>

</style>
