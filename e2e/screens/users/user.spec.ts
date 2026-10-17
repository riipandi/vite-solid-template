import { expect, test } from '../../fixtures/test.ts'
import { unknownUser, users } from '../../testdata/users.ts'

test.describe('user profile', () => {
  test('walks to the next user', async ({ user }) => {
    const [first, second] = users
    await user.open(first.id)

    await user.nextLink().click()

    await expect(user.page).toHaveURL(new RegExp(`/users/${second.id}$`))
    await expect(user.name()).toHaveText(second.name)
    await expect(user.page.getByText(second.title)).toBeVisible()
  })

  test('shows the fallback for an unknown id', async ({ user }) => {
    await user.open(unknownUser.id)

    await expect(user.page).toHaveTitle(`User ${unknownUser.id} - Solid App`)
    await expect(user.name()).toHaveText(unknownUser.name)
    await expect(user.page.getByText(unknownUser.title)).toBeVisible()
  })

  test('returns home from a profile', async ({ user, home }) => {
    await user.open(users[2].id)
    await user.homeLink().click()

    await expect(home.page).toHaveURL(/\/$/)
    await expect(home.heading()).toBeVisible()
  })
})
