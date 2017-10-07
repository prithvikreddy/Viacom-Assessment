import { ViacomPage } from './app.po';

describe('viacom App', () => {
  let page: ViacomPage;

  beforeEach(() => {
    page = new ViacomPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
