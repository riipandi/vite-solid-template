import { useStore } from '@nanostores/solid'
import { createQuery } from '@tanstack/solid-query'
import { Show } from 'solid-js'
import { Button, Card, CardContent, Link } from '#/components/base-ui'
import { resetUiState, saveUiState, uiStore } from '#/stores/ui.store'

import viteLogo from '/vite.svg'
import solidLogo from '../assets/images/solid.svg'

type Quote = {
  author: string
  content: string
}

export default function Page() {
  const uiState = useStore(uiStore)

  const quoteQuery = createQuery(() => ({
    queryKey: ['quotes'],
    queryFn: async (): Promise<Quote[]> => {
      const response = await fetch('https://i18n-quotes.victr.workers.dev')
      if (!response.ok) throw new Error('Failed to fetch quotes')
      return response.json()
    },
  }))

  const randomQuote = () => {
    const data = quoteQuery.data
    if (!data || data.length === 0) return null
    const index = uiState().counter % data.length
    return data[index]
  }

  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4 dark:bg-slate-900">
      <div class="mb-8 flex gap-8">
        <Link href="https://vite.dev" class="transition-transform hover:scale-110" newTab>
          <img src={viteLogo} class="h-24 w-24" alt="Vite logo" />
        </Link>
        <Link href="https://solidjs.com" class="transition-transform hover:scale-110" newTab>
          <img src={solidLogo} class="h-24 w-24" alt="Solid logo" />
        </Link>
      </div>

      <h1 class="mb-8 font-bold text-4xl text-slate-900 dark:text-white">Vite + Solid</h1>

      <Card class="w-full max-w-md">
        <CardContent class="space-y-4 p-8">
          <div class="grid grid-cols-2 justify-center gap-2">
            <Button
              onClick={() => saveUiState({ counter: uiState().counter + 1 })}
              variant="default"
              class="w-full"
            >
              Count {uiState().counter}
            </Button>
            <Button onClick={() => resetUiState()} variant="destructive" class="w-full">
              Reset
            </Button>
          </div>

          <p class="text-center text-slate-700 dark:text-slate-300">
            Edit{' '}
            <code class="rounded bg-slate-200 px-2 py-1 text-slate-900 text-sm dark:bg-slate-700 dark:text-slate-100">
              src/pages/home.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </CardContent>
      </Card>

      <p id="footnotes" class="mt-8 max-w-2xl text-center text-slate-700 dark:text-slate-400">
        <Show when={quoteQuery.isPending}>Loading...</Show>
        <Show when={quoteQuery.isError}>
          <span>Error: {(quoteQuery.error as Error).message}</span>
        </Show>
        <Show when={randomQuote()} fallback="Click on the Vite and Solid logos to learn more">
          <span class="mb-2 block italic">"{randomQuote()?.content}"</span>
          <span class="text-sm">— {randomQuote()?.author}</span>
        </Show>
      </p>
    </div>
  )
}
