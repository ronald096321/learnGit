'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Trying new commit
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// //SLICE (always returns a new array without disturbin the original array) Not mutate original array

// let arr = ['a','b','c','d','e'];
// console.log('slice',arr.slice(2)); //starts from index 2 to end
// console.log(arr.slice(-2));// returns last two elements
// console.log(arr.slice(1,-2)); // returns all the elements from index one expect last two elements
// console.log(arr.slice()); // create a shallow copy of the array equilavent to [...arr]

// //SPLICE (Mutates the original array )

// console.log(arr.splice(2))// delete all the elements starting from index 2
// console.log(arr.splice(2,2)) // delete next two elements starting from index 2


// // REVERSE (Reverse method mutates the original array)
// arr = ['a','b','c','d','e'];

// let arr2 = ['f','i','j','k','l','m','n','o']

// console.log(arr2.reverse()); //returns the reverse of the array 
// console.log(arr2) // reversed array is printed 

// //CONCAT (returns the new array without mutating the original array)

// let letters = arr.concat(arr2);
// console.log(arr.concat(arr2)); //returns the new array without modifiy the original array

// // JOIN 

// console.log(letters.join(' - '));