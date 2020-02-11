const fs = require('fs');
const data = `${process.argv[2]}\n`;
const fileName = 'tarefas.txt';
let blue;
blue = '\u001b[34m';


try {
    fs.appendFileSync(fileName, data, 'utf8');
    console.log(`${blue}Arquivo criado`)
} catch (error) {
    console.error(error)
}