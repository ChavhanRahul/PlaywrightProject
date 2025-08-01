const { test, expect, chromium } = require('@playwright/test');  // or 'firefox' or 'webkit'

test('Verify BookMyTrip', async () => {
  const browser = await chromium.launch({ headless: false }); // set headless: true for no UI
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to MakeMyTrip
  await page.goto('https://www.makemytrip.com/', { waitUntil: 'domcontentloaded' });

  // Dismiss popup by clicking on body
  await page.mouse.click(50, 50);
  await page.waitForTimeout(2000);

  // Click on 'From' city field
  await page.click('#fromCity');
  await page.waitForTimeout(2000);

  // Get list of popular cities
  const cities = await page.$$eval(
    "ul[role='listbox'] p.font14.appendBottom5.blackText",
    elements => elements.map(el => el.textContent.trim()).filter(text => text !== "")
  );

  // Print the list
  console.log("Popular Cities in 'From' dropdown:");
  cities.forEach(city => console.log("-", city));

  await browser.close();
})
