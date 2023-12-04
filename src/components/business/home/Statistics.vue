<script setup lang="ts">
const props = defineProps<{
	totalPay: number;
	totalIncome: number;
}>();
</script>

<template>
	<view class="total-income-pay">
		<view class="txt">
			<text class="total-pay money">{{ props.totalPay.toFixed(2) }}</text>
			<text class="description">总支出(元)</text>
		</view>
		<view class="separate-line"></view>
		<view class="txt">
			<text class="total-income money">{{ props.totalIncome.toFixed(2) }}</text>
			<text class="description">总收入(元)</text>
		</view>
	</view>
</template>

<style lang="scss">
.total-income-pay {
	display: flex;
	height: 144rpx;
	border-radius: 12rpx;
	background-color: #fff;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 40rpx;

	.txt {
		width: 248rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.money {
			font-size: 36rpx;
		}

		.description {
			font-size: 24rpx;
			color: rgba($color: #000000, $alpha: 0.6);
		}

		.total-pay {
			color: #e74c3c;
		}

		.total-income {
			color: #2ecc71;
		}
	}

	.separate-line {
		width: 2rpx;
		height: 72rpx;
		background-color: rgba($color: #000000, $alpha: 0.08);
	}
}
</style>
