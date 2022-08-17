// const a = {
// 	myName: "Ilya",
// 	info: {
// 		age: 23,
// 		language: "ru"
// 	}
// };

// a.myAge = 23;
// a.myMomName = "Angella";
// a.myCountry = "Russia";

// // delete a.myName;

// const countryPropertyName = "country";

// a[countryPropertyName] = "USA";

// delete a.myAge

// const addName = "myFriends";

// a[addName] = "none";

// // delete a.country;

// a.info.car = "none";

// delete a.info.age;

// const bestMovie = "tom and jerry"
// const bestBook = "war and piece"

// const myProfile = {
// 	bestMovie,
// 	bestBook
// };

// const myFirstFunction = {
// 	name: "Function",
// 	FunctionTitle () {
// 		console.log("hello")
// 	}
// };

// // myFirstFunction.FunctionTitle()

// // JSON.stringify(myFirstFunction);

// // global.console.log(globalThis);


// const copyTest = {
// 	name: "Goga",
// 	age: 23,
// 	info: {
// 		car: "kia"
// 	}
// };

// const copyTest2 = JSON.parse(JSON.stringify(copyTest));

// copyTest2.info.car = 24;

// // console.log(copyTest2.info.car);


// // const sum = (a, b) => {
// // 	const c = a + b
// // 	console.log(c)
// // }

// // sum(1, 2);

// function percent(a, b) {
// 	let c
// 	c = a / 100 * b
// 	return c
// }

// // console.log(percent(500, 20));

// const myFn = percent(200, 50);

// // console.log(myFn)

// const mInfo = {
// 	name: "gaga",
// 	age: 23
// }

// function increaseAge(person) {
// 	const person2 = { ...person }
// 	person2.age += 1
// 	return person2
// }

// increaseAge(mInfo);

// console.log(mInfo);

// console.log(increaseAge(mInfo))

// setTimeout(increaseAge, 3000);

// const value = 23;

// function first() {
// 	function second() {
// 		console.log(value)
// 	};
// 	second();
// };

// first()


// let a;
// let b;

// function myFn() {
// 	let b
// 	a = 23
// 	b = true
// 	console.log(b)
// };

// myFn()

// console.log(a)

// console.log(Boolean(0))

// let a

// function a(a, b) {
// 	let c = 0
// 	let d = "string"
// 	return a || b || c || d
// }

// console.log(a(0, false));


// const name = "Ilya";

// const city = "New York";

// console.log(`Hello my name is ${name} and I live in ${city}`)


// const myFn = (value, multiplier = 1) => value * multiplier;

// console.log(myFn(5));

// const newPost = (post, addedAT = Date()) => {
// 	let c
// 	c = {
// 		...post,
// 		addedAT
// 	}
// 	return c
// };

// const firstPost = {
// 	id: 1,
// 	autor: "Ilya"
// };

// const upPost = newPost(firstPost)

// console.log(upPost)

// const fnWithError = () => {
// 	throw new Error("some error")
// };

// try {fnWithError()
// } catch(error) {
// 	console.error(error)
// 	console.log(error.message)
// }

// console.log("hello");


// const myArr = [1, true, "Ilya"]

// const myArr2 = [1, true, "ilya"]

// const myArr3 = new Array(1, 2, 3)

// const mainArr = myArr3

// myArr[2] = "goga"

// const [number, boolean, myName] = myArr

// const myObj = {
// 	name: "Ilya",
// 	age: 23
// }

// const greeting = ({name, age}) => {
// 	if (!age) {
// 		return `Hello ${name}`
// 	}
// 	return `Hello ${name} you're ${age}`
// }

// const greeting = (profile) => {
// 	const {name, age} = profile
// 	if (!age) {
// 		return `Hello ${name} you're too young`
// 	}
// 	return `Hello ${name} you're ${age} years old`
// }

// console.log(greeting(myObj))

// const {name, age} = myObj

// console.log(myArr)

// myArr.forEach(el => console.log(el * 2))

// const newArr = myArr.map((el) => {
// 	return el * 3
// })

// console.log(newArr)

// console.log(myArr)


// const myNum = (number) => {
// 	if (number > 40) {
// 		return number + 5
// 	} else {
// 		return number * 2
// 	}
// }



// console.log(myNum(50))

// let age = 34

// if (age >= 18) {
// 	console.log("You're adult")
// } else if (age >= 12) {
// 	console.log("You're teenager")
// } else {
// 	console.log("You're child")
// }

// if (age >= 18) {
// 	console.log("You're adult")
// }

// if (age >= 12 && age < 18 ) {
// 	console.log("You're teenager")
// }

// if (age < 12) {
// 	console.log("You're child")
// }


// const sumPositiveNumber = (a, b) => {
// 	if (typeof a !== "number" || typeof b !== "number") {
// 		return "There isn't numbers"
// 	} else if (a <= 0 || b <= 0) {
// 		return "numbers aren't positive"
// 	} else if (a + b > 100 ) {
// 		return "number is more than 100"
// 	} else {
// 		return `your number is ${a + b}`
// 	}
// }

// console.log(sumPositiveNumber(95, 5))

// const numberofMonth = (month) => {
// 	switch(month) {
// 		case 12:
// 			return "December"

// 		case 1:
// 			return "December"

// 		case 2:
// 			return "February"

// 		default:
// 			return "It isn't window month"
// }
// }

// console.log(numberofMonth(3))


// const value = 11

// const res = value <= 10 ? value : value * 2

// console.log(res)

// for (i = 0; i <= 10; i++) {
// 	console.log(i)
// }

// let c = 10

// do {
// 	console.log(c)
// 	c++
// } while (c < 5)

// const myObj = {
// 	name: "Ilya",
// 	age: 24
// }

// Object.values(myObj).forEach(value => {
// 	console.log(value)
// })

// const getData = (url) => 
// 	new Promise((resolve, reject) =>
// 		fetch(url)
// 			.then(response => response.json())
// 			.then(json => resolve(json))
// 			.catch(error => reject(error))
// 	)

// getData('https://jsonplaceholder.typicode.com/todos')
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error.message))


// const str = "my-short-string"

// const myFn = (arr) => {
// 	return arr
// 		.split('-')
// 		.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
// 		.join('')
// }
// console.log(myFn(str))

// const numbers = ['good', 'bad', 'bad', 'bad', 'bad']

/**
 * Well of Ideas - Easy Version
 * Поиск в массиве свойства которое подходит под условие, с дальнейшим выводом в консоль
 */

// function myFn (numbers) {
// 	const goodCounter = numbers.filter(word => word === 'good').length

// 	return goodCounter === 0 ? "fail" : goodCounter > 2 ? "I smell a series!" : "Publish!"
// }

// const getStatusOfWellOfIdeas = a => [
// 	"Fail!", "Publish!", "Publish!", "I smell a series!"
//  ][Math.min(3, a.join('').length - a.length * 3)]

// console.log(getStatusOfWellOfIdeas(numbers))

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
// 	return arr.sort((a, b) => a.age - b.age)
// }

// console.log(sortByAge(arr))

// console.log(arr)

// const myObj = '45385593107843568'

// function fakeBin(x) {
// 	const a = x.split('')
// 	const arr = a.map(item => {
// 		let number = parseInt(item)
// 		return number >= 5 ? number = 1 : 0
// 	})
// 	return arr.join('')
// }
// function fakeBin(x) {
// 	// return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

// console.log(fakeBin(myObj))

/**
 * reverse function
 */

// const str = 'world'

// const myFn = (wrl) => {
// 	// return wrl.reverse().join('')
// 	return [...wrl].reverse()
// }

// console.log(myFn(str))

/**
 * Smallest number in array
 */

// const numbers = [-78,-56,232,-12,8]

// class SmallestIntegerFinder {
// 	findSmallestInt(args) {
// 		args.sort((a, b) => a - b)
// 		return args[0]
//  	}
// }

// console.log(new SmallestIntegerFinder(numbers))


/**
 * Return negative
 */

// const number = -1

// const returnNeg = (num) => {
// 	return num === 0 ? num : num < 0 ? num : -num
// 	// return -Math.abs(num);
// }

// console.log(returnNeg(number))

// function multiples(x, n) {
// 	const arr = [];
// 	for (let i = 1; i <= n(5); i++)
// 	  arr.push(x * i); // 2;2*2=4;2*3=6;2*4=8;2*5=10
// 	return arr;
//  }


/**
 * Умножение на кратные числа
 */

// function multiples(x, n) {
// 	const arr = []
// 	for (let i = 1; i <= n; i++)
// 		arr.push(x * i)
// 	return arr
// } 

//  console.log(multiples(2, 5));

/**
 * Объединение массивов + проверка уникальности эелментов + сортировка
 */

// const arr1 = [1, 3, 5, 7, 9, 12, 1, 33, 2]
// const arr2 = [10, 8, 6, 4, 2, 9, 5, 7, 40]

// function mergeArrays(arr1, arr2) {
// 	let newArr = [...arr1, ...arr2]
// 	newArr = new Set(newArr)
// 	newArr = [...newArr]
// 	newArr.sort((a, b) => a - b)
// 	return newArr
// }

// function mergeArrays(arr1, arr2) {
// 	const newArr = [...arr1, ...arr2]
// 	const clearArr = newArr.filter((el, id) => newArr.indexOf(el) === id)
// 	clearArr.sort((a, b) => a - b)
// 	return clearArr
// }

// function mergeArrays(arr1, arr2) {
// 	return arr1
// 		.filter(el => !arr2.includes(el))
// 		.concat(arr2)
// 		.sort((a, b) => a - b)
// }

// console.log(mergeArrays(arr1, arr2))


/**
 * Remove a element from the string
 * 
 * 
// const str = "happiness"

// const func = (str) => {
// 	const arr = str.split('')
// 	arr.shift()
// 	arr.pop()
// 	return arr.join('')
// }

// console.log(func(str))

*/


/**
 * Opposite numbers
 */

// const nmb = 3

// const f = (n) => {
// 	return n = -n
// }

// console.log(f(nmb))


/**
 * Like vs Dislikes
 */

const ytb = (...args) => {
	let res
	args.forEach(el => {

		if (el === 'like') {
			res = el
		}
		if (el === 'dislike') {
			res = el
		}
	})
	return res
}

console.log(ytb('dislike', 'like'))