<template>
	<view>
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @tab-change="tabChange"></news-nav-bar>
		<!-- 列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}" :current="tabIndex" @change="swiperChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadMore()" v-if="attentionList.list.length > 0">
						<common-list v-for="(item, index) in attentionList.list" :key="index" :item="item" :index="index"></common-list>
						<!-- 上拉加载更多 -->
						<load-more :loadText="attentionList.loadText"></load-more>
					</scroll-view>
					<nothing v-else></nothing>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder="搜索内容" placeholder-class="icon iconfont icon-sousuo topic-search" />
						</view>
						<!-- 轮播图 -->
						<swiper class="top-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<swiper-item v-for="(item, index) in topicList.swiper" :key="index">
								<image :src="item.src" mode="widthFix"></image>
							</swiper-item>
						</swiper>
						<!-- 热门分类 -->
						<topic-nav :nav="topicList.nav"></topic-nav>
						<!-- 最近更新 -->
						<view class="topic-list">
							<view class="list-title">最近更新</view>
							<topic-list v-for="(item, index) in topicList.list" :key="index" :item="item" :index="index"></topic-list>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import newsNavBar from "@/components/news/news-nav-bar.vue"
	import commonList from "@/components/common/common-list.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import nothing from "@/components/common/nothing.vue"
	import topicNav from "@/components/news/topic-nav.vue"
	import topicList from "@/components/news/topic-list.vue"
	export default {
		components: {
			commonList,
			newsNavBar,
			nothing,
			loadMore,
			topicNav,
			topicList
		},
		data() {
			return {
				swiperHeight: 0,
				tabIndex: 0,
				tabBars: [{
					name: "关注",
					id: "attention"
				}, {
					name: "话题",
					id: "topic"
				}],
				attentionList: {
					list: [
						// 图文
						{
							userPic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
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
							userPic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
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
							userPic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
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
				topicList: {
					swiper: [{
							src: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg"
						},
						{
							src: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB"
						},
						{
							src: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg"
						}
					],
					nav: [{
							name: "最新"
						},
						{
							name: "游戏"
						},
						{
							name: "打卡"
						},
						{
							name: "情感"
						},
						{
							name: "故事"
						},
						{
							name: "喜爱"
						}
					],
					list: [{
							titlePic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
							title: "话题名称",
							desc: "我是话题描述",
							totalNum: 20,
							todayNum: 5
						},
						{
							titlePic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
							title: "话题名称",
							desc: "我是话题描述",
							totalNum: 20,
							todayNum: 5
						},
						{
							titlePic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
							title: "话题名称",
							desc: "我是话题描述",
							totalNum: 20,
							todayNum: 5
						}
					]
				}
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
			// 点击切换
			tabChange(index) {
				this.tabIndex = index
			},
			// 滑动切换
			swiperChange(e) {
				this.tabIndex = e.detail.current
			},
			loadMore() {
				// 触底事件，上拉加载
				if (this.attentionList.loadText !== "上拉加载更多") return
				this.attentionList.loadText = "加载中"
				setTimeout(() => {
					const data = {
						userPic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
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
					this.attentionList.list.push(data)
					this.attentionList.loadText = "上拉加载更多"
				}, 2000)
				// this.dataList[index].loadText = "没有更多数据了"
			}
		}
	}
</script>

<style lang="less" scoped>
	.search-input {
		padding: 20rpx;

		input {
			background: #f4f4f4;
			border-radius: 10rpx;
		}
	}

	.topic-search {
		display: flex;
		justify-content: center;
		font-size: 28rpx;
	}

	.top-swiper {
		padding: 0 20rpx 20rpx 20rpx;

		image {
			width: 100%;
			border-radius: 10rpx;
		}
	}

	.list-title {
		color: #333333;
		padding: 10rpx 20rpx 0;
		font-size: 32rpx;
	}
</style>
