import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa1.mypaga.com/');
  await page.getByPlaceholder('Username, phone number or').click();
  await page.getByPlaceholder('Username, phone number or').click();
  await page.getByPlaceholder('Username, phone number or').fill('');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByLabel('Check this box if you would').check();
  await page.getByRole('button', { name: 'verify by SMS' }).click();
  
});