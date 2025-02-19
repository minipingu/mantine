import { Title } from '@mantine/core'
import React from 'react'

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Title order={2}>Featured Products</Title>
		</>
	)
}

export default ProductDetailsLayout
