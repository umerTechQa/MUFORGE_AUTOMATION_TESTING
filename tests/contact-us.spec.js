import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/contactUsPage';
import { contactUsTestData } from '../test-Data/testData';

test('verify title', async ({ page }) => {
  await page.goto('https://muforge.com/');

  const title = await page.title();

  expect(title).toBe('Muforge Badges (PVT ltd)');
});

test('contact us page verify', async ({ page }) => {
  const contactUsPage = new ContactUsPage(page);

  await contactUsPage.goto();

  await contactUsPage.verifyContactUsLinkText();

  await contactUsPage.clickContactUsLink();

  await contactUsPage.verifyPageTitle();

  await contactUsPage.scrollDown();

  await contactUsPage.Firstname(contactUsTestData.firstName);
  await contactUsPage.Lastname(contactUsTestData.lastName);
  await contactUsPage.Email(contactUsTestData.email);
  await contactUsPage.Phone(contactUsTestData.phone);
  await contactUsPage.selectPatch(contactUsTestData.patchOption);
  await contactUsPage.selectQuantity(contactUsTestData.quantityOption);
  await contactUsPage.fillMessage(contactUsTestData.message);
});