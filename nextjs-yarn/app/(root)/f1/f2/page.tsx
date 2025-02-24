import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const f2 = () => {
	return (
		<div>
			<div>f2 Page</div>
			<Anchor component={Link} href={'/f4'}>
				F4
			</Anchor>
		</div>
	)
}

export default f2
