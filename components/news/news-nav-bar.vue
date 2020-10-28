<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" :border="false" @clickRight="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="top-icon">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-center u-f-ajc">
				<view class="u-f-ajc" v-for="(item,index) in tabBars" :key="index" :class="{active: tabIndex === index}" @tap="tabChange(index)">
					{{item.name}}
					<view v-show="tabIndex === index" class="tab-line"></view>
				</view>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="icon iconfont icon-bianji"></view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: { uniNavBar },
		props: {
			tabBars: Array,
			tabIndex: Number
		},
		methods: {
			tabChange(index) {
				this.$emit("tab-change", index)
			},
			openAdd() {
				uni.navigateTo({
					url: "../release/release"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.top-icon .icon {
		font-size: 45rpx;
	}
	
	.icon-qiandao {
		margin-left: 12rpx;
		color: #FF9619;
	}
	
	.icon-bianji {
		margin-left: 30rpx;
	}
	
	.nav-center {
		width: 100%;
		margin-left: -20rpx;
		position: relative;
	
		view {
			font-size: 32rpx;
			padding: 0 15rpx;
			font-weight: bold;
			color: #969696;
		}
	
		.active {
			color: #333333;
		}
	}
	
	.tab-line {
		position: absolute;
		border-bottom: 6rpx solid #fede33;
		width: 45rpx;
		margin: auto;
		border-top: 6rpx solid #fede33;
		border-radius: 20rpx;
		bottom: -5rpx;
	}
</style>
