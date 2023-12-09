<script setup lang="ts">
import {ref} from 'vue';

const emits = defineEmits<{
	(e: 'cancel'): void;
	(e: 'confirm'): void;
}>();

const props = defineProps({
	title: {
		type: Boolean,
		default: true,
	},
	titleText: {
		type: String,
		default: '弹窗标题',
	},
	confirmBtnState: {
		type: Boolean,
		default: true,
	},
	cancelBtnState: {
		type: Boolean,
		default: true,
	},
	confirmBtnText: {
		type: String,
		default: '确认',
	},
	cancelBtnText: {
		type: String,
		default: '取消',
	},
	confirmBtnColor: {
		type: String,
		default: '#E74C3C',
	},
	cancelBtnColor: {
		type: String,
		default: '#EAA44F',
	},
	modalToTopGap: {
		type: Number,
		default: 384,
	},
});

// 弹窗组件实例
const modalMaskRef = ref<UniHelper.ViewInstance>();

// 弹窗状态
const modalState = ref(false);

// 取消事件
const handleCancel = () => {
	toggleModalState();
	emits('cancel');
};

// 确认事件
const handleConfirm = () => {
	toggleModalState();
	emits('confirm');
};

// 切换组件显示状态事件
function toggleModalState() {
	modalState.value = !modalState.value;
}
</script>

<template>
	<view class="default-slot" @click="toggleModalState">
		<slot></slot>
	</view>

	<uni-transition mode-class="fade" :show="modalState">
		<view
			ref="modalMaskRef"
			class="modal-mask"
			:style="`padding-top: ${props.modalToTopGap}rpx;`"
			@click="toggleModalState"
		>
			<view class="modal" @click.stop="() => {}">
				<slot name="header">
					<view v-if="props.title" class="header">
						{{ props.titleText }}
					</view>
				</slot>
				<slot name="content"></slot>
				<slot name="footer">
					<view class="footer">
						<view class="cancel" @click="handleCancel">取消</view>
						<view class="confirm" @click="handleConfirm">确认</view>
					</view>
				</slot>
			</view>
		</view>
	</uni-transition>
</template>

<style scoped lang="scss">
.modal-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba($color: #000000, $alpha: 0.4);
	box-sizing: border-box;
	z-index: 999999;

	.modal {
		width: 654rpx;
		height: 336rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 48rpx 0 0 0;
		background-color: #fff;
		border-radius: 32rpx;
		box-shadow: 0 0 44rpx - 14rpx rgba(0, 0, 0, 0.3);
		margin: 0 auto;

		.header {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.footer {
			height: 84rpx;
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			padding: 0;
			align-self: stretch;
			box-sizing: border-box;
			border-width: 2rpx 0 0 0;
			border-style: solid;
			border-color: rgba(0, 0, 0, 0.08);
			z-index: 2;

			view {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				border-width: 0 1px 0 0;
				border-style: solid;
				border-color: rgba(0, 0, 0, 0.08);
				font-family: 思源黑体;
				font-size: $font-size-14;
			}

			.cancel {
				color: $red-color;
			}

			.confirm {
				color: $primary-color;
			}
		}
	}
}
</style>
