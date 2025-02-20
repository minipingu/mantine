import { Box, Button, Title } from '@mantine/core'
import './page.module.css'
export default function Home() {
	return (
		<Box>
			<Title order={3} className='text-3xl font-bold underline'>
				This is TITLE
			</Title>
			<Button>ini Button</Button>
		</Box>
	)
}
