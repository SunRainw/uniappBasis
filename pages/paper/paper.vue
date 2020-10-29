<template>
	<view class="paper-wrap">
		<!-- 操作菜单 -->
		<paper-right-popup :showPopup="showPopup" @hide="hidePopup" @addFriend="addFriend" @clear="clear"></paper-right-popup>
		<!-- 小字条列表 -->
		<block v-for="(item, index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<load-more :loadText="loadText" :v-if="this.list.length>10" />
	</view>
</template>

<script>
	import paperList from "@/components/paper/paper-list.vue"
	import loadMore from "@/components/common/loadMore.vue"
	import paperRightPopup from "@/components/paper/paper-right-popup.vue"
	export default {
		components: {
			paperList,
			loadMore,
			paperRightPopup
		},
		data() {
			return {
				showPopup: false,
				list: [{
					userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					username: "昵称",
					time: "13:58",
					message: "我是消息我是消息",
					messageNum: 10
				}],
				loadText: "上拉加载更多"
			}
		},
		onPullDownRefresh() {
			this.pullRefresh()
		},
		onReachBottom() {
			this.loadMore()
		},
		// 监听导航按钮点击
		onNavigationBarButtonTap(e) {
			e.index === 1 ? this.handleShowPopup() : (uni.navigateTo({
				url: "../user-list/user-list"
			}), this.hidePopup())
		},
		methods: {
			pullRefresh() {
				setTimeout(() => {
					this.list = [{
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "昵称12314",
						time: "14:00",
						message: "我是消息我是消息",
						messageNum: 1
					}, {
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "昵称222",
						time: "13:59",
						message: "我是消息我是消息",
						messageNum: 0
					}]
					uni.stopPullDownRefresh()
				}, 2000)
			},
			loadMore(index) {
				// 触底事件，上拉加载
				if (this.loadText !== "上拉加载更多") return
				this.loadText = "加载中"
				setTimeout(() => {
					const data = {
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "昵称12314",
						time: "14:00",
						message: "我是消息我是消息",
						messageNum: 1
					}
					this.list.push(data)
					this.loadText = "上拉加载更多"
				}, 1000)
				// this.loadText = "没有更多数据了"
			},
			// 加好友
			addFriend() {
				this.hidePopup()
			},
			// 清楚缓存
			clear() {
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
	.paper-wrap {
		padding: 0 20rpx;
	}
</style>
