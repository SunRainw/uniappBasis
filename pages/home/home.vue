<template>
	<view class="animate__animated animate__fadeInLeft animate__fast">
		<!-- 登录状态 -->
		<template v-if="!isLogin">
			<view>
				<view class="u-f-ajc">登录糗百，体验更多功能</view>
				<other-login></other-login>
				<view class="u-f-ajc" @tap="toLogin">账号密码登录<view class="icon iconfont icon-jinru"></view></view>
			</view>
		</template>
		<template v-else>
			<user-info :userInfo="userInfo" />
		</template>
		<!-- 数据显示 -->
		<home-data :homeData="homeData"></home-data>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="https://image.uisdc.com/wp-content/uploads/2013/02/1361350785.jpg" mode="widthFix" lazy-load></image>
		</view>
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index">
				<home-list :item="item" :index="index"></home-list>
			</block>
		</view>
	</view>
</template>

<script>
	import homeList from "@/components/home/home-list.vue"
	import userInfo from "@/components/home/user-info.vue"
	import otherLogin from "@/components/home/other-login.vue"
	import homeData from "@/components/home/home-data.vue"
	export default {
		components: {
			homeList,
			userInfo,
			otherLogin,
			homeData
		},
		data() {
			return {
				userInfo: {
					userPic: "http://m.imeitou.com/uploads/allimg/190221/3-1Z221113343.jpg",
					username: "昵称",
					totalNum: 0,
					todayNum: 0
				},
				homeData: [{
						num: 0,
						name: "糗事"
					},
					{
						num: 0,
						name: "动态"
					},
					{
						num: 0,
						name: "评论"
					},
					{
						num: 0,
						name: "收藏"
					}
				],
				isLogin: true,
				list: [{
						icon: "liulan",
						name: "浏览历史"
					},
					{
						icon: "huiyuanvip",
						name: "糗百认证"
					},
					{
						icon: "keyboard",
						name: "审核糗事"
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			e.index === 0 ? uni.navigateTo({
				url: "../user-setting/user-setting"
			}) : ""
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: "../../pages/login/login"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	

	

	.home-adv {
		padding: 20rpx;

		image {
			border-radius: 20rpx;
			height: 150rpx;
		}
	}

	.home-list {
		padding: 20rpx;
	}
</style>
