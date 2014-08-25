function Greeter(logger) {
	this.logger = logger;
	this.$el = $('' +
		'<div class="greeter">' +
			'<input class="greeter-input">' +
			'<button class="greeter-submit">Greet</button>' +
			'<span class="greeter-result"></span>' +
		'</div>'
	);
	this.$input = this.$el.find('.greeter-input');
	this.$submit = this.$el.find('.greeter-submit');
	this.$result = this.$el.find('.greeter-result');
	this.$el.on('click', '.greeter-submit', this.submitClickAction.bind(this));
}

Greeter.prototype.isValid = function(inputValue){
	return /^[a-zA-Z\s]+$/.test(inputValue);
};

Greeter.prototype.submitClickAction = function(){
	var inputValue = this.$input.val();
	if (this.isValid(inputValue)) {
		this.$result.text('Hello ' + inputValue);
		this.logger.info('just said hello to -> ' + inputValue);
	} else {
		this.$result.text('');
		this.logger.warn('invalid input -> ' + inputValue);
	}
};
