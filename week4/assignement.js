
// ------Create an array called ages that contains the following 
// values: 3, 9, 23, 64, 2, 8, 28, 93.-------------


// first I wrote an array with the specified values, 
// I used const to declare my variable because I will not need to redefine
// the variable, and as a const I can still manipulate the actual array

const ages = [3, 9, 23, 64, 2, 8, 28, 93]

// -----------Programmatically subtract the value of the first element in the 
// array from the value in the last element of the array. Do not use numbers 
// to reference the last element, find it programmatically---------------- 


// next I wrote a function that would find the value of the first element,
// and the value of the last element of the array programmatically. I used the 
// .find() method to prettymuch grab the first element that wasn't not an element.
//  and then found the index of the array using .length - 1 since arrays 
// are zero indexed. The length is just how many elements are in an array, 
//  so by subtracting one from that count, we get the index of whatever the
// last element is no matter the length. and then I declare a new variable
// within the function still just subtracting the first value from the last
// value and return that variable

function doTheMath(ages) {
    let firstValue = ages.find(element => element !== undefined)
    let lastValue = ages[ages.length - 1]
    let desiredValue = lastValue - firstValue
    return desiredValue
}
//  next I call my function, passing in the ages array as my argument, and console.log it
// which give me the answer
console.log(doTheMath(ages))

// -------- Add a new age to your array and repeat the step above to ensure it is dynamic. 
// (works for arrays of different lengths). -----------

// next I push a new value to the end of my arry
ages.push(75)

// and then I call my function again, again passing in the ages array as my argument
// and get my new answer, showing that my function will work for any length array
console.log(doTheMath(ages))



// ----------Use a loop to iterate through the array and calculate the average age.---------


// in order to get the sum of all of the values in the array, I started by
// initializing a variable equal to zero. I next wrote a for loop for the 
// ages array. Then add each iteration of the array to the next. This will
// give me the sum of the values in the array
let sumOfAges = 0
for (let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i]
}

// then I divide the sum of the values in the array by the number of elements 
// in the array and console.log() the variable holding the final answer. 
let averageAges = sumOfAges / ages.length
console.log(averageAges)


// -------Create an array called names that contains the following values: 
// ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// Use a loop to iterate through the array and calculate the average number 
// of letters per name.--------------------- 


// I first wrote an array with the specified values
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

// I next initialized a variable to zero that will later hold the sum of
// all of the letters in the strings in the array. I then use a for loop to 
// loop through each element of the array, getting the number of characters
// in each string by using.length when I index eac iteration. That wat the number 
// of letters is actually the total number of letters
let numberOfLetters = 0
for (i = 0; i < names.length; i++) {
    numberOfLetters += names[i].length
}

// I then declare a new variable to do the last bit of math, where I divide
// the total number of letters by how many names there are. I also use
// Math.round() to round the final answer to the nearest interger since 
// you can't really have part of a letter. 
let averageLetter = Math.round(numberOfLetters / names.length)

// I finally console.log() the final variable that holds the final answer
console.log(averageLetter)

// ------------Use a loop to iterate through the array again and 
// concatenate all the names together, separated by spaces.-------

// I wrote a funtion that takes in an array as an argument, that then uses
// a for loop to loop through the strings in the array and concatenate them 
// together into one string with spaces between each element.  

let listOfNames = array => {
    let newString = ""
    for (let i = 0; i < array.length; i++) {
        newString += array[i] + " "
    }
    return newString
}
console.log(listOfNames(names))

// ---------How do you access the last element of any array?--------
console.log("I accessed the last element of an array using .length-1 on the array")

// ---------How do you access the first element of any array?-------
console.log("I used the .find() method to prettymuch grab the first element that wasn't not an element from the array, which would be the first element.")


// ---------Create a new array called nameLengths. Write a loop to iterate 
// over the previously created names array and add the length of each name 
// to the nameLengths array. Write a loop to iterate over the nameLengths 
// array and calculate the sum of all the elements in the array. ---------------------

// I first initialized my new array, nameLengths. Then wrote a for loop to
// iterate over the names array above. For each iteration, i used .length to 
// push the length of each name to the new array and then console.logged the new array
const nameLengths = []
for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

// I first initialize a new variable to hold the sum of the elements in the
// array. Then I wrote a simple for loop, iterating through each element of 
// the array and adding it to the previous sum until it had gone the length of
// the array and added all elements together. Then I console.log the sum
let sumOfElements = 0
for (i = 0; i < nameLengths.length; i++) {
    sumOfElements += nameLengths[i]
}
console.log(sumOfElements)


// --------------Write a function that takes two parameters, word and n, 
// as arguments and returns the word concatenated to itself n number of 
// times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to 
// return ‘HelloHelloHello’).--------------------

// below I wrote an arrow function that took in two arguments, a word and a 
// number. I initiated a variable called tripleThreat. I wrote a basic for
// loop, that will use whatever number I pass in as an argument to determine 
// how many times the loop will run, resulting also in how many times the
// word that I pass in as an argument will concatonate. I then use the variable 
// that I initiated to concatonate the word to itself  
let wordyFunction = (word, n) => {
    let tripleThreat = ''
    for (i = 0; i < n; i++) {
        tripleThreat += word
    }
    return tripleThreat
}
console.log(wordyFunction("COWABUNGA", 3))


// -----------Write a function that takes two parameters, firstName and 
// lastName, and returns a full name.  The full name should be the first 
// and the last name separated by a space.------------

// I'm using an arrow function where I can pass in two arguments, in this
// case firstName and lastName. Then within the function I use a template 
// literal to interpolate my two arguments. Since I'm using a template literal
// I don't need to add the spaces manually, they are just part of it. 
let fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(fullName("Nichole", "Whatcott"))


// ------------Write a function that takes an array of numbers and returns 
// true if the sum of all the numbers in the array is greater than 100.----------

// Wrote an arrow function that will take an array as an argument, and using
// a basic for loop, it will give me the sum of all of the values in the array.
// to test it, I passed in the array ages from the beginning of the assignment
// and it returned true because the sum of the values was greater than 100. I also 
// wrote another small array to test that it wasn't returning true if the
// sum of the values was not greter than 100 
let averageOfArray = array => {
    let totalNumSum = 0
    for (let i = 0; i < array.length; i++) {
        totalNumSum += array[i]
    }
    if (totalNumSum > 100) {
        return true
    } else {
        return false
    }
}
const testArray = [7, 20, 3, 5]
console.log(averageOfArray(ages))
console.log(averageOfArray(testArray))


// ---------Write a function that takes an array of numbers and returns 
// the average of all the elements in the array.---------

// wrote an arrow function that can be used to get the sum of all the values of an 
// array by using a simple for loop. Then it returns the average by dividing
// the sum of the values of the array by the length of the array.
let returnAverageOf = array => {
    let totalNumSum = 0
    for (let i = 0; i < array.length; i++) {
        totalNumSum += array[i]
    }
    return totalNumSum / array.length
}
console.log(returnAverageOf(testArray))

// ---------Write a function that takes two arrays of numbers and returns 
// true if the average of the elements in the first array is greater than 
// the average of the elements in the second array.-------------

// I wrote an arrow function to compare the averges of two arrays. I did so
// by calling the function I wrote above to find the average of the sum of the 
// values of an array and called it twice, passing in each argument, to get the 
// average of each array passed as an argument. I then used and if statement
// to tell my function to return true if the average of the first array was 
// greater than the average of the second array. I then tested it using console.log()
// and passing in the arrays used earlier in the assignment
let comparingArrays = (array1, array2) => {
    let average1 = returnAverageOf(array1)
    let average2 = returnAverageOf(array2)
    if (average1 > average2) {
        return true
    } else {
        return "Nope!"
    }
}
console.log(comparingArrays(ages, testArray))


// ------------Write a function called willBuyDrink that takes a boolean 
// isHotOutside, and a number moneyInPocket, and returns true if it is hot 
// outside and if moneyInPocket is greater than 10.50.-------------

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true
    } else {
        return "No drink today!"
    }
}
console.log(willBuyDrink(true, 100))
console.log(willBuyDrink(true, 5))
console.log(willBuyDrink(false, 100))


// --------------Create a function of your own that solves a problem.   
// In comments, write what the function does and why you created it.----------

// I wrote a function to decide if I should get a tattoo after beating cancer
// this function takes in two arguments, beatCancer and moneySaved. If i beat cancer
// and have the money I shoulld get one, if I hadn't beat cancer and had the money
// I should get one. Whether I beat cancer or not, if I don't have the money I should
// save more money 

let getATatoo = (beatCancer, moneySaved) => {
    if (beatCancer && moneySaved > 500) {
        return "GET THAT TATOO GURL!"
    } else if (!beatCancer && moneySaved > 500) {
        return "YOU STILL DESERVE IT!!"
    } else {
        return "Maybe just save some more money 🤘"
    }
}
// then i tested my function by passing in that I have indeed beat cancer, but
// have 0 money saved. 
console.log(getATatoo(true, 0))