var strapkit_util	= require('./util'),
    path		= require('path'),
    superspawn		= require('./superspawn');

module.exports = function clean(options) {
	var projectRoot = strapkit_util.cdProjectRoot();
	return superspawn.spawn('rm',['-rf',projectRoot+'/build'],{stdio:'inherit', printCommand: true});
};
