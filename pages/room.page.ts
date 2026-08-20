import { expect, Locator, Page } from "@playwright/test";

export class RoomPage {
  readonly page: Page;
  readonly calendar: Locator;
  readonly priceSummary: Locator;
  readonly reserveButton: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;

  constructor(page: Page) {
    this.page = page;

    this.calendar = page.locator(".rbc-calendar");

    this.priceSummary = page
      .locator(".card.bg-light")
      .filter({ hasText: "Price Summary" });

    this.reserveButton = page.getByRole("button", {
      name: "Reserve Now",
      exact: true
    });

    this.firstNameInput = page.locator("input.room-firstname");
    this.lastNameInput = page.locator("input.room-lastname");
    this.emailInput = page.locator("input.room-email");
    this.phoneInput = page.locator("input.room-phone");
  }

  async getPriceSummary() {
    return (await this.priceSummary.innerText()).trim();
  }

  async clickReserveNow() {
    await expect(this.reserveButton).toBeEnabled();
    await this.reserveButton.click();
  }

  async expectCustomerDetailsFormVisible() {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.phoneInput).toBeVisible();
  }

  async enterCustomerDetails(
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }
}