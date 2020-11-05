<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar background="#FFE933"></uni-status-bar>
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<image class="login-head" src="/static/image/common/login.png" mode="widthFix" lazy-load></image>
		<view class="user-setting-wrap">			
			<template v-if="!isCode">
				<view>
					<input type="text" class="uni-input common-input" placeholder="昵称/手机号/邮箱" v-model="username" />
					<view class="password-wrap">
						<input password type="text" class="uni-input common-input" placeholder="请输入密码" v-model="password" />
						<view class="forget u-f-ajc">忘记密码?</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view>
					<view class="phone-wrap">
						<view class="phone-prefix u-f-ajc">+86</view>
						<input type="text" class="uni-input common-input" placeholder="手机号" v-model="phone" />
					</view>
					<view class="password-wrap">
						<input type="text" class="uni-input common-input" placeholder="请输入验证码" v-model="checkCode" />
						<view class="forget u-f-ajc" @tap="codeBtnPress"><text class="u-f-ajc code">{{!codeTime ? '获取验证码': codeTime + 's' }}</text></view>
					</view>
				</view>
			</template>		
			<button type="primary" class="user-setting-btn" :loading="loading" :disabled="isDisabled" @tap="submit">登录</button>
		</view>
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding" @tap="switchChange">
			<view class="">{{isCode ? '账号密码登录': '验证码登录'}}</view>
			<view class="icon iconfont icon-jinru"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc login-padding">第三方登录</view>
		<other-login></other-login>
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding">注册即代表您同意《糗事百科用户协议》</view>
	</view>
</template>

<script>
	import uniStatusBar from "@/components/uni-status-bar/uni-status-bar.vue"
	import otherLogin from "@/components/home/other-login.vue"
	export default {
		components: {
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				username: "",
				password: "",
				phone: "",
				checkCode: "",
				loading: false,
				isDisabled: true,
				isCode: false,
				codeTime: 0
			}
		},
		watch: {
			username: {
				handler() {
					this.getDisabled()
				}
			},
			password: {
				handler() {
					this.getDisabled()
				}
			},
			phone: {
				handler() {
					this.getDisabled()
				}
			},
			checkCode: {
				handler() {
					this.getDisabled()
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			submit() {
				if (this.isCode) {
					
				} else {
					if(!this.checkphone()) {
						uni.showToast({
							title: "请输入正确的手机号！",
							icon: "none"
						})
					}
				}
			},
			getDisabled() {
				if((this.username && this.password) || (this.phone && this.checkCode)) {
					this.isDisabled = false
				} else {
					this.isDisabled = true
				}
			},
			switchChange() {
				this.isCode = !this.isCode
				if(this.isCode) {
					this.password = ""
					this.username = ""
				} else {
					this.checkCode = ""
					this.phone = ""
				}
			},
			checkphone() {
				const reg = /^1[1345678]\d{9}$/
				return reg.test(this.phone)
			},
			codeBtnPress() {
				// 验证手机号合法性
				if(!this.checkphone()) {
					uni.showToast({
						title: "请输入正确的手机号！",
						icon: "none"
					})
					return
				}
				if(this.codeTime > 0) {
					uni.showToast({
						title: "不能重复获取！",
						icon: "none"
					})
					return
				}
				this.codeTime = 60
				let timer = setInterval(() => {
					this.codeTime--
					if(this.codeTime === 0) {
						clearInterval(timer)
					}
				}, 1000)
			
			}
		}
	}
</script>

<style scoped>
	@import "/common/common.css";
	.login-padding {
		padding: 20rpx 0;
		color: #CCCCCC;
	}
	.icon-guanbi {
		position: fixed;
		top: 60rpx;
		left: 30rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: #332F0A;
		z-index: 100;
	}
	.login-head {
		width: 100%;
	}
	.other-login-title{
		position: relative;
	}
	.other-login-title::before, .other-login-title::after {
		position: absolute;
		background-color: #CCCCCC;
		height: 1rpx;
		width: 100rpx;
		content: "";
		top: 50%;
	}
	.other-login-title::before {
		left: 25%;
	}
	.other-login-title::after {
		right: 25%;
	}
	.password-wrap, .phone-wrap {
		position: relative;
	}
	.password-wrap input {
		padding-right: 180rpx;
	}
	.forget, .phone-prefix {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		z-index: 10;
	}
	.forget {
		color: #CCCCCC;
		width: 150rpx;
	}
	.phone-prefix {
		left: 0;
		width: 100rpx;
		font-weight: bold;
	}
	.phone-wrap input {
		padding-left: 100rpx;
	}
	.code {
		background-color: #EEEEEE;
		border-radius: 10rpx;
		font-size: 25rpx;
		padding: 5rpx 0;
		width: 150rpx;
	}
</style>
