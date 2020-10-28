<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.titlePic" mode="widthFix" lazy-load></image>
		</view>
		<view class="topic-info">
			<view class="topic-info-top u-f-ac">
				<image :src="topicInfo.titlePic" mode="widthFix" lazy-load></image>
				<view>#{{topicInfo.title}}#</view>
			</view>
			<view class="topic-info-center u-f-ac">
				<view>动态 {{topicInfo.totalNum}}</view>
				<view>今日 {{topicInfo.todayNum}}</view>
			</view>
			<view class="topic-info-bottom">{{topicInfo.desc}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			topicInfo: Object
		}
	}
</script>

<style lang="less" scoped>
	.topic-bg {
		width: 100%;
		height: 300rpx;
		position: relative;
		overflow: hidden;

		image {
			width: 100%;
			position: absolute;
			filter: blur(10px);
		}
	}

	.topic-info {
		padding: 0 25rpx;
	}

	.topic-info-top {
		position: relative;

		image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 20rpx;
			position: absolute;
			top: -75rpx;
		}

		view {
			font-size: 35rpx;
			margin-left: 170rpx;
			flex: 1;
		}
	}

	.topic-info-center {
		padding: 35rpx 0 15rpx 0;

		view {
			color: #CDCDCD;
			margin-right: 10rpx;
		}
	}

	.topic-info-bottom {
		color: #A3A3A3;
		font-size: 32rpx;
	}
</style>
