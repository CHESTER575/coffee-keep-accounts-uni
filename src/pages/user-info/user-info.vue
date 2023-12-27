<script setup lang="ts">
import Modal from '@/components/common/Modal/Modal.vue';
import {ref} from 'vue';

// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 用户信息
const user = ref({
	email: '2807915330@qq.com',
	avatar: '',
	nickname: '用户1',
	desc: '暂无介绍',
});
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
				<img v-if="user.avatar" class="img" src="" alt="" />
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
					<view class="email info-item border-bottom border-top-radius">
						<text>邮箱：{{ user.email }}</text>
						<view class="space"></view>
						<view class="t-icon t-icon-edit-info-more"></view>
					</view>
				</navigator>
				<Modal title-text="昵称修改">
					<view class="nickname info-item border-bottom">
						<text>昵称：{{ user.nickname }}</text>
						<view class="space"></view>
						<view class="t-icon t-icon-edit-info-more"></view>
					</view>

					<template #content>
						<view class="change-nickname-modal-content">
							<input
								v-model="user.nickname"
								type="text"
								placeholder="修改昵称"
								class="change-nickname-input"
							/>
						</view>
					</template>
				</Modal>
				<Modal>
					<view class="desc info-item border-bottom-radius">
						<text>介绍：{{ user.desc }}</text>
						<view class="space"></view>
						<view class="t-icon t-icon-edit-info-more"></view>
					</view>

					<template #content>
						<view class="change-desc-modal-content">
							<textarea
								v-model="user.desc"
								class="change-desc-input"
								placeholder="请输入介绍"
							/>
						</view>
					</template>
				</Modal>
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

				text {
					flex: 1;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.space {
					width: 5%;
				}
			}

			.border-bottom {
				border-bottom: 2rpx solid rgba(0, 0, 0, 0.08);
			}

			.border-top-radius {
				border-top-left-radius: 12rpx;
				border-top-right-radius: 12rpx;
			}

			.border-bottom-radius {
				border-bottom-left-radius: 12rpx;
				border-bottom-right-radius: 12rpx;
			}

			.t-icon {
				background-size: 32rpx !important;
			}

			.change-nickname-modal-content,
			.change-desc-modal-content {
				width: 100%;
				box-sizing: border-box;
				padding: 0 48rpx;
				.change-nickname-input,
				.change-desc-input {
					background-color: #f7f7f7;
					border-radius: 12rpx;
					font-size: 28rpx;
					box-sizing: border-box;
					padding-left: 24rpx;
					color: rgba(0, 0, 0, 0.6);
				}

				.change-nickname-input {
					height: 84rpx;
				}

				.change-desc-input {
					width: 100%;
					padding: 24rpx;
				}
			}
		}
	}
}
</style>
