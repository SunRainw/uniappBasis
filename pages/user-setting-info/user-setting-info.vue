<template>
	<view class="user-setting-wrap">
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">头像</view>
			<view class="right u-f-ac" @tap="uploadImage">
				<image class="image" :src="imageSrc" mode="widthFix" lazy-load></image>
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</view>
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">昵称</view>
			<view class="right u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</view>
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">性别</view>
			<view class="right u-f-ac" @tap="handleChange('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</view>
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">生日</view>
			<picker mode="date" v-moel="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
			<view class="right u-f-ac" @tap="">
				<view>{{birthday}}</view>
				<view class="icon iconfont icon-bianji"></view>
			</view>
			</picker>
		</view>
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">情感</view>
			<view class="right u-f-ac" @tap="handleChange('emotion')">
				<view>{{emotion}}</view>
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</view>
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">职业</view>
			<view class="right u-f-ac" @tap="handleChange('profession')">
				<view>{{profession}}</view>
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</view>
		<view class="user-setting-infolist u-f-ac u-f-jsb">
			<view class="left">家乡</view>
			<view class="right u-f-ac" @tap="showCityPick">
				<view>{{hometown}}</view>
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</view>
		<button type="primary" class="user-setting-btn" @tap="submit">完成</button>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/mpvue-citypicker/mpvueCityPicker.vue"
	const sexList = Object.freeze(["不限", "男", "女"])
	const emotionList = Object.freeze(["秘密", "未婚", "已婚"])
	const professionList = Object.freeze(["秘密", "IT", "教师", "公务员", "销售"])
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				imageSrc: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
				username: "王宇",
				sex: "男",
				birthday: "1994-06-01",
				emotion: "未婚",
				profession: "IT",
				hometown: "四川成都",
				themeColor: "#007AFF",
				cityPickerValueDefault: [0, 0, 1],
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onBackPress() {
			this.destoryPick()
		},
		onUpload() {
			this.destoryPick()
		},
		methods: {
			uploadImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						this.imageSrc = res.tempFilePaths[0]
					}
				})
			},
			handleChange(value) {
				let arr = []
				switch(value) {
					case "sex":
						arr = sexList
						break
					case "emotion":
						arr = emotionList
						break
					case "profession":
						arr = professionList
						break
				}
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this[value] = arr[res.tapIndex]
					}
				})
			},
			showCityPick() {
				this.$refs.mpvueCityPicker.show()
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			 bindDateChange(e) {
				this.birthday = e.target.value
			},
			onConfirm(e) {
				this.hometown = e.label
			},
			destoryPick() {
				if(this.$refs.mpvueCityPick.showPicker) {
					this.$res.mpvueCityPick.pickerCancel()
					return true
				}
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
	.right input {
		font-size: 28rpx;
		text-align: right;
	}
</style>
