import * as readline from 'readline-sync';

type Bool = boolean | 0 | 1;

const toBoolean = (input: Bool): boolean => input === 1 || input === true;

const and = (a: Bool, b: Bool): boolean => toBoolean(a) && toBoolean(b);
const or = (a: Bool, b: Bool): boolean => toBoolean(a) || toBoolean(b);
const not = (a: Bool): boolean => !toBoolean(a);
const implies = (a: Bool, b: Bool): boolean => !toBoolean(a) || toBoolean(b);
const biconditional = (a: Bool, b: Bool): boolean => toBoolean(a) === toBoolean(b);

const getUserInput = (): [Bool, Bool] => {
    const a = readline.question('Enter value for A (1/0 or true/false): ');
    const b = readline.question('Enter value for B (1/0 or true/false): ');
    return [parseValue(a), parseValue(b)];
};

const parseValue = (input: string): Bool => {
    if (input.toLowerCase() === 'true' || input === '1') return true;
    if (input.toLowerCase() === 'false' || input === '0') return false;
    throw new Error('Invalid input! Please enter 1/0 or true/false.');
};

const displayResults = (a: Bool, b: Bool) => {
    console.log(`A AND B: ${and(a, b)}`);
    console.log(`A OR B: ${or(a, b)}`);
    console.log(`NOT A: ${not(a)}`);
    console.log(`A IMPLIES B: ${implies(a, b)}`);
    console.log(`A BICONDITIONAL B: ${biconditional(a, b)}`);
};

const generateTruthTable = () => {
    console.log('\nTruth Table:');
    console.log('A | B | A AND B | A OR B | NOT A | A -> B | A <-> B');
    console.log('---------------------------------------------');
    [true, false].forEach(a => {
        [true, false].forEach(b => {
            console.log(
                `${a} | ${b} | ${and(a, b)}      | ${or(a, b)}     | ${not(a)}    | ${implies(a, b)}     | ${biconditional(a, b)}`
            );
        });
    });
};

const main = () => {
    console.log('Welcome to the Logical Operations App!');
    const [a, b] = getUserInput();
    displayResults(a, b);
    generateTruthTable();
};

main();
