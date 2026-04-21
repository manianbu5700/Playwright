// @ts-check
import { test } from '@playwright/test';

test('Login facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

});

