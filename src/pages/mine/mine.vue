<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue';

// 安全区
const {safeArea} = uni.getSystemInfoSync();
</script>

<template>
	<view class="safe-top" :style="{height: `${safeArea?.top}px`}"></view>
	<view class="mine" :style="{height: `calc(100vh - ${safeArea?.top}px)`}">
		<view class="body">
			<view class="user body-item">
				<view class="info">
					<view class="t-icon t-icon-icon-avatar avatar"></view>
					<view class="name">请登录</view>
				</view>
				<view class="more">
					<view class="t-icon t-icon-edit-info-more"></view>
				</view>
			</view>
			<view class="asset-manager body-item">
				<view class="title">
					<text class="txt">资产管理</text>
					<view class="t-icon t-icon-edit-info-more"></view>
				</view>
				<view class="statistics">
					<view class="asset statistics-item">
						<text class="txt">净资产</text>
						<text class="number">0.00</text>
					</view>
					<view class="liabilities statistics-item">
						<text class="txt">总负债</text>
						<text class="number">0.00</text>
					</view>
				</view>
			</view>
			<view class="accountant body-item">
				<view class="left">
					<view class="t-icon t-icon-shuangsechangyongtubiao-"></view>
					<text class="txt">收支统计</text>
				</view>
				<view class="t-icon t-icon-edit-info-more"></view>
			</view>
			<view class="setting-about body-item">
				<view class="setting">
					<view class="left">
						<view class="t-icon t-icon-shezhi"></view>
						<view class="txt">设置</view>
					</view>
					<view class="t-icon t-icon-edit-info-more"></view>
				</view>
				<view class="about">
					<view class="left">
						<view class="t-icon t-icon-guanyu"></view>
						<view class="txt">关于</view>
					</view>
					<view class="t-icon t-icon-edit-info-more"></view>
				</view>
			</view>
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<style scoped lang="scss">
.safe-top {
	background-color: #f7f7f7;
}

.mine {
	background-color: #f7f7f7;

	.body {
		height: calc(100% - 108rpx);
		box-sizing: border-box;
		padding: 24rpx;
		display: flex;
		flex-direction: column;
		gap: 24rpx;

		.body-item {
			border-radius: 12rpx;
			background-color: #fff;
		}

		.user {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 36rpx;
			height: 132rpx;

			.info {
				display: flex;
				align-items: center;
				gap: 24rpx;

				.avatar {
					width: 84rpx;
					height: 84rpx;
				}

				.name {
					color: rgba($color: #000000, $alpha: 0.85);
					font-size: 28rpx;
				}
			}
		}

		.asset-manager {
			height: 252rpx;
			display: flex;
			flex-direction: column;
			gap: 24rpx;
			box-sizing: border-box;
			padding: 36rpx;

			.title {
				display: flex;
				justify-content: space-between;

				.txt {
					font-size: 28rpx;
				}
			}

			.statistics {
				display: flex;

				.statistics-item {
					flex: 1;
					display: flex;
					flex-direction: column;

					.txt {
						font-size: 24rpx;
						color: rgba(0, 0, 0, 0.3);
					}

					.number {
						font-size: 56rpx;
						color: rgba(0, 0, 0, 0.85);
					}
				}
			}
		}

		.accountant,
		.setting,
		.about {
			height: 84rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 36rpx;

			.left {
				display: flex;
				gap: 12rpx;
				align-items: center;

				.txt {
					font-size: 28rpx;
				}
			}
		}
	}
}
</style>
