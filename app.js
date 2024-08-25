

const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors/safe');



console.clear();


createFile(argv.b, argv.l, argv.h)
    .then(archiveName => console.log(colors.green(`table-${colors.red(archiveName)}_${argv.h}.txt was successfuly created`)))
    .catch(err => console.log(err))

