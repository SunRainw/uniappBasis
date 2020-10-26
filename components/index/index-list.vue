<template>
	<view class="item-wrap animate__animated animate__fadeInLeft animate__fast">
		<view class="item-top u-f-ac u-f-jsb">
			<view class="top-left u-f-ac">
				<image :src="item.userPic" lazy-load></image>
				<text>{{item.username}}</text>
			</view>
			<view class="top-right" v-show="!item.isAttention" @tap="handleAttention">
				<view class="icon iconfont icon-zengjia">关注</view>
			</view>
		</view>
		<view class="item-title">{{item.title}}</view>
		<view class="item-image u-f-ajc">
			<view class="icon iconfont icon-bofang" v-if="item.type==='img'"></view>
			<image src="//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112"></image>
			<view class="play-info" v-if="item.type==='img'">播放量: {{item.playNum}} 时长: {{item.long}}</view>
		</view>
		<view class="item-bottom u-f-ac u-f-jsb">
			<view class="bottom-left u-f-ac">
				<view :class="{active: item.evaluateNum.index === 1}" @click="handleLike(0)"><text class="icon iconfont icon-icon_xiaolian-mian"></text>{{item.evaluateNum.likeNum}}</view>
				<view :class="{active: item.evaluateNum.index === 2}" @click="handleLike(1)"><text class="icon iconfont icon-kulian"></text>{{item.evaluateNum.dislikeNum}}</view>
			</view>
			<view class="bottom-right u-f-ac">
				<view><text class="icon iconfont icon-xiaoxi2"></text>{{item.commentNum}}</view>
				<view><text class="icon iconfont icon-zhuanfa"></text>{{item.shareNum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {
						userPic: "",
						username: "",
						isAttention: true,
						title: "",
						type: "", // img: 图文，video: 视频
						titlePic: "",
						playNum: "",
						long: "",
						evaluateNum: {
							index: 1, // 0：没有操作，1：喜欢，2：不喜欢
							likeNum: 10,
							dislikeNum: 10
						},
						shareNum: 10,
						commentNum: 10
					}
				}
			}
		},
		data() {
			return {};
		},
		methods: {
			handleAttention() {
				this.item.isAttention = true
				uni.showToast({
					title: "关注成功!"
				})
			},
			handleLike(type) {
				// type: 0 表示喜欢，1表示不喜欢
				if (type === 0) {
					if (this.item.evaluateNum.index === 1) return
					this.item.evaluateNum.likeNum++
					this.item.evaluateNum.index === 2 ? this.item.evaluateNum.dislikeNum-- : ""
					this.item.evaluateNum.index = 1
				} else {
					if (this.item.evaluateNum.index === 2) return
					this.item.evaluateNum.dislikeNum++
					this.item.evaluateNum.index === 1 ? this.item.evaluateNum.likeNum-- : ""
					this.item.evaluateNum.index = 2
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.item-wrap {
		padding: 20rpx 15rpx 0;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.item-top {
		image {
			width: 90rpx;
			height: 90rpx;
			border-radius: 100%;
			margin-right: 10rpx;
		}

		text {
			color: #999999;
		}

		.top-right>view {
			padding: 0 10rpx;
			border-radius: 5rpx;
			background-color: #f4f4f4;
		}
	}

	.item-title {
		padding: 15rpx 0;
		font-size: 32rpx;
	}

	.item-image {
		position: relative;

		.icon {
			position: absolute;
			font-size: 140rpx;
			color: #fff;
			z-index: 10;
		}

		image {
			width: 100%;
			border-radius: 20rpx;
		}

		.play-info {
			position: absolute;
			background: rgba(51, 51, 51, .72);
			color: #fff;
			bottom: 8rpx;
			right: 8rpx;
			border-radius: 40rpx;
			padding: 22rpx;
			padding: 0 12rpx;
		}
	}

	.item-bottom {
		padding: 15rpx 0;
		color: #999999;

		& view>view {
			margin-left: 15rpx;
		}

		.icon {
			margin-right: 10rpx;
		}
	}

	.active {
		color: #FFDF34;
	}
</style>
