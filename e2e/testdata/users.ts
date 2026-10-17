export type UserRecord = {
  id: string
  name: string
  title: string
}

/** Mirrors `src/data/users.json`. Unknown ids render the fallback copy. */
export const users = [
  { id: '1', name: 'Ada Lovelace', title: 'First programmer' },
  { id: '2', name: 'Grace Hopper', title: 'Compiler pioneer' },
  { id: '3', name: 'Margaret Hamilton', title: 'Software engineering' }
] as const satisfies readonly UserRecord[]

export const unknownUser = {
  id: '99',
  name: 'Unknown',
  title: 'No such user'
} as const satisfies UserRecord
