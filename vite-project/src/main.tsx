import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css'
import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({
	// fontFamily: 'Open Sans, sans-serif',
	// primaryColor: 'cyan',
})

createRoot(document.getElementById('root')!).render(
	<MantineProvider theme={theme}>
		<StrictMode>
			<App />
		</StrictMode>
	</MantineProvider>
)
