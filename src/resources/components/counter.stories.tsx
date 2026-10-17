import preview from '../../../.storybook/preview'
import Counter from './counter'

const meta = preview.meta({
  component: Counter,
  title: 'Counter'
})

export const Default = meta.story({})
