function Logger() {
	this.colours = {
  	debug: 'forestgreen',
		info: 'dodgerblue',
		warn: 'goldenrod',
		error: 'crimson'
	};
	for (var level in this.colours) {
		Logger.prototype[level] = this._log.bind(this, level);
	}
}

Logger.prototype._log = function(level){
	console.log('%c' + level + ':', 'font-weight:bold;color:' + this.colours[level], arguments[1]);
};
