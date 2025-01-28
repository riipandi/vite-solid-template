import { useStore } from '@nanostores/solid'
import { Show, createEffect, createSignal, onMount } from 'solid-js'
import { Button } from '#/components/base-ui/button'
import { Card, CardContent } from '#/components/base-ui/card'
import { Link } from '#/components/link'
import { resetUiState, saveUiState, uiStore } from '#/stores/ui.store'

import viteLogo from '/vite.svg'
import solidLogo from '../assets/images/solid.svg'

type Quotes = {
  author: string
  content: string
}[]

export default function Page() {
  const uiState = useStore(uiStore)
  const [quotes, setQuotes] = createSignal<Quotes>([])
  const [randomQuote, setRandomQuote] = createSignal<Quotes[0] | null>(null)

  createEffect(() => {
    const allQuotes = quotes()
    if (allQuotes.length) {
      const index = uiState().counter % allQuotes.length
      setRandomQuote(allQuotes[index])
    }
  })

  onMount(async () => {
    try {
      const response = await fetch('https://i18n-quotes.victr.workers.dev/')
      const allQuotes = (await response.json()) as Quotes
      setQuotes(allQuotes)
      setRandomQuote(allQuotes[uiState().counter % allQuotes.length])
    } catch (error) {
      console.error('Failed to fetch quotes:', error)
    }
  })

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
        <CardContent class="space-y-4 py-8">
          <div class="grid grid-cols-2 justify-center gap-2">
            <Button onClick={() => saveUiState({ counter: uiState().counter + 1 })} class="w-full">
              Count {uiState().counter}
            </Button>
            <Button onClick={() => resetUiState()} class="w-full">
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

      <p id="footnotes" class="mt-8 text-center text-base text-slate-700 dark:text-slate-400">
        <Show when={randomQuote()} fallback="Click on the Vite and Solid logos to learn more">
          <span class="mb-2 block italic">"{randomQuote()?.content}"</span>
          <span class="text-sm">— {randomQuote()?.author}</span>
        </Show>
      </p>
    </div>
  )
}
