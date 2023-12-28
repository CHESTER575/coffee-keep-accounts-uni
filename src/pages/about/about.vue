<script lang="ts" setup>
// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 前端项目地址点击事件
const handleFrontEndBtnClick = () => {
	uni.setClipboardData({
		data: 'https://github.com/CHESTER575/coffee-keep-accounts-uni/tree/pages/static',
		success: () => {
			uni.showToast({
				icon: 'none',
				title: '连接已复制，请到浏览器中打开',
			});
		},
	});
};
</script>

<template>
	<view class="safe-top" :style="{height: `${safeArea?.top}px`}"></view>
	<navigator hover-class="none" open-type="navigateBack">
		<view class="header">
			<view class="t-icon t-icon-back"></view>
			<text>返回</text>
		</view>
	</navigator>
	<view
		class="about"
		:style="{height: `calc(100vh - ${safeArea.top}px - 84rpx)`}"
	>
		<view class="desc">
			咖啡记账是一款用于记录每天的开销的产品，有网页版、小程序、未来还会推出APP，主要是用于学习现在各种主流的技术，前端技术栈（uni-app、typescript、pinia、vue3），后端技术栈（python、mysql、django）。
		</view>
		<view class="front-end btn" @click="handleFrontEndBtnClick">
			前端项目地址
		</view>
		<view class="back-end btn">后端项目地址</view>
	</view>
</template>

<style scoped lang="scss">
.safe-top {
	background-color: #f7f7f7;
}

.header {
	height: 82rpx;
	background-color: #f7f7f7;
	box-sizing: border-box;
	padding-left: 24rpx;
	display: flex;
	align-items: center;
	gap: 12rpx;

	text {
		font-size: 28rpx;
	}
}

.about {
	background-color: #f7f7f7;
	box-sizing: border-box;
	padding: 24rpx 24rpx 24rpx 24rpx;
	display: flex;
	flex-direction: column;
	gap: 24rpx;

	.desc {
		height: 248rpx;
		background-color: #fff;
		padding: 24rpx;
		border-radius: 12rpx;
		font-size: 28rpx;
		color: rgba($color: #000000, $alpha: 0.85);
	}

	.btn {
		height: 84rpx;
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		color: #eaa44f;
		font-size: 28rpx;
	}
}
</style>
