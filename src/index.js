import dayjs from 'dayjs'

export default {
	async fetch(request, env, ctx) {
		return new Response(
				'Hello World! by VS Code Codespaces Extension. ('
				+ dayjs().format('YYYY-MMM-DD HH:mm:ss') + ')');
	},
};
