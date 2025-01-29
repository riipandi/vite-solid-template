import { Route, Router } from '@solidjs/router'
import { lazy } from 'solid-js'
import RootLayout from '#/layouts/root-layout'

const Home = lazy(() => import('./pages/home'))
const NotFound = lazy(() => import('./pages/404'))

const AppRoutes = () => (
  <Router root={RootLayout} base="/">
    <Route path="/" component={Home} />
    <Route path="*404" component={NotFound} />
  </Router>
)

export default AppRoutes
