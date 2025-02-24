'use client'
import { Center, Flex, Grid, Stack } from '@mantine/core'
import React from 'react'

const ComplexDashboardLayout = ({
	children,
	users,
	revenue,
	notifications,
	login,
}: {
	children: React.ReactNode
	users: React.ReactNode
	revenue: React.ReactNode
	notifications: React.ReactNode
	login: React.ReactNode
}) => {
	const isLoggedIn = false

	return isLoggedIn ? (
		<Stack gap='md'>
			<Center>{children}</Center>
			<Grid>
				<Grid.Col span={6}>users {users}</Grid.Col>
				<Grid.Col span={6}>Notifications{notifications}</Grid.Col>
			</Grid>
			{revenue}
		</Stack>
	) : (
		login
	)
}

export default ComplexDashboardLayout
