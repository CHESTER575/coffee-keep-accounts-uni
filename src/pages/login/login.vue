<script setup lang="ts">
import {ref} from 'vue';
import {checkEmail} from '@/until';

const form = ref({
	email: '',
	code: '',
});

// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 是否正在获取验证码
const isGettingCode = ref(false);

// 下一次获取验证码等待时间
const getNextCodeWaitTime = ref(60);

/* 获取验证码点击事件 */
const handleGetCode = () => {
	if (!form.value.email) {
		uni.showToast({
			icon: 'none',
			title: '请输入邮箱',
		});
		return;
	}

	if (!checkEmail(form.value.email)) {
		uni.showToast({
			icon: 'none',
			title: '邮箱格式不正确，请重新输入',
		});
		return;
	}

	isGettingCode.value = true;

	const timer = setInterval(() => {
		if (getNextCodeWaitTime.value === 0) {
			clearInterval(timer);
			isGettingCode.value = false;
		}

		getNextCodeWaitTime.value--;
	}, 1000);
};

/* 登录按钮点击事件 */
const handleSubmit = () => {
	if (!form.value.code) {
		uni.showToast({
			icon: 'none',
			title: '请输入验证码',
		});
		return;
	}

	if (!form.value.email) {
		uni.showToast({
			icon: 'none',
			title: '请输入邮箱',
		});
		return;
	}

	if (!checkEmail(form.value.email)) {
		uni.showToast({
			icon: 'none',
			title: '邮箱格式不正确，请重新输入',
		});
		return;
	}
};
</script>

<template>
	<view class="login">
		<view :style="{marginTop: `${safeArea?.top}px`}">
			<view class="header">
				<navigator open-type="navigateBack">
					<text class="t-icon t-icon-back"></text>
				</navigator>
			</view>
			<view class="logo">
				<text class="t-icon t-icon-kafei"></text>
			</view>
			<form @submit="handleSubmit">
				<view class="form">
					<view class="form-column">
						<input v-model="form.email" type="text" placeholder="请输入邮箱" />
					</view>
					<view class="form-column get-code">
						<input v-model="form.code" type="text" placeholder="请输入验证码" />
						<view v-if="!isGettingCode" class="btn" @click="handleGetCode">
							获取验证码
						</view>
						<view v-else class="btn get-wait-btn">
							{{ getNextCodeWaitTime }}秒后重新获取
						</view>
					</view>
					<view class="form-column">
						<button class="submit" form-type="submit">登录</button>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<style scoped lang="scss">
.login {
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	padding: 32rpx 48rpx;
	background-color: $bg-color;

	.header {
		width: 100vw;
		display: flex;
		justify-content: flex-start;
	}

	.logo {
		height: 144rpx;
		display: flex;
		justify-content: center;
		margin-top: 124rpx;
		margin-bottom: 96rpx;

		.t-icon {
			width: 144rpx;
			height: 144rpx;
		}
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 24rpx;

		.form-column {
			width: 100%;
			height: 84rpx;
			display: flex;
			gap: 34rpx;

			input {
				flex: 1;
				height: 100%;
				background-color: #fff;
				border-radius: $border-radius-6;
				box-sizing: border-box;
				padding-left: $padding-12;
				font-size: 28rpx;
				color: #999;
			}

			.submit {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $primary-color;
				border-radius: $border-radius-6;
				color: #fff;
				font-size: 32rpx;
			}
		}

		.get-code {
			.btn {
				width: 212rpx;
				background-color: #fff;
				border-radius: $border-radius-6;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #333;
				font-size: 28rpx;
			}

			.get-wait-btn {
				width: 248rpx;
				color: #999;
			}
		}
	}
}
</style>
