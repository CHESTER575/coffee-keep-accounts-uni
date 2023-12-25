<script setup lang="ts">
// 安全区
const {safeArea} = uni.getSystemInfoSync();
</script>

<template>
	<view class="change-email">
		<view class="safe-top" :style="{height: `${safeArea?.top}px`}"></view>
		<view class="body">
			<view class="header">
				<view class="back">
					<navigator open-type="navigateBack" hover-class="none">
						<text class="t-icon t-icon-back"></text>
					</navigator>
				</view>
				<view class="title">更新邮箱</view>
				<view class="space"></view>
			</view>
			<view class="form">
				<view class="form-item">
					<input
						class="get-code-input"
						type="text"
						placeholder="请输入验证码"
					/>
					<view class="get-code">获取验证码</view>
				</view>
				<view class="form-item">
					<input class="email-input" type="text" placeholder="请输入邮箱地址" />
				</view>
				<view class="form-item">
					<view class="submit">修改</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.change-email {
	max-height: 100vh;
	min-height: 100vh;
	background-color: $bg-color;
	display: flex;
	flex-direction: column;

	.safe-top {
		background-color: #fff;
	}

	.body {
		width: 100%;
		height: calc(100% - 108rpx);
		display: flex;
		flex-direction: column;

		.header {
			display: flex;
			justify-content: space-between;
			height: 84rpx;
			background-color: #fff;
			align-items: center;

			.title {
				width: 50%;
				text-align: center;
				color: rgba(0, 0, 0, 0.85);
				font-size: 28rpx;
			}

			.back {
				width: 25%;
				box-sizing: border-box;
				padding-left: 24rpx;
			}

			.space {
				width: 25%;
			}
		}

		.form {
			display: flex;
			flex-direction: column;
			margin-top: 108rpx;
			box-sizing: border-box;
			padding: 0 48rpx;
			gap: 32rpx;

			.form-item {
				display: flex;
				flex: 1;
				justify-content: space-between;
				gap: 32rpx;

				input,
				view {
					height: 84rpx;
				}

				input {
					background-color: #fff;
					flex: 1;
					border-radius: 12rpx;
					box-sizing: border-box;
					padding-left: 24rpx;
					font-size: 28rpx;
				}

				.get-code {
					width: 212rpx;
					background-color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 12rpx;
					color: rgba(0, 0, 0, 0.85);
					font-size: 28rpx;
				}

				.submit {
					display: flex;
					justify-content: center;
					align-items: center;
					flex: 1;
					background-color: #eaa44f;
					border-radius: 12rpx;
					color: #fff;
					font-size: 28rpx;
				}
			}
		}
	}
}
</style>
