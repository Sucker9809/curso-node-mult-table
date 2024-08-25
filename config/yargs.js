const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    describe: 'Defines the mult base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'list',
                    describe: 'List on console or not',
                    type: 'boolean',
                    default: false,
                    demandOption: false
                })
                .option('h', {
                    alias: 'hasta',
                    describe: 'Limit length of mult',
                    type: 'number',
                    demandOption: false
                })
                .check( (argv, options) => {
                    if(isNaN(argv.b)){
                    throw('The base has to a number');
                    } else {
                    return true;
                    }
                })
                .argv;

module.exports = argv;