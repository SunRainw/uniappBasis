<template>
	<view class="user-list u-f-ac">
		<image :src="item.userPic" mode="widthFix" lazy-load></image>
		<view class="list-info-left">
			<view class="name">{{item.username}}</view>
			<view style="display: inline-block;">
				<tag-sex-age :item="{sex: item.sex, age: item.age}" />
			</view>
		</view>
		<view class="icon iconfont" :class="item.isAttention? 'icon-xuanze-yixuan': 'icon-zengjia1'"></view>
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

			};
		}
	}
</script>

<style lang="less" scoped>
	.user-list {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #EEEEEE;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			margin-right: 20rpx;
			flex-shrink: 0;
		}

		.list-info-left {
			flex: 1;
		}

		.icon-xuanze-yixuan {
			width: 80rpx;
			color: #CCCCCC;
			font-size: 35rpx;
		}

		.icon-zengjia1 {
			width: 80rpx;
			font-size: 35rpx;
			color: #F8791B;
		}

		.name {
			font-size: 35rpx;
		}
	}
</style>
