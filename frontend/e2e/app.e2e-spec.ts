import { FarmaciaPage } from './app.po';

describe('farmacia App', function() {
  let page: FarmaciaPage;

  beforeEach(() => {
    page = new FarmaciaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
