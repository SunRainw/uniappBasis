<template>
	<view>
		<uni-nav-bar :statusBar="true" left-icon="back" rightText="发布" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc" style="margin: auto;" @tap="onChange">
				{{headerText}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<textarea v-model="textValue" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图 -->
		<upload-images @upload="getImageList" />
		<uni-popup id="popup" ref="popup" type="center">
			<view class="popup-content">
				<view class="u-f-ajc">
					<image src="../../static/image/common/annouce.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色、政治、广告及骚扰信息</view>
				<view>2.涉及人身攻击</view>
				<view>3.留联系方式，透露他人隐私</view>
				<view>一经核实将被封禁，情节严重者永久封禁</view>
				<button type="primary" @tap="closeModal">朕知道了哦</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImages from "@/components/common/uploadImages.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	const headerList = Object.freeze(['所有人可见', '仅自己可见'])
	export default {
		components: { uniNavBar, uploadImages, uniPopup },
		data() {
			return {
				headerText: "所有人可见",
				textValue: "",
				imageList: [],
				isConfirmSave: false
			}
		},
		onShow() {
			this.$nextTick(() => {
				this.$refs.popup.open()
			})
		},
		onBackPress() {
			if(!this.textValue && this.imageList < 1) return
			if(!this.isConfirmSave) {
				this.handleSave()
				return true
			}
		},
		methods: {
			// 返回事件
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 发布时间
			submit() {
			},
			// 是否保存为草稿
			handleSave() {
				uni.showModal({
					content: "是否要保存为草稿？",
					cancelText: "不保存",
					confirmText:"保存",
					success: res=> {
						res.confirm ? console.info("保存"):console.info("保存")
						this.isConfirmSave = true
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			// 权限变更
			onChange() {
				uni.showActionSheet({
					itemList: ['所有人可见', '仅自己可见'],
					success: res => {
						this.headerText = headerList[res.tapIndex]
					}
				});
			},
			getImageList(imageList) {
				this.imageList = imageList
			},
			closeModal() {
				this.$refs.popup.close()
			}
		},
	}
</script>

<style lang="less" scoped>
textarea {
	border: 1px solid #EEEEEE;
}
.popup-content {
	background: #FFFFFF;
	padding: 20rpx 30rpx;
	border-radius: 10rpx;
	image {
		width: 70%;
		margin-bottom: 20rpx;
	}
	button {
		margin-top: 20rpx;
		background-color: #FFE934;
		color: #171606;
	}
}
</style>
