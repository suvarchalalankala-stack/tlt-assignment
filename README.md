# Restful Booker - Playwright + TypeScript E2E Assignment

This project contains a Playwright and TypeScript end-to-end test for the Restful Booker demo application.

The automated test covers one complete customer booking journey, starting from selecting a room and dates through entering customer details and submitting the reservation.

---

## 1. Setup Instructions

### Prerequisites

- Node.js 18 or later
- npm

Check the installed versions:

    node --version
    npm --version

### Install dependencies

From the project directory, run:

    npm install

Install the Playwright browser:

    npx playwright install chromium

### Run the tests

Run the test normally:

    npm test

Run the test with the browser visible:

    npm run test:headed

---

## 2. Scenarios Covered

### Customer room booking

The automated test covers one complete customer booking journey:

1. Open the application.
2. Check that the rooms are displayed.
3. Select the Double room.
4. Select the check-in date.
5. Select the check-out date.
6. Verify the price summary.
7. Click Reserve Now to continue to the customer details form.
8. Enter the customer's first name.
9. Enter the customer's last name.
10. Enter the customer's email.
11. Enter the customer's phone number.
12. Submit the reservation.
13. Verify the booking confirmation.

---

## 3. Automation Decisions

### Why I selected this scenario

Room booking is one of the main customer-facing journeys in the application.

It covers several important parts of the application in one flow:

- Room selection
- Date selection
- Price calculation
- Customer information
- Reservation submission

I selected this journey because it represents an important customer/business flow and meets the requirement to automate one complete end-to-end customer journey.

### Automation approach

I used Playwright with TypeScript for browser automation.

I used Page Objects to keep the page locators and page actions separate from the test.

The main Page Objects are:

    pages/
      home.page.ts
      room.page.ts

The test data is kept separately in:

    test-data/
      booking.data.ts

The test itself is located in:

    tests/
      customer-booking.spec.ts

### Room selection

The test selects a specific room:

    Double

rather than using the first room on the page.

This avoids making the test dependent on the order in which rooms are displayed.

### Date selection

The booking calendar is controlled through the application's visible Back and Next buttons.

The automation navigates to the required month and then selects the required day.

### Assumptions

The automation assumes:

- The selected room is available for the dates used by the test.
- The customer information used by the test does not need to represent a real customer.
- The public demo data may change or reset.
- The application UI and selectors remain consistent with the version used during automation development.

### Risks identified

The main risks identified during exploration are:

- Room availability could change.
- Invalid date ranges could potentially be accepted.
- A successful reservation might not display the expected confirmation.
- The public demo environment may reset or change its data.

---

## 4. Time Spent

Approximate time spent:

- Exploration: approximately 2 hours
- Framework setup: approximately 2 hour
- Automation development: approximately 4 hours

These times are approximate.

---

## 5. AI Usage Disclosure

### AI Tool Used

OpenAI ChatGPT

### What it was used for

ChatGPT was used as an engineering assistant during the assignment for:

- Reviewing the Playwright project structure.
- Discussing Page Object Model approaches.
- Reviewing locator strategies.
- Troubleshooting Playwright errors.

### AI-assisted portions

AI assistance was used for parts of:

- Project structure suggestions
- Playwright implementation suggestions
