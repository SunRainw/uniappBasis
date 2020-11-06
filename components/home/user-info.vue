<template>
	<view class="home-info u-f-ac" @tap="toUserCenter">
		<image :src="userInfo.userPic" mode="widthFix" lazy-load></image>
		<view class="u-f1">
			<view class="username">{{userInfo.username}}</view>
			<view class="visitor">总访客 {{userInfo.todayNum}} 今日 {{userInfo.todayNum}}</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: Object
		},
		methods: {
			toUserCenter() {
				uni.navigateTo({
					url: "../../pages/user-center/user-center"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.home-info {
		padding: 20rpx 40rpx;

		image {
			flex-shrink: 0;
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			margin-right: 15rpx;
		}

		.icon-jinru {
			height: 100%;
		}
	}

	.username {
		font-size: 32rpx;
	}

	.visitor {
		color: #BBBBBB;
	}
</style>
