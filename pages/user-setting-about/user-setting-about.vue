<template>
	<view style="padding: 0 20rpx;">
		<view class="user-about-top u-f-ajc u-f-column">
			<image src="/static/image/common/logo.png" mode="widthFix" lazy-load></image>
			<view>version 1.1.0</view>
		</view>
		<block v-for="(item, index) in list" :key="index">
			<home-list :item="item" :index="index"></home-list>
		</block>
	</view>
</template>

<script>
	import homeList from "@/components/home/home-list.vue"
	export default {
		components: {
			homeList
		},
		data() {
			return {
				list: [{
						name: "新版本检测",
						linkType: "navigateTo",
						url: ""
					},
					{
						name: "糗事百科用户协议",
						linkType: "navigateTo",
						url: ""
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.user-about-top {
		padding: 40rpx 0;

		image {
			width: 65%;
			margin-top: 50rpx;
			margin-bottom: 30rpx;
		}

		view {
			color: #CCCCCC;
		}
	}
</style>
