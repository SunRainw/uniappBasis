<template>
	<view>
		<template v-if="list.length>0">
			<block v-for="(item, index) in list" :key="list">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<load-more :loadText="loadText"></load-more>
		</template>
		<template v-else-if="isSearch && list.length === 0">
			<nothing />
		</template>
	</view>
</template>

<script>
	import indexList from "@/components/index/index-list.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import nothing from "@/components/common/nothing.vue"
	export default {
		components: {
			indexList,
			loadMore,
			nothing
		},
		data() {
			return {
				isSearch: false,
				loadText: "上拉加载更多",
				list: [],
				searchText: ""
			}
		},
		// 监听原生标题点击事件
		onNavigationBarButtonTap(e) {
			e.index === 0 ? uni.navigateBack({
				delta: 1
			}) : ""
		},
		// 输入搜索时监听
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		// 监听点击手机键盘搜索事件
		onNavigationBarSearchInputConfirmed(e) {
			e.text ? this.handleSearch() : this.isSearch = false
		},
		// 监听页面触底事件
		onReachBottom() {
			this.loadMore()
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.handleSearch()
		},
		methods: {
			// 搜索事件
			handleSearch() {
				// this.searchText
				uni.showLoading()
				setTimeout(() => {
					const data = [{
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
					}]
					this.list = data
					this.isSearch = true
					uni.stopPullDownRefresh()
					uni.hideLoading()
				}, 2000)
			},
			loadMore() {
				// 触底事件，上拉加载
				if (this.loadText !== "上拉加载更多") return
				this.loadText = "加载中"
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
					this.list.push(data)
					this.loadText = "上拉加载更多"
				}, 1000)
				// this.loadText = "没有更多数据了"
			}
		}
	}
</script>

<style>

</style>
