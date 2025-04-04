
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './providers/Router.provider'

import './styles/global.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
)
