<script lang="ts" setup>
import {computed} from 'vue';

// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 页面参数
const props = defineProps<{
	bill: string;
}>();

// 将页面参数转换为对象
const bill = computed(() => JSON.parse(props.bill));

// 日期格式化
const date = computed(() => {
	const _date = new Date(bill.value.date);
	const year = _date.getFullYear();
	const month = _date.getMonth() + 1;
	const day = _date.getDate();

	return `${year}年${month}月${day}日`;
});
</script>

<template>
	<view class="bill-detail">
		<view class="header" :style="{marginTop: `${safeArea?.top}px`}">
			<view class="back">
				<navigator open-type="navigateBack" hover-class="none">
					<text class="t-icon t-icon-back"></text>
				</navigator>
			</view>
			<view class="title">账单详情</view>
			<view class="right"></view>
		</view>
		<view class="body">
			<view class="content">
				<view class="item">
					<view class="title">金额</view>
					<view class="money-box">
						<text>
							{{ bill.pay > 0 ? bill.pay : bill.income }}
						</text>
						<text class="t-icon t-icon-edit-info-more"></text>
					</view>
				</view>
				<view class="item">
					<view class="title">分类</view>
					<view class="money-box">
						<text>{{ bill.category }}</text>
						<text class="t-icon t-icon-edit-info-more"></text>
					</view>
				</view>
				<view class="item">
					<view class="title">时间</view>
					<view class="money-box">
						<text>{{ date }}</text>
						<text class="t-icon t-icon-edit-info-more"></text>
					</view>
				</view>
				<view class="item">
					<view class="title">备注</view>
					<view class="money-box">
						<text>{{ bill.note }}</text>
						<text class="t-icon t-icon-edit-info-more"></text>
					</view>
				</view>
			</view>
			<view class="del">删除</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.bill-detail {
	width: 100vw;
	max-height: 100vh;
	height: 100vh;
	background-color: $bg-color;

	.header {
		width: 100%;
		height: 84rpx;
		display: flex;
		background-color: #fff;

		view {
			flex: 1;
			height: 100%;
		}

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: $font-size-14;
			color: $title-color;
		}

		.back {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding-left: 24rpx;
		}
	}

	.body {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: $padding-12;
		display: flex;
		flex-direction: column;
		gap: 24rpx;

		.content {
			background-color: #fff;
			border-radius: $border-radius-6;

			.item {
				width: 100%;
				height: 96rpx;
				display: flex;
				box-sizing: border-box;
				padding: 0 $padding-12;
				justify-content: space-between;
				align-items: center;

				.title {
					font-size: $font-size-14;
					color: $title-color;
				}

				.money-box {
					display: flex;
					align-items: center;
					gap: 8rpx;
					font-size: $font-size-14;
					color: $secondary-color;

					.t-icon {
						width: $icon-size-14;
						height: $icon-size-14;
						opacity: 0.6;
					}
				}
			}
		}

		.del {
			width: 100%;
			height: 96rpx;
			background-color: #fff;
			border-radius: $border-radius-6;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: $font-size-14;
			color: $red-color;
		}
	}
}
</style>
