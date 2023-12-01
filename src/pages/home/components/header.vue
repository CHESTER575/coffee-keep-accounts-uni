<script setup lang="ts">
import {ref} from 'vue';

// 日期
const date = ref('');

/**
 * 初始化date方法
 */
const initDate = () => {
	const _date = new Date();
	const year = _date.getFullYear();
	const month = _date.getMonth() + 1;
	date.value = `${year}年${month}月`;
};

initDate();
</script>

<template>
	<view class="date-header">
		{{ date }}
		<text class="iconfont icon-xiangxiazhankai"></text>
	</view>
</template>

<style lang="scss">
.date-header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 84rpx;
	gap: 24rpx;
	background-color: #fff;
}
</style>
