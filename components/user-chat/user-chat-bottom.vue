<template>
	<view class="user-chat-bottom u-f-ajc animate__animated animate__fadeInDown animate__fast">
		<input type="text" v-model="value" />
		<view class="icon iconfont icon-fabu" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ""
			}
			
		},
		methods:{
			submit() {
				this.$emit("submit", this.value)
				this.value = ""
			}
		}
	}
</script>

<style lang="less" scoped>
	.user-chat-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120rpx;
		padding: 0 20rpx;
		background: #FFFFFF;
		border-top: 1rpx solid #EEEEEE;

		input {
			flex: 1;
			margin-right: 20rpx;
			padding: 10rpx 20rpx;
			border-radius: 10rpx;
			background: #F7F7F7;
		}

		view {
			width: 80rpx;
			font-size: 50rpx;
		}
	}
</style>
