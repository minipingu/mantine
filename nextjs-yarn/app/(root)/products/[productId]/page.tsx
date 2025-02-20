import { Metadata } from 'next'
import React from 'react'

type params = {
	params: Promise<{ productId: string }>
}
// this is a dynamic metadata taken from params
export const generateMetadata = async ({ params }: params) => {
	return {
		title: (await params).productId,
		description: 'Detail Product Page',
	}
}

const DetailProduct = async ({ params }: params) => {
	const productId = (await params).productId
	return <div>ProductId {productId}</div>
}

export default DetailProduct
