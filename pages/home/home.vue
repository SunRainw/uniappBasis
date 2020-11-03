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
		<view class="home-data u-f-ac">
			<block v-for="item in homeData" :key="item.name">
				<view class="u-f1 u-f-ajc u-f-column">
					<view class="data-num">{{item.num}}</view>
					<view class="data-title">{{item.name}}</view>
				</view>
			</block>
		</view>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="https://image.uisdc.com/wp-content/uploads/2013/02/1361350785.jpg" mode="widthFix" lazy-load></image>
		</view>
		<view class="home-list">
			<view class="home-list-item u-f-ac u-f-jsb" hover-class="home-list-hover">
				<view class="u-f-ac">
					<text class="icon iconfont icon-liulan"></text>
					<text>浏览历史</text>
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeData: [{
						num: 0,
						name: "糗事"
					},
					{
						num: 0,
						name: "动态"
					},
					{
						num: 0,
						name: "评论"
					},
					{
						num: 0,
						name: "收藏"
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			e.index === 0 ? console.info("设置页") : ""
		},
		methods: {

		}
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

	.home-adv {
		padding: 20rpx;

		image {
			border-radius: 20rpx;
			height: 150rpx;
		}
	}

	.home-list {
		padding: 20rpx;
	}

	.home-list-item {
		padding: 10rpx;
		border-top: 1rpx solid #EEEEEE;
		border-bottom: 1rpx solid #EEEEEE;

		.icon-jinru {
			color: #CCCCCC;
		}

		.icon-liulan {
			color: #2CAEFC;
			font-size: 40rpx;
			margin-right: 10rpx;
		}
	}

	.home-list-hover {
		background-color: #EEEEEE;
	}
</style>
