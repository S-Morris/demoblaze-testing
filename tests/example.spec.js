// @ts-check
import { test, expect } from '@playwright/test';
var url = "https://www.demoblaze.com/";

test('has title', async ({ page }) => {
  await page.goto(url);
  let userName = 'smorristesting';
  let password = 'hello';
  //Test Login
  let LoginButton = page.getByRole('link', { name: 'Log in' })
  let loginSubmitButton = page.getByRole('button', { name: 'Log in' });
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill(userName);
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill(password);
  await loginSubmitButton.click();

});


