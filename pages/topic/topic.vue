<template>
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabTap="tabTap"></swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items, index) in dataList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(index)" v-if="items.list.length > 0">
						<!-- 图文列表 -->
						<view class="topic-view">
							<topic-list v-for="(item, index) in items.list" :key="index" :item="item" :index="index"></topic-list>
						</view>
						<!-- 上拉加载更多 -->
						<load-more v-if="items.list.length > 6" :loadText="items.loadText"></load-more>
					</scroll-view>
					<nothing v-else></nothing>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import topicList from "@/components/news/topic-list.vue"
	import swiperTabHead from "@/components/index/swiperTabHead.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import nothing from "@/components/common/nothing.vue"
	export default {
		components: {
			topicList,
			swiperTabHead,
			loadMore,
			nothing
		},
		data() {
			return {
				swiperHeight: 0,
				tabBars: [{
						name: "最新",
						id: "news"
					},
					{
						name: "游戏",
						id: "game"
					},
					{
						name: "打卡",
						id: "clockIn"
					},
					{
						name: "情感",
						id: "emotion"
					},
					{
						name: "故事",
						id: "stroy"
					},
					{
						name: "喜爱",
						id: "favorite"
					}
				],
				tabIndex: 0,
				dataList: [{
						list: [{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							},
							{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							},
							{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							}],
						loadText: "上拉加载更多"
					},
					{
						list: [{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							},
							{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							},
							{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							}
						],
						loadText: "上拉加载更多"
					},
					{
						list: [{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							},
							{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
							},
							{
								titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum: 20,
								todayNum: 5
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
						titlePic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						title: "话题名称",
						desc: "我是话题描述",
						totalNum: 20,
						todayNum: 5
					}
					this.dataList[index].list.push(data)
					this.dataList[index].loadText = "上拉加载更多"
				}, 1000)
				// this.dataList[index].loadText = "没有更多数据了"
			}
		}
	}
</script>

<style scoped>
	.topic-view {
		padding: 0 20rpx;
	}
</style>
