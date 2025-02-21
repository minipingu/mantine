import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: {
		absolute: 'blog',
	},
}

const BlogSecond = async () => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve('intentional delay')
		}, 2000)
	)
	return <div>BlogSecond</div>
}

export default BlogSecond
