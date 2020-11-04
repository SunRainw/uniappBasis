<template>
	<view>
		<view class="u-f-ajc">登录糗百，体验更多功能</view>
		<view class="other-login u-f-ac">
			<view class="u-f-ajc u-f1">
				<view class="icon iconfont icon-weixin u-f-ajc"></view>
			</view>
			<view class="u-f-ajc u-f1">
				<view class="icon iconfont icon-QQ u-f-ajc"></view>
			</view>
			<view class="u-f-ajc u-f1">
				<view class="icon iconfont icon-weibo u-f-ajc"></view>
			</view>
		</view>
		<view class="u-f-ajc">账号密码登录<view class="icon iconfont icon-jinru"></view>
		</view>

	</view>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.other-login {
		padding: 20rpx 80rpx 50rpx;

		.icon {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			font-size: 55rpx;
			color: #FFFFFF;
		}

		.icon-weixin {
			background-color: #2CAEFC;
		}

		.icon-QQ {
			background-color: #2BD19B;
		}

		.icon-weibo {
			background-color: #FC7729;
		}
	}
</style>
