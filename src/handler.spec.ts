import {handler} from './handler.js';

describe('Handler', () => {
	it('should return 200', async () => {
		const rawResponse = await handler({});
		expect(rawResponse.statusCode).toBe(200);

		const response = JSON.parse(rawResponse.body) as {message: string; uptime: string};
		expect(response.message).toBe('Hello, World!');
		expect(typeof response.uptime).toBe('string');
	});
});
