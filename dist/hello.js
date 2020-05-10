console.log('Hello, TypeScript');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = numbers.filter(function (number) { return number % 2 == 0; })
    .reduce(function (total, number) { return total += 0; });
console.log("Total: " + total);
console.log('Good bye, TypeScript...');
