<template>
	<view class="user-setting-wrap">
		<block v-for="(item, index) in list" :key="index">
			<home-list :item="item" :index="index"></home-list>
		</block>
		<button type="primary" class="user-setting-btn">退出登录</button>
	</view>
</template>

<script>
	import homeList from "@/components/home/home-list.vue"
	export default {
		components: {
			homeList
		},
		data() {
			return {
				list: [{
						name: "账号与安全",
						linkType: "navigateTo",
						url: "/pages/user-setting-repassword/user-setting-repassword"
					},
					{
						name: "绑定邮箱",
						linkType: "navigateTo",
						url: "/pages/user-setting-email/user-setting-email"
					},
					{
						name: "资料编辑",
						linkType: "navigateTo",
						url: "/pages/user-setting-info/user-setting-info"
					},
					{
						name: "小字条",
						linkType: "",
						url: ""
					},
					{
						name: "清除缓存",
						linkType: "",
						url: ""
					},
					{
						name: "意见反馈",
						linkType: "",
						url: ""
					},
					{
						name: "关于糗百",
						linkType: "",
						url: ""
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import "/common/common.css";
</style>
