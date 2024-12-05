import { useStore } from '@nanostores/solid'
import { Button } from '#/components/base-ui/button'
import { Card, CardContent } from '#/components/base-ui/card'
import { resetUiState, saveUiState, uiStore } from '#/stores/ui.store'

import viteLogo from '/vite.svg'
import { Link } from '#/components/link'
import solidLogo from '../assets/images/solid.svg'

export default function Page() {
  const uiState = useStore(uiStore)

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
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </CardContent>
      </Card>

      <p class="mt-8 text-base text-slate-700 dark:text-slate-400">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  )
}
