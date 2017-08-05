import { RestrauntPage } from './app.po';

describe('restraunt App', () => {
  let page: RestrauntPage;

  beforeEach(() => {
    page = new RestrauntPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
