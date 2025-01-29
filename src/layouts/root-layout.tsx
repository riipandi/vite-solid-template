import { QueryClientProvider } from '@tanstack/solid-query'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'
import { ParentComponent, Suspense } from 'solid-js'
import AppLoader from '#/components/loaders/app-loader'
import { ThemeProvider } from '#/context/providers/theme-provider'
import { queryClient } from '#/libs/query-client'

const RootLayout: ParentComponent = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Suspense fallback={<AppLoader />}>{props.children}</Suspense>
      </ThemeProvider>
      <SolidQueryDevtools position="right" />
    </QueryClientProvider>
  )
}

export default RootLayout
