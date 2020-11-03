<template>
	<view class="animate__animated animate__fadeIn animate__faster">
		<view class="share-modal" @tap="reset"></view>
		<view class="share-wrap">
			<view class="share-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="share-body">
				<view class="share-item" hover-class="share-item-hover" v-for="item in providerList" :key="item.name" @tap="share(item)">
					<view class="icon iconfont u-f-ajc" :class="'icon-' + item.icon"></view>
					<view class="icon-name">{{item.name}}</view>
				</view>
			</scroll-view>
			<view class="share-reset u-f-ajc" hover-class="share-item-hover" @tap="reset">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				href: "https://uniapp.dcloud.io",
				image: '',
				shareType: 1, // 1文字 2图片 0图文 5小程序
				providerList: [{
						name: '微信好友',
						id: 'weixin',
						icon: 'weixin',
						sort: 0
					},
					{
						name: '朋友圈',
						id: 'weixin',
						icon: 'ai-moments',
						type: 'WXSenceTimeline',
						sort: 1
					},
					{
						name: '新浪微博',
						id: 'sinaweibo',
						icon: 'weibo',
						sort: 2
					},
					{
						name: 'QQ好友',
						id: 'qq',
						icon: 'QQ',
						sort: 3
					}
				]
			}
		},
		// mounted() {
		// 	uni.getProvider({
		// 		service: 'share',
		// 		success: (e) => {
		// 			let data = []
		// 			for (let i = 0; i < e.provider.length; i++) {
		// 				switch (e.provider[i]) {
		// 					case 'weixin':
		// 						data.push({
		// 							name: '微信好友',
		// 							id: 'weixin',
		// 							icon: '',
		// 							sort:0
		// 						})
		// 						data.push({
		// 							name: '朋友圈',
		// 							id: 'weixin',
		// 							icon: 'ai-moments',
		// 							type:'WXSenceTimeline',
		// 							sort:1
		// 						})
		// 						break;
		// 					case 'sinaweibo':
		// 						data.push({
		// 							name: '新浪微博',
		// 							id: 'sinaweibo',
		// 							icon: 'weibo',
		// 							sort:2
		// 						})
		// 						break;
		// 					case 'qq':
		// 						data.push({
		// 							name: 'QQ好友',
		// 							id: 'qq',
		// 							icon: 'QQ',
		// 							sort:3
		// 						})
		// 						break;
		// 					default:
		// 						break;
		// 				}
		// 			}
		// 			this.providerList = data.sort((x,y) => {
		// 				return x.sort - y.sort
		// 			});
		// 		},
		// 		fail: (e) => {
		// 			console.log('获取分享通道失败', e);
		// 			uni.showModal({
		// 				content:'获取分享通道失败',
		// 				showCancel:false
		// 			})
		// 		}
		// 	});
		// },
		methods: {
			reset() {
				this.$emit("reset")
				console.info(this.providerList)
			},
			async share(e) {
				console.log('分享通道:' + e.id + '； 分享类型:' + this.shareType);
				if (!this.shareText && (this.shareType === 1 || this.shareType === 0)) {
					uni.showModal({
						content: '分享内容不能为空',
						showCancel: false
					})
					return;
				}

				if (!this.image && (this.shareType === 2 || this.shareType === 0)) {
					uni.showModal({
						content: '分享图片不能为空',
						showCancel: false
					})
					return;
				}

				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel: false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel: false
						})
					},
					complete: function() {
						console.log('分享操作结束!')
					}
				}

				switch (this.shareType) {
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image :
							'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id: 'gh_33446d7f7a26',
							path: '/pages/tabBar/component/component',
							webUrl: 'https://uniapp.dcloud.io',
							type: 0
						};
						break;
					default:
						break;
				}

				if (shareOPtions.type === 0 && plus.os.name === 'iOS') { //如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if (shareOPtions.type === 1 && shareOPtions.provider === 'qq') { //如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
			compress() { //压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => { // 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if (file.size > 20480) { // 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content: '分享图片太大,需要请重新选择图片!',
										showCancel: false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content: '分享图片太大,需要请重新选择图片!',
							showCancel: false
						})
					});
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.share-wrap {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
	}

	.share-title,
	.share-reset {
		font-size: 32rpx;
		padding: 25rpx;
	}

	.share-body {
		border-bottom: 1rpx solid #EEEEEE;
		white-space: nowrap;
		width: 100%;
		height: 200rpx;
		display: flex;
	}

	.share-item {
		width: 25%;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;

		.icon {
			font-size: 55rpx;
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
			color: #FFFFFF;
		}

		.icon-name {
			color: #7A7A7A;
		}
	}

	.share-item-hover {
		background-color: #EEEEEE;
	}

	.icon-weixin {
		background: #2AD19B;
	}

	.icon-ai-moments {
		background: #514D4C;
	}

	.icon-weibo {
		background: #EE5E5E;
	}

	.icon-QQ {
		background: #4A73BA;
	}

	.share-modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(51, 51, 51, .72);
	}
</style>
