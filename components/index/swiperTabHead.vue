<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle">
			<view
				class="swiper-tab-list"
				v-for="(tab, index) in tabBars" :key="tab.id"
				:class="{active: tabIndex === index}"
				@tap="tabTap(index)"
				:style="scrollItemStyle" 
			>
				{{tab.name}} {{tab.num ? tab.num : ""}}
				<view class="swiper-tab-line"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			scrollStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			scrollItemStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			tabTap(index) {
				this.$emit("tabTap", index)
			}
		}
	}
</script>

<style lang="less" scoped>
	.uni-swiper-tab {
		border-bottom: 1rpx solid #EEEEEE;
	}
	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}
	.uni-tab-bar .active {
		color: #343434;
	}
	.active .swiper-tab-line {
		border-bottom: 6rpx solid #fede33;
		width: 70rpx;
		margin: auto;
		border-top: 6rpx solid #fede33;
		border-radius: 20rpx;
	}
</style>
