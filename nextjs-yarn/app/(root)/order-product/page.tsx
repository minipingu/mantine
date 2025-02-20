'use client'
import { Button, Title } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProgrammaticNavigation = () => {
	const router = useRouter()
	const handleClick = () => {
		console.log('Placing your order')
		router.push('/')
		//use router.replace to replace the current page in the history stack
		//use router.back to go back to the previous page
	}
	return (
		<>
			<Title order={1}>Order Product</Title>
			<Button onClick={handleClick}>Place Order</Button>
		</>
	)
}

export default ProgrammaticNavigation
