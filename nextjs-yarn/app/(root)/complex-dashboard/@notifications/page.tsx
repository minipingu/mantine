'use client'
import {
	ActionIcon,
	Anchor,
	Button,
	Card,
	Flex,
	Group,
	Image,
	Menu,
	SimpleGrid,
	Text,
} from '@mantine/core'
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react'
import Link from 'next/link'

const images = [
	'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
	'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
	'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
]

export default function Notifications() {
	return (
		<Card withBorder shadow='sm' radius='md'>
			<Card.Section withBorder inheritPadding py='xs'>
				<Group justify='space-between'>
					<Text fw={500}>Review pictures</Text>
					<Menu withinPortal position='bottom-end' shadow='sm'>
						<Menu.Target>
							<ActionIcon variant='subtle' color='gray'>
								<IconDots size={16} />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item leftSection={<IconFileZip size={14} />}>
								Download zip
							</Menu.Item>
							<Menu.Item leftSection={<IconEye size={14} />}>
								Preview all
							</Menu.Item>
							<Menu.Item
								leftSection={<IconTrash size={14} />}
								color='red'>
								Delete all
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Card.Section>

			<Text mt='sm' c='dimmed' size='sm'>
				<Text span inherit c='var(--mantine-color-anchor)'>
					200+ images uploaded
				</Text>{' '}
				since last visit, review them to select which one should be added to
				your gallery
			</Text>

			<Card.Section mt='sm'>
				<Image src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png' />
			</Card.Section>

			<Card.Section inheritPadding mt='sm' pb='md'>
				<SimpleGrid cols={3}>
					{images.map((image) => (
						<Image src={image} key={image} radius='sm' />
					))}
				</SimpleGrid>
			</Card.Section>
			<Flex justify={'flex-end'}>
				<Anchor component={Link} href={'/complex-dashboard/archived'}>
					Archived
				</Anchor>
			</Flex>
		</Card>
	)
}
