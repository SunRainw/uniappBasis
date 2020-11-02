<template>
	<view>
		<detail-info :item="detail" />
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment">
			<block v-for="(item, index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
	</view>
</template>

<script>
	import detailInfo from "@/components/detail/detail-info.vue"
	import commentList from "@/components/detail/comment-list.vue"
	import {
		getShowTime
	} from "@/common/time.js"
	export default {
		components: {
			detailInfo,
			commentList
		},
		data() {
			return {
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
		onNavigationBarButtonTap() {
			e.index === 0 ? console.info("分享") : ""
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
				uni.setNavigationBarTitle({
					title: obj.title
				})
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
