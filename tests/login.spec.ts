import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sureviewtest.iptglobal.com/Login');
  await page.getByRole('button', { name: 'Login (Access Token)' }).click();
  await page.getByRole('button', { name: 'Back to login' }).click();
  await page.getByRole('button', { name: 'Login (Access Token)' }).click();
  await page.getByRole('textbox', { name: 'Paste token here (Ctrl + V)' }).click();
  await page.getByRole('textbox', { name: 'Paste token here (Ctrl + V)' }).fill('');
  await page.locator('.flex.gap-1\\.5').click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'breadcrumb' }).getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('listitem')).toContainText('Dashboard');
});
