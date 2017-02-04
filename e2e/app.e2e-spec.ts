import { AiLabPage } from './app.po';

describe('ai-lab App', function() {
  let page: AiLabPage;

  beforeEach(() => {
    page = new AiLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
