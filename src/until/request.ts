import axios, {type AxiosInstance} from 'axios';

class CustomError extends Error {
	code: string;

	constructor(msg: string, code: string) {
		super(msg);
		this.code = code;
	}

	getCode() {
		return this.code;
	}
}

class Request {
	http: AxiosInstance;

	constructor() {
		this.http = axios.create({
			baseURL: 'https://xxx.com/api/',
			timeout: 5000,
		});
	}

	async get<T>(url: string, params: object): Promise<T> {
		const {data} = await this.http.get(url, {params});
		if (data.code !== '0') {
			throw new CustomError(data.msg, data.code);
		} else {
			return data.data;
		}
	}

	async post<T>(url: string, params: object): Promise<T> {
		const {data} = await this.http.post(url, {data: params});
		if (data.code !== '0') {
			throw new CustomError(data.msg, data.code);
		} else {
			return data.data;
		}
	}

	async put<T>(url: string, params: object): Promise<T> {
		const {data} = await this.http.put(url, {data: params});
		if (data.code !== '0') {
			throw new CustomError(data.msg, data.code);
		} else {
			return data.data;
		}
	}

	async delete<T>(url: string, params: object): Promise<T> {
		const {data} = await this.http.post(url, {data: params});
		if (data.code !== '0') {
			throw new CustomError(data.msg, data.code);
		} else {
			return data.data;
		}
	}

	async patch<T>(url: string, params: object): Promise<T> {
		const {data} = await this.http.post(url, {data: params});
		if (data.code !== '0') {
			throw new CustomError(data.msg, data.code);
		} else {
			return data.data;
		}
	}
}

export default Request;
