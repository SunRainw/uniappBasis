<template>
	<view class="user-chat-item">
		<view v-if="item.showTime" class="user-chat-time u-f-ajc">{{item.showTime}}</view>
		<view class="user-chat-list u-f" :class="{'user-chat-me': item.isMe}">
			<image :src="item.userPic" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<template v-if="item.type === 'text'">
					<text>{{item.data}}</text>
				</template>
				<template v-else>
					<image :src="item.data" mode="widthFix" lazy-load></image>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style lang="less" scoped>
	.user-chat-list {
		padding: 20rpx 0;
	
		&>image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			flex-shrink: 0;
		}
	}
	
	.user-chat-list-body {
		position: relative;
		background-color: #F4F4F4;
		padding: 25rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		margin-right: 100rpx;
	
		&::after {
			position: absolute;
			left: -30rpx;
			right: 0;
			top: 30rpx;
			content: "";
			width: 0;
			height: 0;
			border: 16rpx solid #F4F4F4;
			border-color: transparent #F4F4F4 transparent transparent;
		}
	
		image {
			max-width: 200rpx;
			max-height: 200rpx;
		}
	}
	
	.user-chat-me {
		// justify-content: flex-end;
		flex-direction: row-reverse;
	
		.user-chat-list-body {
			padding: 25rpx;
			margin-right: 20rpx;
			margin-left: 100rpx;
	
			&::after {
				left: auto;
				right: -30rpx;
				border-color: transparent transparent transparent #F4F4F4;
			}
		}
	}
	
	.user-chat-time {
		padding: 10rpx 0;
		color: #A2A2A2;
		font-size: 24rpx;
	}
</style>
