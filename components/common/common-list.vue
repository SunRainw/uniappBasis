<template>
	<view class="common-list u-f animate__animated animate__fadeIn animate__fast">
		<view class="common-list-left">
			<image :src="item.userPic" mode="widthFix"></image>
		</view>
		<view class="common-list-right">
			<view class="common-head u-f-ac u-f-jsb">
				<view class="u-f-ac">
					<view class="username">{{item.username}}</view>
					<tag-sex-age :item="{sex: item.sex, age: item.age}"></tag-sex-age>
				</view>
				<view v-show="!isAttention" class="icon iconfont icon-zengjia" @tap="handleAttention">关注</view>
			</view>
			<view class="common-title">
				{{item.title}}
			</view>
			<view class="common-image u-f-ajc">
				<image v-if="item.titlePic" :src="item.titlePic" mode="widthFix" lazy-load></image>
				<view class="icon iconfont icon-bofang" v-if="item.video"></view>
				<view class="common-list-playinfo" v-if="item.video">播放量: {{item.video.playNum}} 时长: {{item.video.long}}</view>
			</view>
			<view class="common-list-share u-f-ac" v-if="item.share">
				<image :src="item.share.titlePic" mode="widthFix" lazy-load></image>
				<view>{{item.share.title}}</view>
			</view>
			<view class="u-f-ac u-f-jsb common-bottom">
				<view>{{item.address}}</view>
				<view class="u-f-ac icon-list">
					<view class="icon iconfont icon-zhuanfa">{{item.shareNum}}</view>
					<view class="icon iconfont icon-xiaoxi2">{{item.commentNum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.likeNum}}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import tagSexAge from "@/components/common/tag-sex-age.vue"
	export default {
		components: {
			tagSexAge
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				isAttention: this.item.isAttention
			}
		},
		methods: {
			handleAttention() {
				this.isAttention = true
				uni.showToast({
					title: "关注成功"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "@/common/list.less";
</style>
