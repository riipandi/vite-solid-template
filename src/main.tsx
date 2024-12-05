/* @refresh reload */
import { render } from 'solid-js/web'
import './assets/styles/globals.css'
import AppRoutes from './routes'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    "Root element not found. Check if it's in your index.html or if the id is correct."
  )
}

render(() => <AppRoutes />, rootElement)
