<template>
	<view class="user-setting-wrap">
		<block v-for="(item, index) in infoList" :key="index">
			<view class="user-setting-infolist u-f-ac u-f-jsb">
				<view class="left">{{item.name}}</view>
				<view class="right u-f-ac" @tap="operate(item.name)">
					<image v-if="item.isImage" class="image" :src="item.data" mode="widthFix" lazy-load></image>
					<view v-if="!item.isImage" class="">{{item.data}}</view>
					<view class="icon iconfont icon-bianji"></view>
				</view>
			</view>
		</block>

		<button type="primary" class="user-setting-btn" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoList: [{
						name: "头像",
						data: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						isImage: true
					},
					{
						name: "昵称",
						data: "王宇",
						isImage: false
					},
					{
						name: "性别",
						data: "男",
						isImage: false
					},
					{
						name: "生日",
						data: "1996-05-03",
						isImage: false
					},
					{
						name: "情感",
						data: "未婚",
						isImage: false
					},
					{
						name: "职业",
						data: "IT",
						isImage: false
					},
					{
						name: "家乡",
						data: "四川达州",
						isImage: false
					}
				]
			}
		},
		methods: {
			operate(text) {
				switch(text) {
					case "头像":
						this.uploadImage()
						break
				}
			},
			uploadImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						this.infoList[0].data = res.tempFilePaths[0]
					}
				})
			},
			submit() {}
		}
	}
</script>

<style scoped>
	@import "/common/common.css";

	.user-setting-infolist {
		padding: 20rpx;
		border-bottom: 1rpx solid #F4F4F4;
	}

	.left {
		font-size: 32rpx;
		font-weight: bold;
		color: #9B9B9B;
	}

	.image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
	}

	.right .icon {
		margin-left: 20rpx;
		color: #9B9B9B;
	}
</style>
