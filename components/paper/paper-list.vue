<template>
	<view class="paper-list u-f-ac  animate__animated animate__fadeInLeft animate__fast" @tap="toUserDetail">
		<image :src="item.userPic" mode="widthFix" lazy-load></image>
		<view class="list-right">
			<view class="u-f-ac u-f-jsb"><text class="username">{{item.username}}</text><text class="time">{{item.time}}</text></view>
			<view class="u-f-ac u-f-jsb"><text class="message">{{item.message}}</text>
				<uni-badge :text="item.messageNum" type="error"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		components: {
			uniBadge
		},
		props: {
			item: Object,
			index: Number
		},
		methods: {
			toUserDetail() {
				uni.navigateTo({
					url: "../../pages/user-chat/user-chat"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.paper-list {
		border-bottom: 1rpx solid #EEEEEE;
		padding: 20rpx 0;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			margin-right: 20rpx;
			flex-shrink: 0;
		}
	}

	.list-right {
		flex: 1;
	}

	.time {
		color: #CBCBCB;
	}

	.message {
		color: #999999;
	}

	.username {
		font-size: 35rpx;
	}
</style>
