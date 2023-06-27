import { test, expect } from "@playwright/test";

test("rotateY transform", async ({ page }) => {
  await page.goto("/");

  const browserType = page.context().browser()?.browserType().name();

  await page.screenshot({
    path: `./${browserType}.png`,
  });

  // Expect a title "to contain" a substring.
});
