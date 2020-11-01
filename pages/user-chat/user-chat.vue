<template>
	<view class="user-chat">
		<!-- 聊天列表 -->
		<scroll-view id="scroll-view" scroll-y :scroll-top="scrollTop" :scroll-with-animation="true" :style="{ height: style.contentH +'px' }" @scroll="scroll">
			<block v-for="(item, index) in list" :key="index">
				<user-chat-list :item="item" :index="index"></user-chat-list>
			</block>
		</scroll-view>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import { getShowTime, getEachTime } from "@/common/time.js"
	import userChatBottom from "@/components/user-chat/user-chat-bottom.vue"
	import userChatList from "@/components/user-chat/user-chat-list.vue"
	export default {
		components: {
			userChatBottom,
			userChatList
		},
		data() {
			return {
				list: [{
						isMe: false,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						type: "text",
						data: "哈哈哈哈",
						time: 1604029339
					}, {
						isMe: true,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						type: "image",
						data: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
						time: 1604029386
					}, {
						isMe: true,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						type: "image",
						data: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
						time: 1604029887
					}, {
						isMe: true,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						type: "text",
						data: "要下班了",
						time: 1604050986
					}
				],
				style: {
					contentH: 0,
					itemH: 0
				},
				scrollTop: 0
			}
		},
		onLoad() {
			this.list = getShowTime(this.list)
			this.initData()
		},
		onReady() {
			this.pageToBottom()
		},
		methods: {
			scroll(e) {
				console.info(e)
			},
			pageToBottom() {
				let ele = uni.createSelectorQuery()
				ele.select("#scroll-view").boundingClientRect()
				ele.selectAll(".user-chat-item").boundingClientRect()
				ele.exec(res => {
					let height = 0
					res[1].forEach(item => {
						this.style.itemH += item.height
					})
					if(this.style.itemH > this.style.contentH) {
						height += this.style.itemH - this.style.contentH
					}
					this.scrollTop = height
				})
			},
			initData() {
				try {
					const res = uni.getSystemInfoSync()
					this.style.contentH = res.windowHeight - uni.upx2px(120)
				} catch(e) {}
			},
			submit(value) {
				// 构建数据
				const date = new Date().valueOf()
				let data = {
					isMe: true,
					userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					type: "text",
					data: value,
					time: date,
					showTime: getEachTime(date, this.list[this.list.length - 1].time)
				}
				this.list.push(data)
				this.$nextTick(() => {
					this.pageToBottom()
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.user-chat {
		padding: 0 20rpx;
	}
</style>
