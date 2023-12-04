<script setup lang="ts">
import {ref} from 'vue';
import DatePicker from '@/components/common/DatePicker/DatePicker.vue';
import type {handleConfirm} from '@/components/common/DatePicker/types';

const emits = defineEmits<{
	(e: 'changeDate', value: {year: string; month: string}): void;
}>();

// 日期
const date = ref('');

/**
 * 初始化date方法
 */
const initDate = () => {
	const _date = new Date();
	const year = _date.getFullYear();
	const month = _date.getMonth() + 1;
	date.value = `${year}-${month}`;
};

/**
 * 修改日期方法
 */
const handleChangeDate: handleConfirm = (ev) => {
	date.value = `${ev.year}-${ev.month}`;
	emits('changeDate', {year: ev.year, month: ev.month});
};

initDate();
</script>

<template>
	<view class="date-header">
		<DatePicker
			:types="{showYear: true, showMonth: true, showDay: false}"
			@confirm="handleChangeDate"
		>
			<view class="date-txt">
				<text>{{ date }}</text>
				<text class="iconfont icon-xiangxiazhankai"></text>
			</view>
		</DatePicker>
	</view>
</template>

<style lang="scss">
.date-header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 84rpx;
	background-color: #fff;

	.date-txt {
		display: flex;
		gap: 24rpx;
		align-items: center;
	}
}
</style>
