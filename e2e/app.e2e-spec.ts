import { TemperatureMonitorPage } from './app.po';

describe('temperature-monitor App', function() {
  let page: TemperatureMonitorPage;

  beforeEach(() => {
    page = new TemperatureMonitorPage();
  });

  it('should display message saying temperature monitor', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Temperature Monitor');
  });
});
