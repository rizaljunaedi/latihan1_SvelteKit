let topics = [
	{ id: 1, title: 'HTML', vote: 10 },
	{ id: 2, title: 'CSS', vote: 8 },
	{ id: 3, title: 'Javasript', vote: 5 },
	{ id: 4, title: 'PHP', vote: 5 },
	{ id: 5, title: 'JAVA', vote: 6 },
	{ id: 6, title: 'Phython', vote: 7 }
];

export async function get() {
	return {
		body: {
			topics
		}
	};
}

export async function path({ body }) {
	const data = JSON.parse(body);
	const topic = topics.find(function (t) {
		return t.id === parseInt(data.id);
	});
	topic.vote += 1;
	return {
		body: {
			status: 'OK',
			topics
		}
	};
}
