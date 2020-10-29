<template>
	<view>
		<view class="paper-poppup-mask" @tap="hidePopup" v-show="showPopup"></view>
		<view class="paper-right-popup" v-show="showPopup">
			<view class="u-f-ac" hover-class="paper-popup-hover" @tap="addFriend"><text class="icon iconfont icon-sousuo"></text><text>加糗友</text></view>
			<view class="u-f-ac" hover-class="paper-popup-hover" @tap="clear"><text class="icon iconfont icon-qingchu"></text><text>清楚缓存</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showPopup: Boolean
		},
		methods: {
			hidePopup() {
				this.$emit("hide")
			},
			addFriend() {
				this.$emit("addFriend")
			},
			clear() {
				this.$emit("clear")
			}
		}
	}
</script>

<style lang="less" scoped>
	.paper-right-popup {
		position: fixed;
		right: 0;
		top: 100rpx;
		background: #FFFFFF;
		width: 55%;
		z-index: 999;
		box-shadow: 1rpx 1rpx 20rpx 2rpx #CCCCCC;

		view {
			padding: 20rpx;
		}

		.text {
			font-size: 35rpx;
		}

		.icon {
			font-weight: bold;
			margin-right: 10rpx;
		}
	}

	.paper-popup-hover {
		background-color: #EEEEEE;
	}

	.paper-poppup-mask {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 998;
	}
</style>
