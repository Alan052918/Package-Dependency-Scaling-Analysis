'use strict';

const puppeteer = require('puppeteer');
const CREDS = require('./creds.js');

const loginUrl = 'https://github.com/login';
const searchUrl = 'https://github.com/search?l=JavaScript&q=javascript&type=Repositories';

// dom element selectors
const USERNAME_SELECTOR = '#login_field';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

const REPO_SELECTOR = '#js-pjax-container > div > div.col-12.col-md-9.float-left.px-2.pt-3.pt-md-0.codesearch-results > div > ul > li:nth-child(2) > div.mt-n1 > div.f4.text-normal > a';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();

  // github account login
  await page.goto(loginUrl, { waitUntil: 'networkidle2' });
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);
  await page.click(BUTTON_SELECTOR);
  await page.waitForNavigation();
  await page.screenshot({ fullPage: true, path: './github.png' });

  await page.goto(searchUrl, { waitUntil: 'networkidle2' });
  await page.screenshot({ fullPage: true, path: './github-search.png' });
  await page.click(REPO_SELECTOR);
  await page.waitForNavigation();
  await page.screenshot({ fullPage: true, path: './first-repo.png' });
  await page.goBack();
  await page.waitForNavigation();

  await browser.close();
})();
