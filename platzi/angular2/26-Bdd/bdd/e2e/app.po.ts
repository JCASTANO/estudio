import { browser, element, by } from 'protractor';

export class BddPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getIdText() {
    return element(by.id('hello')).getText();
  }
}
