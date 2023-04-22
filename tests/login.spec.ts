import { test, expect } from '@playwright/test';
import logger from '#@/logger.js';

// test that the failure message appears with invalid credentials to the-internet.herokuapp.com
test('unsuccessful login with a bad username', async ({ page }) => {
  await page.goto('/login');
  await page.waitForSelector('#username');
  await page.type('#username', process.env.USERNAME + 'this_is_invalid_username');
  await page.type('#password', process.env.PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

// test that the failure message appears with an invalid password to the-internet.herokuapp.com
test('unsuccessful login with a bad password', async ({ page }) => {
  await page.goto('/login');
  await page.waitForSelector('#username');
  await page.type('#username', process.env.USERNAME);
  await page.type('#password', process.env.PASSWORD + 'this_is_invalid_password');
  await page.click('button[type="submit"]');
  await expect(page.getByText('Your password is invalid!')).toBeVisible();
});

// test that the failure message appears with both username and password invalud to the-internet.herokuapp.com
test('unsuccessful login with both invalid credentials', async ({ page }) => {
  await page.goto('/login');
  await page.waitForSelector('#username');
  await page.type('#username', process.env.USERNAME + 'this_is_invalid_username');
  await page.type('#password', process.env.PASSWORD + 'this_is_invalid_password');
  await page.click('button[type="submit"]');
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});


test('successful login', async ({ page }) => {
    await page.goto('/login');
    // Expect a title "to contain" a substring.
    await expect.soft(page).toHaveTitle(/The Internet/);
    await expect.soft(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();

    await page.getByLabel('username').fill(process.env.USERNAME);
    await page.getByLabel('password').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();

    //document.querySelector("#flash") "You logged into a secure area!"
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});



// write a test that confirms that https://the-internet.herokuapp.com/afdsafdsafdas has status code 404
// test('https://the-internet.herokuapp.com/afdsafdsafdas should give 404', async ({ page, response }) => {
//   await page.goto('https://the-internet.herokuapp.com/afdsafdsafdas');
//   await expect(response.status).toBe(404);
// });

// write a test that confirms that https://the-internet.herokuapp.com/afdsafdsafdas has status code 200
