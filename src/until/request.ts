import axios from 'axios';

class Request {
	constructor() {}

	get<T>(url: string, params: object): Promise<T> {
		return axios.get(url, {params});
	}

	post<T>(url: string, params: object): Promise<T> {
		return axios.post(url, params);
	}

	put<T>(url: string, params: object): Promise<T> {
		return axios.put(url, params);
	}

	delete<T>(url: string, params: object): Promise<T> {
		return axios.delete(url, params);
	}
}

export default Request;
