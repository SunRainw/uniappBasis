<template>
	<view>
		<!-- 话题介绍 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :scrollStyle="'width: 50%'" :scrollItemStyle="'border-bottom: 0'" :tabIndex="tabIndex" @tabTap="tabTap"></swiper-tab-head>
	</view>
</template>

<script>
	import topicInfo from "@/components/topic/topic-info.vue"
	import swiperTabHead from "@/components/index/swiperTabHead.vue"
	export default {
		components: {
			topicInfo,
			swiperTabHead
		},
		data() {
			return {
				topicInfo: {
					titlePic: "https://lh3.googleusercontent.com/proxy/BMExtcDP8VbSZMqKFWn1FpP4g0wSr3tkssg48LMaWc8Tgd2dW9bfLtAyR37nMs-ViCuTipfSVn5nrEtzkiZfF8VzR7BsWhFZ-k6sm1n5h76LlylB",
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
				]
			}
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

</style>
