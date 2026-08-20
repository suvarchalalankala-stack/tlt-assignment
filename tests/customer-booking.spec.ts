import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { RoomPage } from "../pages/room.page";
import { createBookingData } from "../test-data/booking.data";

test.describe("Customer booking journey", () => {
  test("customer can successfully book a room", async ({ page }) => {
    const home = new HomePage(page);
    const room = new RoomPage(page);

    const data = createBookingData();

    await home.open();

    await home.checkAvailability(
      data.checkIn,
      data.checkOut
    );

    await home.expectRoomVisible(data.room);
    await home.openRoom(data.room);

    const summary = await room.getPriceSummary();

    expect(summary).toContain("Price Summary");
    expect(summary).toContain("Total");

    await room.clickReserveNow();

    await room.enterCustomerDetails(
      data.firstName,
      data.lastName,
      data.email,
      data.phone
    );

    await room.clickReserveNow();
  });
});