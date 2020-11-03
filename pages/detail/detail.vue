<template>
	<view>
		<!-- 详情 -->
		<detail-info :item="detail" />
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<!-- 评论列表 -->
		<view class="uni-comment">
			<block v-for="(item, index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<view style="height: 120rpx;"></view>
		<!-- 输入 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
		<!-- 分享 -->
		<share v-if="shareShow" @reset="reset"></share>
	</view>
</template>

<script>
	import detailInfo from "@/components/detail/detail-info.vue"
	import commentList from "@/components/detail/comment-list.vue"
	import userChatBottom from "@/components/user-chat/user-chat-bottom.vue"
	import share from "@/components/common/share.vue"
	import {
		getShowTime,
		getTime
	} from "@/common/time.js"
	export default {
		components: {
			detailInfo,
			commentList,
			userChatBottom,
			share
		},
		data() {
			return {
				shareShow: false,
				detail: {
					morePic: ["//pic.qiushibaike.com/article/image/S24ZYNEQUGLG0ALH.jpg?imageView2/1/w/150/h/112",
						"https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg"
					],
					userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					username: "Mary",
					sex: 1, // 0为男，1为女
					age: 20,
					isAttention: false,
					time: "26天前",
					title: "哈哈哈哈哈哈",
					titlePic: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg",
					video: false,
					share: false,
					address: "深圳 龙岗",
					shareNum: 20,
					commentNum: 30,
					likeNum: 20,
				},
				comment: {
					count: 20,
					list: []
				}
			}
		},
		onLoad(e) {
			this.initData(JSON.parse(e.detail))
			this.getComment()
		},
		// 监听导航右侧按钮
		onNavigationBarButtonTap(e) {
			e.index === 0 ? this.shareShow = !this.shareShow : ""
		},
		methods: {
			getComment() {
				const data = [
					// 一级评论
					{
						id: 1,
						pId: 0,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产",
						replyNum: 5
					},
					// 二级评论
					{
						pId: 1,
						id: 2,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产",
						replyNum: 5
					},
					{
						pId: 1,
						id: 3,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产",
						replyNum: 5
					},
					{
						pId: 0,
						id: 4,
						userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
						username: "小猫咪",
						time: "1555400035",
						data: "支持国产",
						replyNum: 1
					}
				]
				this.comment.list = getShowTime(data, false)
			},
			initData(obj) {
				// 修改窗口标题
				console.info(obj)
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
			submit(value) {
				const data = {
					id: 5,
					pId: 0,
					userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					username: "小猫咪",
					time: "1555400035",
					data: value,
					replyNum: 5
				}
				data.showTime = getTime(data.time),
					this.comment.list.push(data)
			},
			reset() {
				this.shareShow = false
			}
		}
	}
</script>

<style lang="less" scoped>
	.uni-comment {
		padding: 0 20rpx;
	}

	.u-comment-title {
		padding: 20rpx;
		font-size: 30rpx;
		font-weight: bold;

	}
</style>
