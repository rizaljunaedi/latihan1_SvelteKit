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
	const updatedTopic = topics.find(function (topic) {
		return topic.id === parseInt(data.id);
	});
	updatedTopic.vote += 1;
	topics = topics.filter(function (topic) {
		return topic.id !== updatedTopic.id;
	});
	topics.push(updatedTopic);
	return {
		body: {
			status: 'OK',
			topics
		}
	};
}
