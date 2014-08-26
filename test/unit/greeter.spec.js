describe('greeter', function(){

	var greeter;

	beforeEach(function(){

		// Create Greeter with a dummy logger.
		greeter = new Greeter({
			debug: jasmine.createSpy(),
			info: jasmine.createSpy(),
			warn: jasmine.createSpy(),
			error: jasmine.createSpy()
		});
	});

	describe('input text', function(){

		it('is valid if it contains only alpha characters', function(){
			expect(greeter.isValid('Dane Reynolds1')).toBe(true);
		});

		it('is invalid if it contains non alpha characters', function(){
			expect(greeter.isValid('Dane Reyn0lds')).toBe(false);
		});

	});

	describe('when button is clicked with valid input', function(){

		beforeEach(function() {
			greeter.$input.val('Dane Reynolds');
			greeter.$submit.click();
		});

		it('should display a greeting', function(){
			expect(greeter.$result.text()).toEqual('Hello Dane Reynolds');
		});

		it('should log an info message', function(){
			expect(greeter.logger.info).toHaveBeenCalledWith('just said hello to -> Dane Reynolds');
		});

	});

	describe('when button is clicked with invalid input', function(){

		beforeEach(function(){
			greeter.$input.val('Dane Reyn0lds');
			greeter.$submit.click();
		});

		it('should not display a greeting', function(){
			expect(greeter.$result.text()).toEqual('');
		});

		it('should log a warn message', function(){
			expect(greeter.logger.warn).toHaveBeenCalledWith('invalid input -> Dane Reyn0lds');
		});

	});

});
