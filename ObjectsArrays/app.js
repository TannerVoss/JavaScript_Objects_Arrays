console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySum(numbers) {
    let sum = 0;

    numbers.forEach(function(total) {
        sum += total;
    })
    return sum;
}
console.log(arraySum(numbers));




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}; // declared as empty

book.title = "I Am America And So Can You";
book.author = "Stephen Colbert";
book.pages = 240;
book.readCount = 1;

function showInfo() {
    return `${book.title} by ${book.author} is ${book.pages} pages long and was read ${book.readCount} times.`
}

book.displayInfo = showInfo;
console.log(book.displayInfo())