import { expect } from '@playwright/test';

export class ContactUsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.contactUsLink = page.locator('a', { hasText: 'Contact Us' });
    this.pageTitle = page.locator('h1.page-title-text');

    this.firstname = page.locator('input#wpforms-147-field_1');
    this.lastname = page.locator('input#wpforms-147-field_1-last');
    this.email = page.locator('input#wpforms-147-field_8');
    this.phone = page.locator('input#wpforms-147-field_21');

    this.dropdownPatch = page.locator('select#wpforms-147-field_6');
    this.dropdownQty = page.locator('select#wpforms-147-field_16');

    this.messageArea = page.locator('textarea#wpforms-147-field_7');
  }

  async goto() {
    await this.page.goto('https://muforge.com/contact-us/');
  }

  async verifyContactUsLinkText() {
    await expect(this.contactUsLink).toHaveText('Contact Us');
  }

  async clickContactUsLink() {
    await this.contactUsLink.click();
  }

  async verifyPageTitle() {
    await expect(this.pageTitle).toHaveText('Contact Us');
  }

  async scrollDown() {
    await this.page.evaluate(() => window.scrollBy(0, 1000));
  }

  async Firstname(name) {
    await this.firstname.fill(name);
  }

  async Lastname(name) {
    await this.lastname.fill(name);
  }

  async Email(email) {
    await this.email.fill(email);
  }

  async Phone(phone) {
    await this.phone.fill(phone);
  }

  async selectPatch(optionValue) {
    await this.dropdownPatch.selectOption(optionValue);
  }

  async selectQuantity(optionValue) {
    await this.dropdownQty.selectOption(optionValue);
  }

  async fillMessage(message) {
    await this.messageArea.fill(message);
  }
}