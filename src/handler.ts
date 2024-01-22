import process from 'node:process';
import prettyMilliseconds from 'pretty-ms';

export const handler = async (event: any) => ({
	statusCode: 200,
	body: JSON.stringify({
		message: 'Hello, World!',
		uptime: prettyMilliseconds(process.uptime() * 1000),
	}),
});
