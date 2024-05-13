import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa1.mypaga.com/');
  await page.getByPlaceholder('Username, phone number or').fill('FroddKanu');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByLabel('Check this box if you would').check();
  await page.getByRole('button', { name: 'verify by SMS' }).click();
  await page.getByLabel('Check this box if you would').check();
  await page.locator('#inputValidationCode').click();
  await page.locator('#inputValidationCode').fill('73267');
  await page.getByRole('button', { name: 'verify' }).click();
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Blonde77@1');
  await page.locator('#eye').click();
  await page.locator('#eye').click();
  await page.locator('#eye').click();
  await page.getByRole('button', { name: 'log in' }).click();
  await page.getByRole('link', { name: 'send money' }).click();
  await page.getByPlaceholder('search your contacts').click();
  await page.getByPlaceholder('search your contacts').fill('3151386353');
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.frameLocator('[id="__funding-source-frame"]').locator('#button-submit').click();
  await page.goto('https://qa1.mypaga.com/paga-web/customer/moneyTransfer/secure/success');
  await page.getByRole('link', { name: 'Back to Dashboard' }).click();
});