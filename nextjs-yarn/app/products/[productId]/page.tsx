import React from 'react'

const DetailProduct = async ({
	params,
}: {
	params: Promise<{ productId: string }>
}) => {
	const productId = (await params).productId
	return <div>ProductId {productId}</div>
}

export default DetailProduct
