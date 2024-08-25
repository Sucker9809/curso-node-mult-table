const fs = require('fs');
const colors = require('colors/safe');

const createFile = async(base, list, hasta = 10) => {

    let output = '';
    let exportOutput = {};

    for (let i = 1; i <=hasta; i++) {

        exportOutput[`inst_${i}`] = (`${base} x ${i} = ${base * i}`);
        output = `${base} x ${i} = ${base * i}\n`;
    };

    if(list){
    console.log(colors.green('======================'));
    console.log(colors.red(`Tabla del: ${base}`));
    console.log(colors.green('======================'));
    //console.log(output);
    };

    //console.table(exportOutput);

    console.table(exportOutput);

    fs.writeFileSync( `./output/tabla-${base}_${hasta}.json`, JSON.stringify(exportOutput, null, 2));

    return (base);
}; 

module.exports = {
    createFile
};