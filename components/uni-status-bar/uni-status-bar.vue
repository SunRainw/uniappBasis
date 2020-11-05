<template>
	<view :style="{ height: statusBarHeight, background: background }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		props: {
			background: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
		mounted() {
			this.$nextTick(() => {
				console.info(this.statusBarHeight)
			})
		}
	}
</script>

<style scoped>
	.uni-status-bar {
		width: 750rpx;
		height: 20px;
		/* height: var(--status-bar-height);
 */
	}
</style>