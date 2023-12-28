<script setup lang="ts">
import type {BillItem} from './types';

const props = defineProps<{
	bill: BillItem;
}>();
</script>

<template>
	<view class="bill-item">
		<view class="icon-txt">
			<view :class="['t-icon', `t-${$props.bill.icon}`]"> </view>
			<text class="category-txt">{{ props.bill.categoryTxt }}</text>
			<text class="note">&nbsp;-&nbsp;{{ props.bill.note }}</text>
		</view>
		<view v-if="props.bill.pay > 0" class="pay"
			>-{{ props.bill.pay.toFixed(2) }}</view
		>
		<view v-else class="income">+{{ props.bill.income.toFixed(2) }}</view>
	</view>
</template>

<style lang="scss">
.bill-item {
	display: flex;
	height: 96rpx;
	align-items: center;
	padding: 0 24rpx;
	justify-content: space-between;

	.icon-txt {
		display: flex;
		align-items: center;

		.t-icon {
			width: 48rpx;
			height: 48rpx;
			margin-right: 32rpx;
		}

		.category-txt {
			font-size: 32rpx;
			color: rgba($color: #000000, $alpha: 0.85);
		}

		.note {
			font-size: 24rpx;
			color: rgba($color: #000000, $alpha: 0.6);
		}
	}

	.pay {
		font-size: 28rpx;
		color: #e74c3c;
	}

	.income {
		font-size: 28rpx;
		color: #2ecc71;
	}
}
</style>
