import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-pagination-table');
  await page.getByLabel('Show 3510All entries').selectOption('10');
  await page.getByRole('button', { name: 'Close shopping anchor' }).selectOption('10');
  await page.getByRole('button', { name: 'Close shopping anchor' }).click();
  await page.locator('#example_next').click();
});