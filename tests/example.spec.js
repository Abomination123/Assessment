const { test, expect } = require('@playwright/test');

test('basic test example', async ({ page }) => {
  // Navigate to Playwright's homepage
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('google search example', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Search for Playwright
  await page.fill('input[name="q"]', 'Playwright testing');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results
  await page.waitForSelector('h3');

  // Check that we have search results
  const results = await page.locator('h3').count();
  expect(results).toBeGreaterThan(0);
});
