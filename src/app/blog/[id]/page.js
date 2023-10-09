export default async function Page({ params: { id } }) {
	const item = await getPost(id)
	return (
		<>
			<h1>{item.title}</h1>
			<hr/>
			{item.body}
		</>
	)
}

async function getPost(id) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

