<script setup lang="ts"></script>

<template>
	<view class="tab-bar">
		<view class="t-icon t-icon-shouye"></view>
		<view class="t-icon t-icon-tianjia2"></view>
		<view class="t-icon t-icon-wode"></view>
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

	.t-icon {
		flex: 1;
		background-repeat: no-repeat;
		height: 100%;
		background-position: center;
	}

	.t-icon-shouye,
	.t-icon-wode {
		background-size: 48rpx;
	}

	.t-icon-tianjia2 {
		background-size: 64rpx;
	}
}
</style>
