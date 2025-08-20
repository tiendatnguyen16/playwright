// Aug 2025 doing while learning https://playwright.dev/docs/getting-started-vscode#record-a-new-test
// If there is the first one created, then the new record will start with the next number, for example, 1 created, 2 will be used.
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
});await page.goto('https://www.restaurant365.com/');

await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Back-Office Restaurant Management Software" [level=1]`);
await page.getByRole('heading', { name: 'Back-Office Restaurant' }).click();
await expect(page.getByRole('heading', { name: 'Back-Office Restaurant' })).toBeVisible();
await expect(page.locator('body')).toContainText('Trusted by over 40,000 restaurants, Restaurant365’s all-in-one platform unifies accounting, inventory, workforce, and payroll into a single, streamlined solution—empowering teams to boost efficiency, cut costs, and drive growth and profitability across one location or hundreds.');
await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AdBytiM6igw3Y_y021Jc6KN9MAy51smn4a2MGtOTjpSj0GXwo8-rHQ_5XRo-veSomEM04PdG_9V-zg&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1294235325%3A1755499656289104');
await expect(page.getByRole('textbox', { name: 'Email or phone' })).toBeEmpty();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.locator('div').filter({ hasText: 'Sign into continue to' }).first().click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();