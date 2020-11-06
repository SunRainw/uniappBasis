<template>
	<view class="other-login u-f-ac">
		<block v-for="(item, index) in providerList" :key="index">
			<view class="u-f-ajc u-f1" @tap="tologin">
				<view class="icon iconfont icon-weixin u-f-ajc" :class="'icon' + item.icon"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: []
			}
		},
		onLoad() {
			this.getProvider()
		},
		methods: {
			getProvider() {
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						this.providerList = result.provider.map((value) => {
							let providerName = '';
							let icon = ''
							switch (value) {
								case 'weixin':
									providerName = '微信登录'
									icon = 'weixin'
									break;
								case 'qq':
									providerName = 'QQ登录'
									icon = 'QQ'
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录'
									icon = 'weibo'
									break;
								case 'alipay':
									providerName = '支付宝登录'
									break;
							}
							return {
								name: providerName,
								icon: icon,
								id: value
							}
						});
						
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
			},
			tologin(provider) {
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //支付宝小程序需设置授权类型
					// #endif
					success: (res) => {
						console.log('login success:', res);
						// 更新保存在 store 中的登录状态
						// this.login(provider.id);
						// #ifdef MP-WEIXIN
						console.warn('如需获取openid请参考uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
						uni.request({
							url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center',
							method:'POST',
							data: {
								action: 'loginByWeixin',
								params: {
									code: res.code,
									platform: 'mp-weixin'
								}
							},
							success(res) {
								console.log(res);
								if (res.data.code !== 0) {
									console.log('获取openid失败：', res.result.msg);
									return
								}
								uni.setStorageSync('openid', res.data.openid)
							},
							fail(err) {
								console.log('获取openid失败：', err);
							}
						})
						// #endif
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.other-login {
		padding: 20rpx 80rpx 50rpx;

		.icon {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			font-size: 55rpx;
			color: #FFFFFF;
		}

		.icon-weixin {
			background-color: #2CAEFC;
		}

		.icon-QQ {
			background-color: #2BD19B;
		}

		.icon-weibo {
			background-color: #FC7729;
		}
	}
</style>
