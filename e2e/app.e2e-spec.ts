import { Ng2SearchGithubPage } from './app.po';

describe('ng2-search-github App', function() {
  let page: Ng2SearchGithubPage;

  beforeEach(() => {
    page = new Ng2SearchGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
