<script lang="ts" setup>
// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 返回按钮点击事件
const handleBack = () => {
	uni.navigateBack();
};
</script>

<template>
	<view class="safe-top" :style="{height: `${safeArea?.top}px`}"></view>
	<view class="header">
		<view class="t-icon t-icon-back header-item" @click="handleBack"></view>
		<view class="title header-item">资产管理</view>
		<view class="header-item"></view>
	</view>
	<view
		class="asset-manager"
		:style="{height: `calc(100vh - ${safeArea?.top}px - 96rpx)`}"
	>
		<view class="number">
			<view class="asset number-item">
				<text class="num">20.00</text>
				<text class="txt">净资产(元)</text>
			</view>
			<view class="separate"></view>
			<view class="liabilities number-item">
				<text class="num">6.00</text>
				<text class="txt">总负债(元)</text>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.header {
	background-color: #fff;
	display: flex;
	height: 96rpx;

	.header-item {
		flex: 1;
		display: flex;
		align-items: center;
		background-repeat: no-repeat;
		justify-content: center;
		background-position: 24rpx;
		height: 100%;
		background-size: 32rpx;
	}

	.title {
		font-size: 28rpx;
		color: rgba(0, 0, 0, 0.85);
	}
}

.asset-manager {
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	padding: 24rpx;

	.number {
		width: 100%;
		height: 144rpx;
		background-color: #fff;
		border-radius: 12rpx;
		display: flex;
		align-items: center;

		.number-item {
			display: flex;
			flex-direction: column;
			gap: 4rpx;
			align-items: center;
			flex: 1;

			.num {
				font-size: 36rpx;
				color: rgba(0, 0, 0, 0.85);
			}

			.txt {
				font-size: 24rpx;
				color: rgba(0, 0, 0, 0.6);
			}
		}

		.separate {
			width: 2rpx;
			height: 72rpx;
			background: rgba(0, 0, 0, 0.08);
		}
	}
}
</style>
