"use strict";

import { launch } from "puppeteer";
import { username, passsword } from "./creds.js";

const url = "https://github.com/login";
const USERNAME_SELECTOR = "#login_field";
const PASSWORD_SELECTOR = "#password";
const BUTTON_SELECTOR = "#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block";

(async () => {
  const browser = await launch({ defaultViewport: null });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "load" });
  // await page.screenshot({ path: "github.login.png", fullPage: true });

  // enter credentials
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  // click signin button and wait for navigation
  await page.click(BUTTON_SELECTOR);
  await page.waitForNavigation();

  
  await browser.close();
})();
