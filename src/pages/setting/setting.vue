<script lang="ts" setup>
// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 退出登录点击事件
const handleLogout = () => {
	// TODO 退出登录逻辑

	uni.navigateBack();
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
		class="setting"
		:style="{height: `calc(100vh - ${safeArea.top}px - 84rpx)`}"
	>
		<view class="logout" @click="handleLogout"> 退出登录 </view>
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

.setting {
	background-color: #f7f7f7;
	box-sizing: border-box;
	padding: 24rpx;

	.logout {
		height: 84rpx;
		background-color: #fff;
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #e74c3c;
		font-size: 28rpx;
	}
}
</style>
