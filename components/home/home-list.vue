<template>
	<view class="home-list-item u-f-ac u-f-jsb" hover-class="home-list-hover" @tap="linkTo">
		<view class="u-f-ac left">
			<text v-if="item.icon" class="icon iconfont" :class="'icon-' + item.icon"></text>
			<text>{{item.name}}</text>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			linkTo() {
				switch(this.item.linkType) {
					case "navigateTo":
						this.item.url ? uni.navigateTo({ url: this.item.url }) : ""
						break
					case "switchTab":
						this.item.url ? uni.switchTab({	url: this.item.url }) : ""
						break
					case "clear":
						uni.showToast({
							title: "提示",
							content: "是否要清除缓存？",
							confirmText: "立即清除",
							success: res => {
								if(res.confirm) {
									uni.clearStorage()
									uni.showToast({
										title:"清除缓存成功！"
									})
								}
							}
						})
						break
					default:
						""
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.home-list-item {
		padding: 20rpx;
		border-top: 1rpx solid #F4F4F4;
		border-bottom: 1rpx solid #F4F4F4;
	
		.icon-jinru {
			color: #CCCCCC;
		}
	
		.left .icon {
			font-size: 40rpx;
			margin-right: 10rpx;
		}
	
		.icon-liulan {
			color: #2CAEFC;
	
		}
		.icon-huiyuanvip {
			color: orange;
		}
		.icon-keyboard {
			color: skyblue;
		}
	}
	
	.home-list-hover {
		background-color: #EFEFEF;
	}
</style>
