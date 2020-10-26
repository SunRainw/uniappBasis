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
		methods: {

		}
	}
</script>

<style>

</style>
