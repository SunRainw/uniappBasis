<template>
	<view>
		<!-- 用户信息 -->
		<user-center-head :userInfo="userInfo"></user-center-head>
		<!-- 统计 -->
		<view class="user-center-stat">
			<home-data :homeData="homeData"></home-data>
		</view>
		<view style="height: 20rpx; background-color: #F4F4F4;"></view>
		<!-- 导航 -->
		<swiper-tab-head :tabBars="tabBars" :scrollStyle="{borderBottom: 0}" :scrollItemStyle="{width: '33%'}" :tabIndex="tabIndex"
		 @tabTap="tabTap" />

		<!-- 主页 -->

		<view class="topic-detail-list">
			<template v-if="tabIndex===0">
				<user-center-userinfo :userInfo="userInfo"></user-center-userinfo>
			</template>
			<template v-else>
				<view>
					<view v-for="(items, index) in dataList" :key="index" v-if="tabIndex === index">
						<view v-for="(item, index) in items.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</view>
						<load-more :loadText="items.loadText"></load-more>
					</view>
				</view>
			</template>
		</view>
		<!-- 操作菜单 -->
		<user-center-popup :showPopup="showPopup" @hide="hidePopup" @pullBlack="pullBlack" @remarks="remarks"></user-center-popup>
	</view>
</template>

<script>
	import userCenterHead from "@/components/user-center/user-center-head.vue"
	import homeData from "@/components/home/home-data.vue"
	import swiperTabHead from "@/components/index/swiperTabHead.vue"
	import userCenterUserinfo from "@/components/user-center/user-center-userinfo.vue"
	import commonList from "@/components/common/common-list.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import userCenterPopup from "@/components/user-center/user-center-popup.vue"
	export default {
		components: {
			userCenterHead,
			homeData,
			swiperTabHead,
			userCenterUserinfo,
			commonList,
			loadMore,
			userCenterPopup
		},
		data() {
			return {
				showPopup: false,
				userInfo: {
					bgImage: 1,
					userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					username: "王宇",
					sex: 0,
					age: 20,
					isAttention: false,
					registerDate: '2019-05-04',
					id: 1111,
					birthday: "1994-06-01",
					emotion: "未婚",
					profession: "IT",
					hometown: "四川成都",
				},
				homeData: [{
						num: "10k",
						name: "获赞"
					},
					{
						num: 11,
						name: "关注"
					},
					{
						num: 12,
						name: "评论"
					}
				],
				tabIndex: 0,
				tabBars: [{
						name: "主页",
						id: "home"
					},
					{
						name: "糗事",
						id: "news"
					},
					{
						name: "动态",
						id: "dynamic"
					}
				],
				dataList: [{}, {
						list: [
							// 图文
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								sex: 0, // 0为男，1为女
								age: 20,
								isAttention: false,
								title: "哈哈哈哈哈哈",
								titlePic: "",
								video: false,
								share: false,
								address: "深圳 龙岗",
								shareNum: 20,
								commentNum: 30,
								likeNum: 20,
							},
							// 视频
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "Mary",
								sex: 1, // 0为男，1为女
								age: 20,
								isAttention: false,
								title: "哈哈哈哈哈哈",
								titlePic: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
								video: {
									playNum: "20w",
									long: "2:31"
								},
								share: false,
								address: "深圳 龙岗",
								shareNum: 20,
								commentNum: 30,
								likeNum: 20
							},
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								sex: 0, // 0为男，1为女
								age: 20,
								isAttention: false,
								title: "哈哈哈哈哈哈",
								titlePic: "",
								video: false,
								share: {
									title: "哈哈哈哈哈哈哈哈",
									titlePic: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg"
								},
								address: "深圳 龙岗",
								shareNum: 20,
								commentNum: 30,
								likeNum: 20,
							}
						],
						loadText: "上拉加载更多"
					},
					{
						list: [
							// 图文
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								sex: 0, // 0为男，1为女
								age: 20,
								isAttention: false,
								title: "哈哈哈哈哈哈",
								titlePic: "",
								video: false,
								share: false,
								address: "深圳 龙岗",
								shareNum: 20,
								commentNum: 30,
								likeNum: 20,
							},
							// 视频
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "Mary",
								sex: 1, // 0为男，1为女
								age: 20,
								isAttention: false,
								title: "哈哈哈哈哈哈",
								titlePic: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
								video: {
									playNum: "20w",
									long: "2:31"
								},
								share: false,
								address: "深圳 龙岗",
								shareNum: 20,
								commentNum: 30,
								likeNum: 20,
							},
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								sex: 0, // 0为男，1为女
								age: 20,
								isAttention: false,
								title: "哈哈哈哈哈哈",
								titlePic: "",
								video: false,
								share: {
									title: "哈哈哈哈哈哈哈哈",
									titlePic: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg"
								},
								address: "深圳 龙岗",
								shareNum: 20,
								commentNum: 30,
								likeNum: 20,
							}
						],
						loadText: "上拉加载更多"
					}
				]
			}
		},
		onReachBottom() {
			this.loadMore(this.tabIndex)
		},
		// 监听导航按钮点击
		onNavigationBarButtonTap(e) {
			console.info(e)
			e.index === 0 ? this.handleShowPopup() : (uni.navigateBack({
				delta: 1
			}), this.hidePopup())
		},
		methods: {
			tabTap(index) {
				this.tabIndex = index
			},
			loadMore(index) {
				// 触底事件，上拉加载
				if (this.dataList[index].loadText !== "上拉加载更多") return
				this.dataList[index].loadText = "加载中"
				setTimeout(() => {
					const data = {
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "王宇",
						sex: 0, // 0为男，1为女
						age: 20,
						isAttention: false,
						title: "哈哈哈哈哈哈",
						titlePic: "",
						video: false,
						share: {
							title: "哈哈哈哈哈哈哈哈",
							titlePic: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg"
						},
						address: "深圳 龙岗",
						shareNum: 20,
						commentNum: 30,
						likeNum: 20,
					}
					this.dataList[index].list.push(data)
					this.dataList[index].loadText = "上拉加载更多"
				}, 1000)
				// this.dataList[index].loadText = "没有更多数据了"
			},
			// 拉黑
			pullBlack() {
				this.hidePopup()
			},
			// 备注
			remarks() {
				this.hidePopup()
			},
			hidePopup() {
				this.showPopup = false
			},
			handleShowPopup() {
				this.showPopup = true
			}
		}
	}
</script>

<style lang="less" scoped>
	.user-margin {
		margin: 15rpx 0;
	}

	.user-center-stat {
		background-color: #FFFFFF;
		position: relative;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: -15rpx;
	}
</style>
