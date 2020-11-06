<template>
	<view class="user-userinfo">
		<view class="user-userinfo-item">
			<view class="item-title">账号信息</view>
			<view>糗龄：{{idAge}}天</view>
			<view>糗百ID：{{userInfo.id}}</view>
		</view>
		<view class="user-userinfo-item">
			<view class="item-title">个人信息</view>
			<view>星座：{{constellation}}</view>
			<view>职业：{{userInfo.profession}}</view>
			<view>故乡：{{userInfo.hometown}}</view>
			<view>情感：{{userInfo.emotion}}</view>
		</view>
	</view>
</template>

<script>
	import {
		getConstellationByBornDate,
		getDayDifference
	} from "@/common/time.js"
	export default {
		props: {
			userInfo: Object
		},
		computed: {
			constellation() {
				return getConstellationByBornDate(this.userInfo.birthday)
			},
			idAge() {
				return getDayDifference(this.userInfo.registerDate)
			}
		},
	}
</script>

<style lang="less" scoped>
	.user-userinfo {
		padding: 0 30rpx;
	}

	.user-userinfo-item {
		padding: 15rpx 0;
		border-bottom: 1rpx solid #EEEEEE;

		view {
			color: #AAAAAA;
		}

		.item-title {
			color: #333333;
			font-size: 35rpx;
			padding: 15rpx 0;
		}
	}
</style>
