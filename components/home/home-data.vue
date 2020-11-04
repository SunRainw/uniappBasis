<template>
	<view class="home-data u-f-ac">
		<block v-for="item in homeData" :key="item.name">
			<view class="u-f1 u-f-ajc u-f-column">
				<view class="data-num">{{item.num}}</view>
				<view class="data-title">{{item.name}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			homeData: Array
		}
	}
</script>

<style lang="less" scoped>
	.home-data {
		padding: 20rpx 40rpx;
	
		.data-num {
			color: #333333;
			font-size: 32rpx;
		}
	
		.data-title {
			color: #989898;
		}
	}
</style>
