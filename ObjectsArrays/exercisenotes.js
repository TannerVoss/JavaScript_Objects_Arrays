const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySum(numbers) {
    let sum = 0;

    numbers.forEach(function(total) {
        sum += total;
    })
    return sum;
}
console.log(arraySum(numbers));



// Slice method. pulls out a slice of an array. In this case 

const numbers = [2, 22, 12, 17, 18, 129];

let subArr = numbers.slice(3, 6);

console.log(subArr)

//exercise 2


let book = {};
book.title; // currently undefined
book.title = "Wise Man's Fear";
book.title; // Wise Man's Fear
book.author = "Patrick Rothfuss";
book.pages = 1300;
book.readCount = 5;

function showInfo() {
    return `${this.title} by ${this.author} is ${this.pages} page long, and has been read ${this.readCount} times.`
}

book.displayInfo = showInfo;

console.log(book.displayInfo());