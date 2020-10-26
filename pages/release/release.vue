<template>
	<view>
		<uni-nav-bar :statusBar="true" left-icon="back" rightText="发布" @clickLeft="back">
			<view class="u-f-ajc">
				所有人可见
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
