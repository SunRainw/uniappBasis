<template>
	<view class="user-wrap">
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :scrollStyle="{borderBottom: 0}" :scrollItemStyle="{width: '33%'}" :tabIndex="tabIndex"
		 @tabTap="tabTap" />
		<!-- 好友列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in dataList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadMore(index)" v-if="items.list.length > 0">
						<!-- 图文列表 -->
						<block v-for="(item, index) in items.list" :key="index">
							<user-list :item="item" :index="index" />
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="items.loadText" v-if="items.list.length>10"></load-more>
					</scroll-view>
					<nothing v-else></nothing>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "@/components/index/swiperTabHead.vue"
	import userList from "@/components/user-list/user-list.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import nothing from "@/components/common/nothing.vue"
	export default {
		components: {
			swiperTabHead,
			userList,
			loadMore,
			nothing
		},
		data() {
			return {
				swiperHeight: 0,
				tabIndex: 0,
				tabBars: [{
						name: "互关",
						id: "Murelate",
						num: 10
					},
					{
						name: "关注",
						id: "attention",
						num: 50
					},
					{
						name: "粉丝",
						id: "fans",
						num: 11
					}
				],
				dataList: [{
						list: [{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								age: 20,
								sex: 0,
								isAttention: false
							},
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "Siri",
								age: 22,
								sex: 1,
								isAttention: true
							}
						],
						loadText: "上拉加载更多"
					},
					{
						list: [{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								age: 20,
								sex: 0,
								isAttention: false
							},
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "Siri",
								age: 22,
								sex: 1,
								isAttention: true
							}
						],
						loadText: "上拉加载更多"
					}, {
						list: [{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "王宇",
								age: 20,
								sex: 0,
								isAttention: false
							},
							{
								userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
								username: "Siri",
								age: 22,
								sex: 1,
								isAttention: true
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
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
				}
			})
		},
		// 监听导航按钮事件
		onNavigationBarButtonTap(e) {
			e.index === 0 ? uni.navigateBack({
				delta: 1
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
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "王宇",
						age: 20,
						sex: 0,
						isAttention: false
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
	.user-wrap {
		padding: 0 20rpx;
	}
</style>
