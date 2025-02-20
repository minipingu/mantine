import { Box, Button, Flex, Title } from '@mantine/core'
import './page.module.css'
import Link from 'next/link'

export default function Home() {
	return (
		<Flex>
			<Title order={1} className='text-3xl font-bold underline '>
				Welcome to Igloo!
			</Title>
			<Link href='/about'>
				<Button>About</Button>
			</Link>
		</Flex>
	)
}
