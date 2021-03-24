// Este codigo faz a leitura de dados para apps coletadas do Google Play

const fs = require('fs');
const csvparse = require('csv-parse/lib/sync');

// Le cada linha do arquivo csv como um objeto e armazena no array 'app'
let apps = csvparse(fs.readFileSync('./gplaydata.csv', 'utf-8'), {
    columns: true,
    delimiter: ',',
    skip_empty_lines: true
});
// converte alguns atributos que sao inicialmente lidos com strings
apps = apps.map(elem => {
    elem.score = parseFloat(elem.score);
    elem.installs = parseInt(elem.installs);
    elem.androidVersion = parseFloat(elem.androidVersion);
    return elem;
});

console.log('Total de objetos deste array:', apps.length);
console.log('A estrutura do 1.o objeto:');
console.log(apps[0]);

const aux = []

const calculateInstalls = apps.reduce((acc, element) => acc + element.installs, 0)

console.log(calculateInstalls)

apps.filter(element => element.score > 4)

const lowerCase = apps.map(element => element.appname.toLowerCase())