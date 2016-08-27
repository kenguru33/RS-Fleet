import { RSFleetPage } from './app.po';

describe('rs-fleet App', function() {
  let page: RSFleetPage;

  beforeEach(() => {
    page = new RSFleetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
