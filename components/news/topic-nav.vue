<template>
	<view class="topic-nav">
		<view class="nav-top u-f-ac u-f-jsb">
			<view>热门分类</view>
			<view @tap="toMoreTopic"><text>更多</text><text class="icon iconfont icon-jinru"></text></view>
		</view>
		<view class="nav-content u-f-ac">
			<view v-for="(item, index) in nav" :key="index">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav: Array
		},
		methods: {
			toMoreTopic() {
				uni.navigateTo({
					url: "../../pages/topic/topic"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.topic-nav {
		border-bottom: 1rpx solid #EEEEEE;
		border-top: 1rpx solid #EEEEEE;
		padding: 20rpx;

		.nav-top {
			margin-bottom: 10rpx;

			view {
				color: #333333;
				font-size: 32rpx;
			}

			text {
				color: #AEAEAE;
				font-size: 30rpx;
			}
		}

		.nav-content {
			view {
				flex: 1;
				background: #efefef;
				text-align: center;
				color: #9E9E9E;
				border-radius: 8rpx;
				margin: 0 10rpx;
			}
		}
	}
</style>
