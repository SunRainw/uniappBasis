<template>
	<view class="user-top u-f-ajc">
		<image :src="getBgImage" mode="widthFix" lazy-load @tap="changeBgImage"></image>
		<view class="user-top-info u-f-ajc u-f-column">
			<image :src="userInfo.userPic" mode="widthFix" lazy-load></image>
			<view class="user-margin u-f-ac">
				<view class="username">{{userInfo.username}}</view>
				<tag-sex-age :item="{sex: userInfo.sex, age: userInfo.age}"></tag-sex-age>
			</view>
			<view class="icon iconfont user-margin attention-icon" :class="isAttention ? 'active': 'icon-zengjia'" @tap="handleAttention">{{isAttention ? "已关注" : "关注"}}</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "@/components/common/tag-sex-age.vue"
	export default {
		components: {
			tagSexAge
		},
		props: {
			userInfo: Object
		},
		data() {
			return {
				isAttention: this.userInfo.isAttention,
				bgImage: this.userInfo.bgImage
			}
		},
		computed: {
			getBgImage() {
				return `/static/image/user-bg/${this.bgImage}.jpg`
			}
		},
		methods: {
			changeBgImage() {
				this.bgImage < 4 ? this.bgImage++ : this.bgImage = 1
			},
			handleAttention() {
				this.isAttention = !this.isAttention
			}
		}
	}
</script>

<style lang="less" scoped>
	.user-top {
		position: relative;
		height: 500rpx;
		overflow: hidden;

		&>image {
			width: 100%;
		}
	}

	.user-top-info {
		position: absolute;
		top: 150rpx;

		&>image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 100%;
		}

		view:first-of-type {
			color: #FFFFFF;
			font-size: 35rpx;
			font-weight: bold;
			text-shadow: 2rpx 2rpx 10rpx #333333;
		}

		.attention-icon {
			background: #FFE933;
			color: #333333;
			border: 1rpx solid #FFE933;
			padding: 0 15rpx;
			border-radius: 10rpx;
			font-size: 28rpx;
		}

		.active {
			background: none;
			color: #FFFFFF;
			border-color: #FFFFFF;
		}
	}

	.username {
		margin-right: 10rpx;
	}
</style>
