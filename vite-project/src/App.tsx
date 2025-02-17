import React, { useState } from 'react'
import {
	Flex,
	Button,
	Paper,
	AppShell,
	Burger,
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FaSun, FaMoon } from 'react-icons/fa'
import './App.css'
import ButtonComponent from './components/Buttons'
import TextComponent from './components/Text'

function App() {
	const { setColorScheme } = useMantineColorScheme({
		keepTransitions: true,
	})
	const computedColorScheme = useComputedColorScheme('light', {
		getInitialValueInEffect: true,
	})
	const Component1: React.FC = () => <ButtonComponent />
	const Component2: React.FC = () => <TextComponent />

	const [opened, { toggle }] = useDisclosure()
	const [currentComponent, setCurrentComponent] =
		useState<string>('component1')

	return (
		<div className='App' style={{ marginTop: '20px' }}>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 200,
					breakpoint: 'sm',
					collapsed: { mobile: !opened },
				}}
				padding='md'>
				<AppShell.Header>
					<Flex
						justify={'space-between'}
						align={'center'}
						style={{ padding: '10px 20px' }}>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom='sm'
							size='sm'
						/>
						<div>Logo Disini YaGesYa 😊😊😊😊</div>

						<Button
							size='sm'
							variant='outline'
							onClick={() =>
								setColorScheme(
									computedColorScheme === 'light' ? 'dark' : 'light'
								)
							}>
							{computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
						</Button>
					</Flex>
				</AppShell.Header>
				<AppShell.Navbar p='md' style={{ gap: '10px' }}>
					<Button
						onClick={() => setCurrentComponent('component1')}
						style={{ margin: '5px' }}>
						Text Button Component
					</Button>
					<Button
						onClick={() => setCurrentComponent('component2')}
						style={{ margin: '5px' }}>
						Button Component
					</Button>
				</AppShell.Navbar>
				<AppShell.Main>
					{currentComponent === 'component1' ? (
						<TextComponent />
					) : (
						<ButtonComponent />
					)}
				</AppShell.Main>
				<AppShell.Footer zIndex={opened ? 'auto' : 300}>
					Built by minipingu 😆😆😆
				</AppShell.Footer>
			</AppShell>
		</div>
	)
}

export default App
