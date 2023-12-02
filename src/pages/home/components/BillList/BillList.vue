<script setup lang="ts">
import type {Bill} from './types';
import BillItem from './BillItem.vue';
import moment from 'moment';
import {weeks} from '@/variable/week';
import type {WeekKeys} from '@/variable/week';
import {computed} from 'vue';

const props = defineProps<{
	bill: Bill;
}>();

const dateTxt = computed(() => {
	let result = '';

	const date = new Date(props.bill.date);
	const month = date.getMonth() + 1;
	const day = date.getDate();
	if (day.toString().length === 1) {
		result = `${month}/0${day}`;
	} else {
		result = `${month}/${day}`;
	}

	const weekEnglish = moment(date).format('dddd') as WeekKeys;
	if (weekEnglish in weeks) {
		result += ` ${weeks[weekEnglish]}`;
	}

	return result;
});

/* 账单点击事件 */
const handleBillClick = () => {
	uni.navigateTo({
		url: '/pages/bill-detail/bill-detail',
	});
};
</script>

<template>
	<view class="bill-list">
		<view class="header">
			<view>{{ dateTxt }}</view>
			<view>
				<text>收入：{{ props.bill.income.toFixed(2) }}</text>
				<text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
				<text>支出：{{ props.bill.pay.toFixed(2) }}</text>
			</view>
		</view>
		<view
			v-for="item in props.bill.items"
			:key="item.id"
			class="list"
			@click="handleBillClick"
		>
			<BillItem :bill="item"> </BillItem>
		</view>
	</view>
</template>

<style lang="scss">
.bill-list {
	background-color: #fff;
	border-radius: 12rpx;

	.header {
		display: flex;
		justify-content: space-between;
		height: 72rpx;
		box-sizing: border-box;
		padding: 0 24rpx;
		color: rgba($color: #000000, $alpha: 0.6);
		font-size: 24rpx;
		border-bottom: 2rpx solid rgba($color: #000000, $alpha: 0.08);
		align-items: center;
	}
}
</style>
