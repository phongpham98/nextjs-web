import axios, { AxiosRequestConfig, Method } from "axios";
import qs from "qs";

// export const ApiHeader = {
// 	Authorization: "Bearer " + Cookies.get(KEY_ACCESS_TOKEN),
// 	version: "2.0",
// };

export default async function request<T>(
	method: Method,
	url: string,
	data?: any,
) {
	const headers: any = {};
	headers['website'] = true;

	const config: AxiosRequestConfig = {
		method,
		headers,
		url,
		paramsSerializer: params => 
			qs.stringify(params, {
				indices: false,
				skipNulls: true,
			}),
	};

	if(method === "GET" || method === "get"){
		config.params = data;
	}else {
		config.data = data;
	}

	try {
		const response = await axios.request(config);
		if (response && response.data) return response.data as T;
	} catch (err: any) {
		// if (err.response.status === 401) {
		// 	// store.dispatch(logout());
		// 	throw new Error(err.response.data["errors"][0]);
		// }
		// if (
		// 	err.response.data["errors"] !== undefined &&
		// 	err.response.data["errors"][0] !== undefined
		// ) {
		// 	throw new Error(err.response.data["errors"][0]);
		// }
		throw err;
	}
}