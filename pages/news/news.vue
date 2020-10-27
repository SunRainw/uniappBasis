<template>
	<view>
		<uni-nav-bar :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="top-icon">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-center u-f-ajc">
				<view class="u-f-ajc" v-for="(item,index) in tabBars" :key="index" :class="{active: tabIndex === index}" @tap="tabChange(index)">
					{{item.name}}
					<view v-show="tabIndex === index" class="tab-line"></view>
				</view>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="icon iconfont icon-bianji"></view>
			</block>
		</uni-nav-bar>
		<!-- 列表 -->
		<view class="common-list u-f">
			<view class="common-list-left">
				<image src="../../static/image/common/nothing.png" mode="widthFix"></image>
			</view>
			<view class="common-list-right">
				<view class="common-head u-f-ac u-f-jsb">
					<view class="u-f-ac">昵称<view class="icon iconfont  icon-nan">25</view>
					</view>
					<view class="icon iconfont icon-zengjia">关注</view>
				</view>
				<view class="common-title">
					我是简介
				</view>
				<view class="common-image">
					<image src="../../static/image/common/annouce.png" mode="widthFix" lazy-load></image>
				</view>
				<view class="u-f-ac u-f-jsb common-bottom">
					<view>深圳 龙岗</view>
					<view class="u-f-ac icon-list">
						<view class="icon iconfont icon-zhuanfa">10</view>
						<view class="icon iconfont icon-pinglun">20</view>
						<view class="icon iconfont icon-dianzan">30</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
					name: "关注",
					id: "attention"
				}, {
					name: "话题",
					id: "topic"
				}]
			}
		},
		methods: {
			tabChange(index) {
				this.tabIndex = index
			},
			openAdd() {
				uni.navigateTo({
					url: "../release/release"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.top-icon .icon {
		font-size: 45rpx;
	}

	.icon-qiandao {
		margin-left: 12rpx;
		color: #FF9619;
	}

	.icon-bianji {
		margin-left: 30rpx;
	}

	.nav-center {
		width: 100%;
		margin-left: -20rpx;
		position: relative;

		view {
			font-size: 32rpx;
			padding: 0 15rpx;
			font-weight: bold;
			color: #969696;
		}

		.active {
			color: #333333;
		}
	}

	.tab-line {
		position: absolute;
		border-bottom: 6rpx solid #fede33;
		width: 45rpx;
		margin: auto;
		border-top: 6rpx solid #fede33;
		border-radius: 20rpx;
		bottom: -5rpx;
	}

	.common-list {
		padding: 20rpx;
	}

	.common-list-left {
		flex-shrink: 0;

		image {
			width: 90rpx;
			height: 90rpx;
			border-radius: 100%;
		}
	}

	.common-image {
		image {
			width: 100%;
			border-radius: 10rpx;
		}
	}

	.common-list-right {
		flex: 1;
		margin-left: 15rpx;
		border-bottom: 1rpx solid #EEEEEE;
		padding-bottom: 10rpx;
		view {
			&:nth-child(1) {
				color: #999999;
				font-size: 32rpx;
			}

			.icon-nan {
				background-color: #007AFF;
				color: #FFFFFF;
				font-size: 23rpx;
				padding: 5rpx 10rpx;
				margin-left: 15rpx;
				border-radius: 20rpx;
				line-height: 22rpx;
			}
		}

		.common-head .icon-zengjia {
			background-color: #EEEEEE;
			color: #333333;
			font-size: 26rpx;
			padding: 0 10rpx;
		}
	}
	.common-title {
		font-size: 32rpx;
		padding: 12 rpx 0;
	}
	.common-bottom {
		color: #AAAAAA;
		.icon-list {
			fo
			padding-left: 5rpx;
			margin-left: 10rpx;
		}
	}
</style>
