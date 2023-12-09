<script lang="ts" setup>
import {computed, ref, watch} from 'vue';
import Modal from '@/components/common/Modal/Modal.vue';
import DatePicker from '@/components/common/DatePicker/DatePicker.vue';
import type {DatePickerProps} from '@/components/common/DatePicker/types';

// TODO 缺少删除逻辑
// TODO 缺少分类选择

// 安全区
const {safeArea} = uni.getSystemInfoSync();

// 页面参数
const props = defineProps<{
	bill: string;
}>();

// 将页面参数转换为对象
const bill = ref(JSON.parse(props.bill));

// 日期格式化
const date = computed(() => {
	const _date = new Date(bill.value.date);
	const year = _date.getFullYear();
	const month = _date.getMonth() + 1;
	const day = _date.getDate();

	return `${year}年${month}月${day}日`;
});

// 日期选择器绑定的值
const datePickerVal = ref<DatePickerProps['value']>({
	year: '',
	month: '',
	day: '',
});

// 删除事件
const handleDel = () => {
	/* 删除逻辑 */
};

// 初始化日期选择器绑定值的事件
const initDatePickerVal = () => {
	const _date = new Date(bill.value.date);
	const year = _date.getFullYear();
	const month = _date.getMonth() + 1;
	const day = _date.getDate();
	datePickerVal.value.year = year.toString();
	datePickerVal.value.month = month.toString();
	datePickerVal.value.day = day.toString();
};
initDatePickerVal();

watch(datePickerVal, (value) => {
	const {year, month, day} = value;
	const date = new Date(Number(year), Number(month) - 1, Number(day));
	bill.value.date = date.getTime();
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
				<!-- 金额 -->
				<Modal title-text="修改金额">
					<view class="item">
						<view class="title">金额</view>
						<view class="money-box">
							<text>
								{{ bill.pay > 0 ? bill.pay : bill.income }}
							</text>
							<text class="t-icon t-icon-edit-info-more"></text>
						</view>
					</view>

					<template #content>
						<view v-if="bill.pay" class="money-change-box">
							<input v-model="bill.pay" type="text" placeholder="请输入金额" />
						</view>
						<view v-else class="money-change-box">
							<input
								v-model="bill.income"
								type="text"
								placeholder="请输入金额"
							/>
						</view>
					</template>
				</Modal>

				<!-- 分类 -->
				<view class="item">
					<view class="title">分类</view>
					<view class="money-box">
						<text>{{ bill.category }}</text>
						<text class="t-icon t-icon-edit-info-more"></text>
					</view>
				</view>

				<!-- 日期 -->
				<Modal title-text="修改日期">
					<view class="item">
						<view class="title">时间</view>
						<view class="money-box">
							<text>{{ date }}</text>
							<text class="t-icon t-icon-edit-info-more"></text>
						</view>
					</view>

					<template #content>
						<DatePicker v-model="datePickerVal">
							<view class="note-change-box">
								{{ date }}
							</view>
						</DatePicker>
					</template>
				</Modal>

				<!-- 备注 -->
				<Modal title-text="修改备注">
					<view class="item">
						<view class="title">备注</view>
						<view class="money-box">
							<text>{{ bill.note }}</text>
							<text class="t-icon t-icon-edit-info-more"></text>
						</view>
					</view>

					<template #content>
						<view class="note-change-box">
							<input v-model="bill.note" type="text" placeholder="请输入备注" />
						</view>
					</template>
				</Modal>
			</view>

			<Modal :title="false" @confirm="handleDel">
				<view class="del">删除</view>

				<template #content>
					<text>确定要删除吗？</text>
				</template>
			</Modal>
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

			.money-change-box,
			.note-change-box {
				width: 558rpx;
				height: 72rpx;
				background: rgba(0, 0, 0, 0.04);
				padding-left: 24rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				border-radius: 12rpx;
				color: $secondary-color;
				font-size: 28rpx;
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
