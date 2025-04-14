import { createRouter, Response } from '@whatwg-node/router'
import dayjs from 'dayjs'

const APP_NAME = 'cfw-backend-testapp';
const APP_API_ROOTPATH = '/v1/api';
const router = createRouter();

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		router.get(APP_API_ROOTPATH + '/info', request => Response.json({
			'appName': APP_NAME,
			'appEnv': env,
			'serverDatetime': dayjs().format('YYYY-MMM-DD HH:mm:ss')
		}));

		if (url.pathname.startsWith(APP_API_ROOTPATH))
			return router.handle(request, env, ctx);
		else
			return new Response(
					'Hello World! by VS Code Codespaces Extension. ('
					+ dayjs().format('YYYY-MMM-DD HH:mm:ss') + ')');
	},
};
