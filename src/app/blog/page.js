export default async function Posts() {
	const posts = await getData()
	return (
		<ul>
			{posts.map((post) => (
				<li><a href={`blog/${post.id}`}> {post.title} </a></li>
			))}
		</ul>
	)
}
async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
