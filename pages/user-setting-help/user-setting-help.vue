<template>
	<view class="user-setting-wrap">
		<uni-collapse>
			<block v-for="(item, index) in list" :key="index">
				<uni-collapse-item :title="item.title">
					<text class="content">{{item.content}}</text>
				</uni-collapse-item>
			</block>
		</uni-collapse>
		<button type="primary" class="user-setting-btn" @tap="submit">意见反馈</button>
	</view>
</template>

<script>
	import uniCollapse from "@/components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list: [{
						title: "客服什么时候上线？",
						content: "123"
					},
					{
						title: "忘记账号/昵称/密码怎么办？",
						content: "13"
					},
					{
						title: "怎么搜索/查找/关注/取关用户？",
						content: "13"
					}
				]
			}
		},
		methods: {
			submit() {

			}
		}
	}
</script>

<style scoped>
	@import "/common/common.css";
</style>
