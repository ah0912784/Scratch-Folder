const chalk = require('chalk');
const log = console.log

//combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));