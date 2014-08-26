describe('logger', function(){

  var logger;

  beforeEach(function(){
    logger = new Logger();
    spyOn(console, 'log');
  });

  it('should log debug messages', function(){
    logger.debug('test message');
    expect(console.log).toHaveBeenCalledWith(
      '%cdebug:', 'font-weight:bold;color:forestgreen', 'test message'
    );
  });

  it('should log info messages', function(){
    logger.info('test message');
    expect(console.log).toHaveBeenCalledWith(
      '%cinfo:', 'font-weight:bold;color:dodgerblue', 'test message'
    );
  });

  it('should log warn messages', function(){
    logger.warn('test message');
    expect(console.log).toHaveBeenCalledWith(
      '%cwarn:', 'font-weight:bold;color:goldenrod', 'test message'
    );
  });

  it('should log error messages', function(){
    logger.error('test message');
    expect(console.log).toHaveBeenCalledWith(
      '%cerror:', 'font-weight:bold;color:crimson', 'test message'
    );
  });

});
