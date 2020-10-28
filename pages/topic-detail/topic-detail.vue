<template>
	<view>
		<!-- 话题介绍 -->
		<topic-info :topicInfo="topicInfo" />
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :scrollStyle="{borderBottom: 0}" :scrollItemStyle="{width: '50%'}" :tabIndex="tabIndex"
		 @tabTap="tabTap" />
		<view class="topic-detail-list">
			<view class="" v-for="(items, index) in dataList" :key="index" v-if="tabIndex === index">
				<view class="" v-for="(item, index) in items.list" :key="index">
					<common-list :item="item" :index="index"></common-list>
				</view>
				<load-more :loadText="items.loadText"></load-more>
			</view>
		</view>
	</view>
</template>

<script>
	import topicInfo from "@/components/topic/topic-info.vue"
	import swiperTabHead from "@/components/index/swiperTabHead.vue"
	import commonList from "@/components/common/common-list.vue"
	import loadMore from "@/components/common/loadMore.vue"
	export default {
		components: {
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		data() {
			return {
				swiperHeight: 0,
				topicInfo: {
					titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					title: "忆往事，敬余生",
					desc: "哈哈哈哈嘿嘿",
					totalNum: 100,
					todayNum: 50
				},
				tabIndex: 0,
				tabBars: [{
						name: "默认",
						id: "default"
					},
					{
						name: "最新",
						id: "news"
					}
				],
				dataList: [{
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
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeight = res.windowHeight - uni.upx2px(800)
				}
			})
		},
		// 上拉触底
		onReachBottom() {
			this.loadMore(this.tabIndex)
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.pullRefresh()
		},
		methods: {
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
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
			// 上拉刷新
			pullRefresh() {
				setTimeout(() => {
					uni.stopPullDownRefresh()
				}, 2000)
			}
		}
	}
</script>

<style lang="less" scoped>

</style>
