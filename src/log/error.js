var Logger = require('../main.js');

Logger.prototype.warn = function(string) {
    if (!string)
        throw new Error('Invalid String.');

    return '\x1b[31m ERROR:\n' + string + '\x1b[0m';
};
