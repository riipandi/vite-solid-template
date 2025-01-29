import { QueryClientProvider } from '@tanstack/solid-query'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'
import { ParentComponent } from 'solid-js'
import { ThemeProvider } from '#/context/providers/theme-provider'
import { queryClient } from '#/libs/query-client'

const RootLayout: ParentComponent = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{props.children}</ThemeProvider>
      <SolidQueryDevtools position="right" />
    </QueryClientProvider>
  )
}

export default RootLayout
