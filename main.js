import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write (text);
}

console.log(boxen(chalk.bgMagenta.white('Meri'), {padding: 1, margin: 1, borderStyle: 'double'}));
console.log(boxen(chalk.bgGreen.black('Meri'), {padding: 1, margin: 1, borderStyle: 'arrow'}));
console.log(boxen(chalk.cyan('Toomet'), {title: 'Meriliis'}));
console.log(boxen(chalk.green('Meri'), {padding: 5, margin: 1, borderStyle: 'classic'}));
console.log(boxen(chalk.redBright('Meri'), {padding: 2, margin: 1, borderStyle: 'round'}));