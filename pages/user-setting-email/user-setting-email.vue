<template>
	<view class="user-setting-wrap">
		<input type="text" class="uni-input common-input" placeholder="输入需要绑定的邮箱" v-model="email" />
		<input password type="text" class="uni-input common-input" placeholder="输入密码" v-model="password" />
		<button type="primary" class="user-setting-btn" :loading="loading" :disabled="isDisabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDisabled: true,
				loading: false,
				email: "",
				password: ""
			}
		},
		watch: {
			email: {
				handler() {
					this.isDisabled = this.getDisabled()
				}
			},
			password: {
				handler() {
					this.isDisabled = this.getDisabled()
				}
			}
		},
		methods: {
			getDisabled() {
				if (!this.email || !this.password) {
					return true
				}
				return false
			},
			// 验证
			check() {
				let title = ""
				const reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
				if (!reg.test(this.email)) {
					title = "请输入正确格式的邮箱！"
				} else if (this.password.length < 6) {
					title = "密码不能小于6位！"
				} else {
					title = "正在绑定，请稍后！"
				}
				return title
			},
			submit() {
				uni.showToast({
					title: this.check(),
					icon: "none"
				})
				if (this.check() === "正在修改，请稍后！") {
					this.isDisabled = true
					this.loading = true
					setTimeout(() => {
						this.email = ""
						this.password = ""
						this.isDisabled = false
						this.loading = false
					}, 2000)
			
				}
			}
		}
	}
</script>

<style scoped>
	@import "/common/common.css";
</style>
