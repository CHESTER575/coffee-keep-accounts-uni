<script setup lang="ts">
import Header from './components/header.vue';
import Statistics from './components/statistics.vue';
import BillList from './components/BillList/BillList.vue';
import Tabbar from '@/components/Tabbar.vue';
import type {Bill} from './components/BillList/types';

// 安全区
const {safeArea} = uni.getSystemInfoSync();

// mock数据
const list: Bill = {
	id: 1,
	date: 1701366175000,
	income: 10,
	pay: 3,
	items: [
		{
			categoryTxt: '购物',
			icon: 'icon-gouwu',
			id: 3,
			income: 0,
			note: '抖音买书',
			pay: 10,
		},
		{
			categoryTxt: '红包',
			icon: 'icon-hongbao',
			id: 2,
			income: 3,
			note: '过年红包',
			pay: 0,
		},
	],
};

/**
 * 获取内容可显示的高度
 */
const calcContentHeight = () => {
	const safeTop = `${safeArea?.top}px`;
	const headerHeight = '84rpx';
	const tabbarHeight = '108rpx';

	return `calc(100vh - ${safeTop} - ${headerHeight} - ${tabbarHeight})`;
};

/**
 * 获取列表可显示的高度
 */
const calcListHeight = () => {
	const padding = '72rpx';
	const statisticsHeight = '144rpx';

	return `calc(${calcContentHeight()} - ${padding} - ${statisticsHeight})`;
};
</script>

<template>
	<view class="home">
		<view :style="{marginTop: `${safeArea?.top}px`}">
			<!-- 头部 -->
			<Header></Header>

			<!-- 内容 -->
			<view class="content" :style="{height: calcContentHeight()}">
				<!-- 统计 -->
				<Statistics :total-pay="0" :total-income="0"></Statistics>

				<!-- 列表 -->
				<scroll-view scroll-y :style="{height: calcListHeight()}">
					<view class="bill-list-scroll-view">
						<BillList v-for="item in 4" :key="item" :bill="list"></BillList>
					</view>
				</scroll-view>
			</view>

			<!-- 导航 -->
			<Tabbar></Tabbar>
		</view>
	</view>
</template>

<style lang="scss">
.home {
	max-height: 100vh;
	background-color: $bg-color;

	.content {
		display: flex;
		flex-direction: column;
		gap: 24rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 24rpx;

		.bill-list-scroll-view {
			display: flex;
			flex-direction: column;
			gap: 24rpx;
		}
	}
}
</style>
