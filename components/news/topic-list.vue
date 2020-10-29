<template>
	<view class="list-content u-f  animate__animated animate__fadeInLeft animate__fast" @tap="toTopicDetail">
		<image :src="item.titlePic" mode="widthFix"></image>
		<view class="topic-item-info">
			<view class="info-title">#{{item.title}}</view>
			<view class="info-content">{{item.desc}}</view>
			<view class="info-bottom">动态 {{item.totalNum}} 今日 {{item.todayNum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			toTopicDetail(){
				uni.navigateTo({
					url: "../../pages/topic-detail/topic-detail"
				})
			} 
		}
	}
</script>

<style lang="less" scoped>
	.list-content {
		padding: 20rpx;
		border-bottom: 1rpx solid #EEEEEE;

		image {
			width: 150rpx;
			height: 150rpx;
			margin-right: 20rpx;
			border-radius: 10rpx;
		}
	}

	.topic-item-info {
		color: #A4A4A4;
	}

	.info-title {
		color: #333333;
		font-size: 32rpx;
	}
</style>
