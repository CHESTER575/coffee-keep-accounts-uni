<script setup lang="ts">
import type {PropType} from 'vue';
import {computed} from 'vue';
import {toRefs} from 'vue';
import {ref} from 'vue';
import type {DatePickerProps, DatePickerEmitParam} from './types';
import {watch} from 'vue';

const props = defineProps({
	types: {
		type: Object as PropType<DatePickerProps['types']>,
		default() {
			return {
				showYear: true,
				showMonth: true,
				showDay: true,
			};
		},
	},
	modelValue: {
		type: Object as PropType<DatePickerProps['value']>,
		default() {
			const date = new Date();
			const year = date.getFullYear().toString();
			const month = date.getMonth() + 1;
			const day = date.getDate();

			return {
				year,
				month: month.toString().length === 1 ? `0${month}` : month.toString(),
				day: day.toString().length === 1 ? `0${day}` : day.toString(),
			};
		},
	},
	startDate: {
		type: Object as PropType<DatePickerProps['startDate']>,
		default() {
			const date = new Date();
			const year = date.getFullYear() - 10;
			return {year: year.toString(), month: '01', day: '01'};
		},
	},
	endDate: {
		type: Object as PropType<DatePickerProps['endDate']>,
		default() {
			const date = new Date();
			const year = date.getFullYear() + 10;
			return {year: year.toString(), month: '01', day: '01'};
		},
	},
});

const emits = defineEmits<{
	(e: 'update:modelValue', value: DatePickerEmitParam): void;
	(e: 'confirm', value: DatePickerEmitParam): void;
}>();

// 选择器显示状态
const state = ref(false);

// 开始日期和结束日期
const {startDate, endDate, modelValue} = toRefs(props);

// 选择的日期
const selectedDate = ref<DatePickerEmitParam>({
	year: modelValue.value.year,
	month: modelValue.value.month,
	day: modelValue.value.day,
});

// 年的可选范围
const years = computed(() => {
	const arr: number[] = [];
	const start = Number(startDate.value.year);
	const end = Number(endDate.value.year);
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
});

// 月的可选范围
const months = computed(() => {
	const arr: number[] = [];
	for (let i = 1; i <= 12; i++) {
		arr.push(i);
	}
	return arr;
});

// 日的可选范围
const days = computed(() => {
	const year = Number(selectedDate.value.year);
	const month = Number(selectedDate.value.month);
	let days = new Date(year, month, 0).getDate();
	const arr: number[] = [];
	for (let i = 1; i <= days; i++) {
		arr.push(i);
	}
	return arr;
});

// 选项改变事件
const handleChange: UniHelper.PickerViewOnChange = (event) => {
	const year = years.value[event.detail.value[0]];
	const month = event.detail.value[1] + 1;
	selectedDate.value.year = year.toString();
	if (month.toString().length === 1) {
		selectedDate.value.month = `0${month}`;
	} else {
		selectedDate.value.month = month.toString();
	}
	if (event.detail.value[2]) {
		selectedDate.value.day = event.detail.value[2].toString();
	}
};

// 确认按钮点击事件
const handleConfirm = () => {
	const returnObj = {...selectedDate.value};
	if (!props.types.showDay) {
		delete returnObj.day;
	}
	emits('update:modelValue', returnObj);
	emits('confirm', returnObj);
	state.value = false;
};

const pickerViewValue = computed(() => {
	const result: number[] = [];

	const yearIndex = years.value.indexOf(Number(selectedDate.value.year));
	const monthIndex = months.value.indexOf(Number(selectedDate.value.month));
	result.push(yearIndex);
	result.push(monthIndex);

	if (props.types.showDay) {
		const dayIndex = days.value.indexOf(Number(selectedDate.value.day));
		result.push(dayIndex);
	}

	return result;
});

watch(modelValue, (value) => {
	selectedDate.value.year = value.year;
	selectedDate.value.month = value.month;
	selectedDate.value.day = value.day;
});
</script>

<template>
	<view @click="state = true">
		<slot></slot>
	</view>

	<view v-if="state" class="cka-date-picker-mask" @click="state = false">
		<view class="cka-date-picker">
			<view class="header">
				<text class="cancel" @click="state = false">取消</text>
				<text class="title">选择日期</text>
				<text class="confirm" @click.stop="handleConfirm">确认</text>
			</view>
			<view class="content">
				<picker-view
					indicator-style="height: 96rpx; background: rgba(0, 0, 0, 0.02);"
					class="list"
					:value="pickerViewValue"
					@change="handleChange"
				>
					<picker-view-column v-if="props.types.showYear">
						<view v-for="item in years" :key="item" class="item">
							{{ item }}
						</view>
					</picker-view-column>
					<picker-view-column v-if="props.types.showMonth">
						<view v-for="item in months" :key="item" class="item">
							{{ item }}
						</view>
					</picker-view-column>
					<picker-view-column v-if="props.types.showDay">
						<view v-for="item in days" :key="item" class="item">
							{{ item }}
						</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.cka-date-picker-mask {
	background-color: rgba($color: #000000, $alpha: 0.04);
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999999;
	display: flex;
	align-items: flex-end;

	.cka-date-picker {
		width: 100%;
		height: 768rpx;
		background-color: #fff;

		.header {
			display: flex;
			height: 96rpx;
			box-sizing: border-box;
			padding: 0 24rpx;
			align-items: center;
			justify-content: space-between;

			.cancel,
			.confirm {
				font-size: 24rpx;
			}

			.confirm {
				color: $primary-color;
			}
		}

		.content {
			height: 100%;

			.list {
				width: 100vw;
				height: 100%;

				.item {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
}
</style>
