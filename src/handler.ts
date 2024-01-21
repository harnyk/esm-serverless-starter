
export const handler = async (event: any) => ({
	statusCode: 200,
	body: JSON.stringify({
		message: 'Hello, World!',
	}),
});
