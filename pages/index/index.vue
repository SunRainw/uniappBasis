<template>
	<view class="container">
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTap="tabTap"></swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in dataList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(index)" v-if="items.list.length > 0">
						<!-- 图文列表 -->
						<index-list v-for="(item, index) in items.list" :key="index" :item="item" />
						<!-- 上拉加载更多 -->
						<load-more :loadText="items.loadText"></load-more>
					</scroll-view>
					<nothing v-else></nothing>
				</swiper-item>

			</swiper>
		</view>

	</view>
</template>

<script>
	import indexList from "@/components/index/index-list.vue"
	import swiperTabHead from "@/components/index/swiperTabHead.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import nothing from "@/components/common/nothing.vue"
	export default {
		components: {
			indexList,
			swiperTabHead,
			loadMore,
			nothing
		},
		data() {
			return {
				tabIndex: 0,
				swiperHeight: 0,
				tabBars: [{
						name: "关注",
						id: "attention"
					},
					{
						name: "推荐",
						id: "recommend"
					},
					{
						name: "体育",
						id: "sport"
					},
					{
						name: "热点",
						id: "hot"
					},
					{
						name: "财经",
						id: "finance"
					},
					{
						name: "娱乐",
						id: "entertainment"
					}
				],
				dataList: [{
						list: [{
								userPic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								username: "王宇",
								isAttention: false,
								title: "我是信息",
								type: "img", // img: 图文，video: 视频
								titlePic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								playNum: "20w",
								long: "2:47",
								evaluateNum: {
									index: 1, // 0：没有操作，1：喜欢，2：不喜欢
									likeNum: 10,
									dislikeNum: 10
								},
								shareNum: 10,
								commentNum: 10
							},
							{
								userPic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								username: "SunRain",
								isAttention: true,
								title: "我是标题",
								type: "video", // img: 图文，video: 视频
								titlePic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								playNum: "20w",
								long: "2:47",
								evaluateNum: {
									index: 1, // 0：没有操作，1：喜欢，2：不喜欢
									likeNum: 10,
									dislikeNum: 10
								},
								shareNum: 10,
								commentNum: 10
							}
						],
						loadText: "上拉加载更多"
					},
					{
						list: [{
								userPic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								username: "王宇",
								isAttention: false,
								title: "我是信息",
								type: "img", // img: 图文，video: 视频
								titlePic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								playNum: "20w",
								long: "2:47",
								evaluateNum: {
									index: 1, // 0：没有操作，1：喜欢，2：不喜欢
									likeNum: 10,
									dislikeNum: 10
								},
								shareNum: 10,
								commentNum: 10
							},
							{
								userPic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								username: "SunRain",
								isAttention: true,
								title: "我是标题",
								type: "video", // img: 图文，video: 视频
								titlePic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
								playNum: "20w",
								long: "2:47",
								evaluateNum: {
									index: 1, // 0：没有操作，1：喜欢，2：不喜欢
									likeNum: 10,
									dislikeNum: 10
								},
								shareNum: 10,
								commentNum: 10
							}
						],
						loadText: "上拉加载更多"
					},
					{
						list: [],
						loadText: "上拉加载更多"
					},
					{
						list: [],
						loadText: "上拉加载更多"
					},
					{
						list: [],
						loadText: "上拉加载更多"
					},
					{
						list: [],
						loadText: "上拉加载更多"
					}
				],
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
				}
			})
		},
		// 监听搜索框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "../search/search"
			})
		},
		onNavigationBarButtonTap(e) {
			e.index === 1 ? uni.navigateTo({
				url: "../release/release"
			}) : ""
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
						userPic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
						username: "SunRain",
						isAttention: true,
						title: "我是标题",
						type: "video", // img: 图文，video: 视频
						titlePic: "//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
						playNum: "20w",
						long: "2:47",
						evaluateNum: {
							index: 1, // 0：没有操作，1：喜欢，2：不喜欢
							likeNum: 10,
							dislikeNum: 10
						},
						shareNum: 10,
						commentNum: 10
					}
					this.dataList[index].list.push(data)
					this.dataList[index].loadText = "上拉加载更多"
				}, 1000)
				// this.dataList[index].loadText = "没有更多数据了"
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {}
</style>
