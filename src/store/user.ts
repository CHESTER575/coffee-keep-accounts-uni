import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useUserStore = defineStore('user', () => {
	const isLogin = ref(false);

	const login = async (username: string, pwd: string) => {
		// TODO 登录逻辑

		isLogin.value = true;
		return {
			username: '张三',
		};
	};

	// 获取登录状态方法
	const getLoginState = () => {
		return isLogin.value;
	};

	return {
		login,
		getLoginState,
	};
});
