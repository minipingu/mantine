import React from 'react'

const review = async ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>
}) => {
	const productId = (await params).productId
	const reviewId = (await params).reviewId

	return (
		<div>
			product id : {productId}, review id : {reviewId}
		</div>
	)
}

export default review
