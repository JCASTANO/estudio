import { BddPage } from './app.po';

describe('bdd App', function() {
  let page: BddPage;

  beforeEach(() => {
    page = new BddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('assert holi', () => {
    expect(page.getIdText()).toEqual('Holi');
  });
});
