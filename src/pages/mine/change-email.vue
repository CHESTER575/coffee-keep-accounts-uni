<script setup lang="ts">
import {ref} from 'vue';
import {checkEmail} from '@/until';

// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 是否正在获取验证码
const isGettingCode = ref(false);

// 下一次获取验证码等待时间
const getNextCodeWaitTime = ref(60);

// form表单
const form = ref({
	code: '',
	email: '',
});

// 验证码错误提示和状态
const code_err = ref({
	msg: '请输入验证码',
	state: false,
});

// 邮箱错误提示和状态
const email_err = ref({
	msg_01: '请输入邮箱',
	msg_02: '邮箱格式不正确',
	state: false,
	show_msg_01: true,
});

// 获取验证码事件
const handleGetValidateCode = () => {
	if (!form.value.code) {
		code_err.value.state = true;
		return;
	}

	code_err.value.state = false;

	isGettingCode.value = true;

	const timer = setInterval(() => {
		if (getNextCodeWaitTime.value === 0) {
			clearInterval(timer);
			isGettingCode.value = false;
		}

		getNextCodeWaitTime.value--;
	}, 1000);
};

// 修改点击事件
const handleChange = () => {
	if (!form.value.code) {
		code_err.value.state = true;
		return;
	}

	code_err.value.state = false;

	if (!form.value.email) {
		email_err.value.state = true;
		return;
	}

	email_err.value.state = false;

	if (!checkEmail(form.value.email)) {
		email_err.value.state = true;
		email_err.value.show_msg_01 = false;
		return;
	}
};
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
					<view class="content">
						<input
							v-model="form.code"
							class="get-code-input"
							type="text"
							placeholder="请输入验证码"
						/>
						<view class="get-code" @click="handleGetValidateCode">
							{{ isGettingCode ? getNextCodeWaitTime : '获取验证码' }}
						</view>
					</view>
					<view v-if="code_err.state" class="err_msg">
						{{ code_err.msg }}
					</view>
				</view>
				<view class="form-item">
					<view class="content">
						<input
							v-model="form.email"
							class="email-input"
							type="text"
							placeholder="请输入新的邮箱地址"
						/>
					</view>
					<view v-if="email_err.state" class="err_msg">
						{{ email_err.show_msg_01 ? email_err.msg_01 : email_err.msg_02 }}
					</view>
				</view>

				<view class="form-item">
					<view class="content">
						<view class="submit" @click="handleChange">修改</view>
					</view>
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
				.content {
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

				.err_msg {
					color: #fa5151;
					font-size: 24rpx;
					text-indent: 10rpx;
					margin-top: 12rpx;
				}
			}
		}
	}
}
</style>
