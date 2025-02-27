import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './../globals.css'
import '@mantine/core/styles.css'
import {
	createTheme,
	MantineProvider,
	ColorSchemeScript,
	mantineHtmlProps,
	Container,
} from '@mantine/core'
import { GeneralHeader } from '../components/header/general-header'
import { GeneralFooter } from '../components/footer/general-footer'

const theme = createTheme({
		/** Put your mantine theme override here */
})

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: 'default Made by Minipingu',
		template: '%s | (template) Made by Minipingu',
	},
	description: 'Generated by create next app',
}

type params = {
	children: React.ReactNode
}

export default function RootLayout({ children }: params) {
	return (
		<html lang='en' {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
				<link rel='shortcut icon' href='/favicon.svg' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MantineProvider defaultColorScheme='dark' theme={theme}>
					<GeneralHeader />
					<Container>{children}</Container>
					<GeneralFooter />
				</MantineProvider>
			</body>
		</html>
	)
}
