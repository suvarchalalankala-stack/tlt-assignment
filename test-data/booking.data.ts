export function createBookingData() {
  const unique = Date.now();

  return {
    room: "Double",

    firstName: "Suvarchala",
    lastName: `Lankala${unique}`,
    email: `suvarchala${unique}@example.com`,
    phone: "07123456789",

    checkIn: "2026-09-15",
    checkOut: "2026-09-17"
  };
}