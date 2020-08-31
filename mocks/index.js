const proxy = {
	'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
	'GET /api/user/list': [
		{ id: 1, username: 'kenny', sex: 6 },
		{ id: 2, username: 'kenny', sex: 6 }
	],
	'POST /api/user/info': (req, res) => {
		const { userId } = req.body;
		if (userId === 2) {
			return res.send({ id: 2, username: 'KOB', sex: 6 });
		} else {
			return res.send({ status: 'error', code: 403 });
		}
	},
	'DELETE /api/user/:id': (req, res) => {
		res.send({ status: 'ok', message: '删除成功！' });
	}
};
module.exports = proxy;
