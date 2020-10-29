<template>
	<view class="common-list u-f animate__animated animate__fadeInLeft animate__fast">
		<view class="common-list-left">
			<image :src="item.userPic" mode="widthFix"></image>
		</view>
		<view class="common-list-right">
			<view class="common-head u-f-ac u-f-jsb">
				<view class="u-f-ac">
					<view class="username">{{item.username}}</view>
					<tag-sex-age :item="{sex: item.sex, age: item.age}"></tag-sex-age>
				</view>
				<view v-show="!isAttention" class="icon iconfont icon-zengjia" @tap="handleAttention">关注</view>
			</view>
			<view class="common-title">
				{{item.title}}
			</view>
			<view class="common-image u-f-ajc">
				<image v-if="item.titlePic" :src="item.titlePic" mode="widthFix" lazy-load></image>
				<view class="icon iconfont icon-bofang" v-if="item.video"></view>
				<view class="common-list-playinfo" v-if="item.video">播放量: {{item.video.playNum}} 时长: {{item.video.long}}</view>
			</view>
			<view class="common-list-share u-f-ac" v-if="item.share">
				<image :src="item.share.titlePic" mode="widthFix" lazy-load></image>
				<view>{{item.share.title}}</view>
			</view>
			<view class="u-f-ac u-f-jsb common-bottom">
				<view>{{item.address}}</view>
				<view class="u-f-ac icon-list">
					<view class="icon iconfont icon-zhuanfa">{{item.shareNum}}</view>
					<view class="icon iconfont icon-xiaoxi2">{{item.commentNum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.likeNum}}</view>
				</view>
			</view>
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
			item: Object,
			index: Number
		},
		data() {
			return {
				isAttention: this.item.isAttention
			}
		},
		methods: {
			handleAttention() {
				this.isAttention = true
				uni.showToast({
					title: "关注成功"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
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
		position: relative;

		image {
			width: 100%;
			border-radius: 10rpx;
		}

		.icon-bofang {
			position: absolute;
			font-size: 130rpx;
			color: #FFFFFF;
		}

		.common-list-playinfo {
			position: absolute;
			font-size: 26rpx;
			color: #FFFFFF;
			padding: 0 20rpx;
			background: rgba(51, 51, 51, .72);
			border-radius: 20rpx;
			bottom: 10rpx;
			right: 5rpx;
		}
	}

	.common-list-right {
		flex: 1;
		margin-left: 15rpx;
		border-bottom: 1rpx solid #EEEEEE;
		padding-bottom: 10rpx;

		view {
			.username {
				color: #999999;
				font-size: 32rpx;
				margin-right: 15rpx;
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
		margin-top: 10rpx;
		font-size: 28rpx;

		.icon-list .icon {
			font-size: 28rpx;
			padding-left: 5rpx;
			margin-left: 10rpx;
		}
	}

	.common-list-share {
		background: #EEEEEE;
		// width: 100%;
		padding: 10rpx;
		border-radius: 10rpx;
		margin-right: 10rpx;

		image {
			width: 200rpx;
			height: 150rpx;
			margin-right: 10rpx;
		}
	}
</style>
