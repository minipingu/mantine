import React from 'react'

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
	const { slug } = await params
	const a = [1, 2, 3, 4]

	if (slug?.length > 1) {
		return <div>Docs /{slug.join('/')}</div>
	} else if (slug?.length === 1) {
		return <div>Docs /{slug[0]}</div>
	}
	return <div>Docs </div>
}

export default Docs
