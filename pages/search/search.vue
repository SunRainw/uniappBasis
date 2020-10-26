<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		// 监听原生标题点击事件
		onNavigationBarButtonTap(e) {
			e.index === 0 ? uni.navigateBack({
				delta: 1
			}): ""
		},
		// 输入搜索时监听
		onNavigationBarSearchInputChanged(e) {
			console.info(e.text)
		},
		// 监听点击手机键盘搜索事件
		onNavigationBarSearchInputConfirmed(e) {
			console.info(e.text)
		},
		methods: {

		}
	}
</script>

<style>

</style>
