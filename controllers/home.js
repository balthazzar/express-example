module.exports = {
	test: data => {
		console.log('params in url', data);
	},
	queryEx: data => {
		console.log('params in query for GET request', data);
	},
	postEx: data => {
		console.log('params in body for POST request', data);
	}
}