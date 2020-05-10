console.log('Hello, TypeScript');

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = numbers.filter((number) => number % 2 == 0)
    .reduce((total, number) => total += 0);

    console.log(`Total: ${total}`);
    console.log('Good bye, TypeScript...');