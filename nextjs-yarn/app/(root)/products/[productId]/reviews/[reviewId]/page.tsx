import { notFound } from 'next/navigation'
import React from 'react'

function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}
const review = async ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>
}) => {
	const { productId, reviewId } = await params
	if (Number(reviewId) > 1000) {
		//trigger not found page
		notFound()
		// or use redirect
		// redirect('/products')
	}

	const random = getRandomInt(2)
	if(random === 1) throw new Error('error loading review')

	return (
		<div>
			product id : {productId}, review id : {reviewId}
		</div>
	)
}

export default review
