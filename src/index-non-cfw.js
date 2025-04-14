import { createRouter, Response } from '@whatwg-node/router'
import { createServer } from 'http'
import dayjs from 'dayjs'

const router = createRouter();

const users = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' },
	{ id: '3', name: 'Billy' }
];

router.get('/info', request => Response.json({
	"appName": "cfw-backend-testapp",
	"serverDatetime": dayjs().format('YYYY-MMM-DD HH:mm:ss')
}));

router.get('/users', request => Response.json(users));

const httpServer = createServer(router);
httpServer.listen(3001);
