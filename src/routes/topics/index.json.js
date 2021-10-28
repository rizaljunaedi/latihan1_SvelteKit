export async function get() {
	return {
		body: {
			topics: [
				{ topic: 'HTML', vote: 10 },
				{ topic: 'CS', vote: 8 },
				{ topic: 'Javasript', vote: 5 }
			]
		}
	};
}
