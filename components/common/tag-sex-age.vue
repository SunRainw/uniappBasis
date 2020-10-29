<template>
	<view class="icon iconfont icon-sex" :class="item.sex === 0? 'icon-nan': 'icon-nv'">{{item.age}}</view>
</template>

<script>
	export default {
		props: {
			item: Object
		}
	}
</script>

<style scoped>
	.icon-sex {
		color: #FFFFFF;
		font-size: 22rpx;
		padding: 5rpx 10rpx;
		border-radius: 20rpx;
		line-height: 22rpx;
	}

	.icon-nan {
		background-color: #007AFF;
	}

	.icon-nv {
		background-color: #FF698D;
	}
</style>
