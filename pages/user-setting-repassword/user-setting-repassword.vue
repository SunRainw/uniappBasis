<template>
	<view class="user-setting-wrap">
		<input password type="text" class="uni-input common-input" placeholder="输入旧密码" v-model="oldPassword" />
		<input password type="text" class="uni-input common-input" placeholder="输入新密码" v-model="newPassword" />
		<input password type="text" class="uni-input common-input" placeholder="输入确认密码" v-model="confirmPassword" />
		<button type="primary" class="user-setting-btn" :loading="loading" :disabled="isDisabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDisabled: true,
				loading: false,
				oldPassword: "",
				newPassword: "",
				confirmPassword: ""
			}
		},
		watch: {
			oldPassword: {
				handler() {
					this.isDisabled = this.getDisabled()
				}
			},
			newPassword: {
				handler() {
					this.isDisabled = this.getDisabled()
				}
			},
			confirmPassword: {
				handler() {
					this.isDisabled = this.getDisabled()
				}
			}
		},
		methods: {
			getDisabled() {
				if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
					return true
				}
				return false
			},
			// 验证
			check() {
				let title = ""
				if (this.oldPassword.length < 6 || this.newPassword.length < 6 || this.confirmPassword.length < 6) {
					title = "密码不能小于6位！"
				} else if (this.newPassword !== this.confirmPassword) {
					title = "新密码与确认密码不一致！"
				} else {
					title = "正在修改，请稍后！"
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
						this.oldPassword = ""
						this.newPassword = ""
						this.confirmPassword = ""
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
