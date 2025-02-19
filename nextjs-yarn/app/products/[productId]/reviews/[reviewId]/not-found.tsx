'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const ReviewNotFound = () => {
	const pathname = usePathname()
	const productId = pathname.split('/')[2]
	const reviewId = pathname.split('/')[4]

	return (
		<div>
			review of {reviewId} for "{productId}" not found
		</div>
	)
}

export default ReviewNotFound
