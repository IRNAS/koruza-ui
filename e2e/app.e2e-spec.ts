import { KoruzaUiPage } from './app.po';

describe('koruza-ui App', function() {
  let page: KoruzaUiPage;

  beforeEach(() => {
    page = new KoruzaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
