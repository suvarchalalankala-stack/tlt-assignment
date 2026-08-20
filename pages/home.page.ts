import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly checkInInput: Locator;
  readonly checkOutInput: Locator;
  readonly checkAvailabilityButton: Locator;
  readonly rooms: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkInInput = page.locator(".dateWrapper input").nth(0);
    this.checkOutInput = page.locator(".dateWrapper input").nth(1);
    this.checkAvailabilityButton = page.getByRole("button", {
      name: "Check Availability",
      exact: true
    });

    this.rooms = page.locator("#rooms");
  }

  async open() {
    await this.page.goto("/");
    await expect(this.checkAvailabilityButton).toBeVisible();
  }

  async checkAvailability(checkIn: string, checkOut: string) {
    await this.checkInInput.fill(this.toDisplayDate(checkIn));
    await this.checkOutInput.fill(this.toDisplayDate(checkOut));

    await this.checkAvailabilityButton.click();
  }

  getRoom(roomName: string) {
    return this.rooms
      .locator(".room-card")
      .filter({
        has: this.page.getByRole("heading", {
          name: roomName,
          exact: true
        })
      })
      .first();
  }

  async expectRoomVisible(roomName: string) {
    await expect(this.getRoom(roomName)).toBeVisible();
  }

  async openRoom(roomName: string) {
    const room = this.getRoom(roomName);

    await expect(room).toBeVisible();

    await room.getByRole("link", {
      name: "Book now",
      exact: true
    }).click();
  }

  private toDisplayDate(date: string) {
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  }
}