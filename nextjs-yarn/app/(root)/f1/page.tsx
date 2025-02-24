import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const f1 = () => {
	return (
		<div>
			<div>f1 Page</div>
			<div>
				<Anchor component={Link} href={'/f1/f2'} passHref>
					f2
				</Anchor>
				<Anchor component={Link} href={'/f3'} passHref>
					f3
				</Anchor>
			</div>
		</div>
	)
}

export default f1
