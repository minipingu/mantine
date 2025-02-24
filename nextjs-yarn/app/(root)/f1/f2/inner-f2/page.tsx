import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const InnerF2 = () => {
	return (
		<div>
			<div>InnerF2</div>
			<Anchor component={Link} href='/f5'>
				F5
			</Anchor>
		</div>
	)
}

export default InnerF2
