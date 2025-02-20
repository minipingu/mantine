import { notFound } from 'next/navigation'
import React from 'react'

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
	return (
		<div>
			product id : {productId}, review id : {reviewId}
		</div>
	)
}

export default review
