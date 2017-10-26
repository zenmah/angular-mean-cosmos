import { AngularCosmosdbPage } from './app.po';

describe('angular-cosmosdb App', function() {
  let page: AngularCosmosdbPage;

  beforeEach(() => {
    page = new AngularCosmosdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
