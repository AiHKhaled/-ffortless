export const fetchDB = async () => {
	const res = await fetch('http://localhost:3000/chits');

	return res.json();
};

export const likeCounter = async (id: number, count: number) => {
	const data = { likes: count };
	const settings = {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		const url = `http://localhost:3000/chits/${id}`;
		const fetchResponse = await fetch(url, settings);
		const data = await fetchResponse.json();
		return data;
	} catch (e) {
		return e;
	}
};
