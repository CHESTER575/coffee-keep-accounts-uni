<script setup lang="ts">
// 当前页面的名称
import {computed} from 'vue';

const currentPageName = computed(() => {
	const instance = getCurrentPages().at(-1)!;
	return instance.route!.split('/').at(-1);
});
</script>

<template>
	<view class="tab-bar">
		<navigator url="/pages/home/home" hover-class="none" class="tab-item">
			<view
				class="t-icon"
				:class="
					currentPageName === 'home' ? 't-icon-shouye-copy' : 't-icon-shouye'
				"
			></view>
		</navigator>
		<navigator hover-class="none" class="tab-item">
			<view class="t-icon t-icon-tianjia2"></view>
		</navigator>
		<navigator url="/pages/mine/mine" hover-class="none" class="tab-item">
			<view
				class="t-icon"
				:class="currentPageName === 'mine' ? 't-icon-wode-copy' : 't-icon-wode'"
			></view>
		</navigator>
	</view>
</template>

<style lang="scss">
.tab-bar {
	height: 108rpx;
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100vw;
	background-color: #fff;

	.tab-item {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.t-icon {
			background-repeat: no-repeat;
			background-position: center;
		}

		.t-icon-shouye,
		.t-icon-wode,
		.t-icon-shouye-copy,
		.t-icon-wode-copy {
			width: 48rpx;
			height: 48rpx;
		}

		.t-icon-tianjia2 {
			width: 64rpx;
			height: 64rpx;
		}
	}
}
</style>
