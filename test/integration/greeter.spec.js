describe('Greeter', function() {

  beforeEach(function(){

    // Ensure the correct entry point URLs are used.
    if (browser.params.isBrowserstack) {
      browser.get('/karma-protractor-demo');
    } else {
      browser.get('/');
    }
  });

  it('should show the correct greeting when valid input is entered', function(){
    element(by.css('.greeter-input')).sendKeys('Stimpson J Cat');
    element(by.css('.greeter-submit')).click();
    expect(element(by.css('.greeter-result')).getText()).toBe('Hello Stimpson J Cat');
  });

});
