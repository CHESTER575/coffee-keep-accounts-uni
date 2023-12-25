<script setup lang="ts">
// 安全区
const {safeArea} = uni.getSystemInfoSync();
</script>

<template>
	<view class="mine">
		<view class="body" :style="{marginTop: `${safeArea?.top}px`}">
			<view class="header">
				<navigator open-type="navigateBack" hover-class="none">
					<view class="t-icon t-icon-back"></view>
				</navigator>
			</view>
			<view class="avatar">
				<img v-if="false" class="img" src="" alt="" />
				<view v-else class="t-icon t-icon-icon-avatar img"></view>
			</view>
			<view class="change-avatar">
				<text>点击修改头像</text>
			</view>
			<view class="info">
				<navigator
					url="/pages/mine/change-email"
					open-type="navigate"
					hover-class="none"
				>
					<view class="email info-item">
						<text>邮箱：2807915330@qq.com</text>
						<view class="t-icon t-icon-edit-info-more"></view>
					</view>
				</navigator>
				<view class="nickname info-item">
					<text>昵称：用户1</text>
					<view class="t-icon t-icon-edit-info-more"></view>
				</view>
				<view class="desc info-item">
					<text>介绍：xxx</text>
					<view class="t-icon t-icon-edit-info-more"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.mine {
	max-height: 100vh;
	min-height: 100vh;
	background-color: $bg-color;
	display: flex;
	flex-direction: column;

	.body {
		width: 100%;
		height: calc(100% - 108rpx);
		display: flex;
		box-sizing: border-box;
		padding: 24rpx 24rpx 0 24rpx;
		flex-direction: column;

		.avatar {
			margin-top: 84rpx;
			display: flex;
			justify-content: center;

			.img {
				width: 144rpx;
				height: 144rpx;
			}
		}

		.change-avatar {
			text-align: center;
			font-size: 24rpx;
			color: rgba(0, 0, 0, 0.6);
			margin-bottom: 32rpx;
		}

		.info {
			border-radius: 12rpx;

			.info-item {
				height: 96rpx;
				background-color: #fff;
				padding: 0 24rpx 0 32rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				color: rgba(0, 0, 0, 0.6);
				box-sizing: border-box;
				border-bottom: 2rpx solid rgba(0, 0, 0, 0.08);
			}

			.info-item:last-child {
				border-bottom: 2rpx solid rgba(0, 0, 0, 0);
				border-bottom-left-radius: 12rpx;
				border-bottom-right-radius: 12rpx;
			}

			.info-item:first-child {
				border-top-left-radius: 12rpx;
				border-top-right-radius: 12rpx;
			}

			.t-icon {
				background-size: 32rpx !important;
			}
		}
	}
}
</style>
