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

// const likeOrDislike = (args) => {
// 	let res

// 	if (args.length === 0) {
// 		res = 'Nothing'
// 	}

// 	args.reduce((acc, el) => {
// 		if (acc === el) {
// 			return res = 'Nothing'
// 		}

// 		if (el === 'Dislike') {
// 			return res = 'Dislike'
// 		}

// 		if (el === 'Like') {
// 			return res = 'Like'
// 		}

// 	}, 0)

// 	return res
// }


// // OR

// const ytb = (buttons) => buttons.reduce((p, c) => c === p ? "Nothing" : c,"Nothing")

// console.log(likeOrDislike([]))


/**
 * switch letters in string
 */

//  function switcheroo(x){
// 	const b = []
// 	const a = x.split('')
// 	a.forEach(el => {
// 		el === 'a'
// 			? b.push(el = 'b')
// 			: el === 'b'
// 				? b.push(el = 'a')
// 				: b.push(el)
// 	})
// 	return b.join('')
// }

// console.log(switcheroo("aaacbbbb"))


// OR

// function switcheroo(x) {
// 	return x.replace(/[a-b]/g, func => 
// 		func === 'a'
// 			? 'b'
// 			: 'a'
// 	)
// }

// console.log(switcheroo("aaacbbbb"))


/**
 * Shortest word
 */
// const str = "Let's travel abroad shall webitcoin take over the world maybe who knows perhaps"

// const findShort = (str) => {
// 	let arr = str.split(" ")
// 	let res = Infinity
// 	for (let i = 0; i < arr.length; i++) {
// 	  if (arr[i].length < res) {
// 		 res = arr[i].length
// 	  }
// 	}
// 	return res
//  }

// console.log(findShort(str))

// // OR

// const findShort = (str) => {
// 	let arr = str.split(" ")
// 	return arr.reduce((acc, el) => {
// 		return Math.min(acc, el.length)
// 	}, Infinity)
// }

// console.log(findShort(str))

// // OR

// const findShort = (str) => {
// 	let arr = str.split(" ")
// 	return arr.map(a => a.length)
// 		.reduce((acc, el) => {
// 			return Math.min(acc, el)
// 		})

// }

// console.log(findShort(str))

// OR

// const findShort = (str) => {
// 	let arr = str.split(" ")
// 	let res = arr[0]
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].length < res.length) {
// 			res = arr[i]
// 		}
// 	}
// 	return res.length
// }

// console.log(findShort(str))

//OR

// const findShort = (str) => {
// 	return Math.min(...str.split(" ").map(a => a.length))
// }

// console.log(findShort(str))



/**
 * Count vowels
 */

// const a = "hello my name is ilya and i'm a student but i study at home"

// const getCount = (str) => {
//     let res = 0
//     let arr = str.split("")
//     arr.forEach(a => a === 'a' ? res += 1 : a === 'e' ? res += 1 : a === 'o' ? res += 1 : a === 'u' ? res += 1 : a === 'i' ? res += 1 : true)
//     return res
// }

// console.log(getCount(a))

// const getCount = str => {
//     let count = str.match(/[aeiou]/gi).length
//     console.log(str.length)
//     return count
// }



/**
 * remove vowels
 */

//  const text = "This website is for losers LOL!"

//  const disemvowel = text => {
//      const vawels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//      const newArr = []
//      const arr = text.split('')
//      arr.forEach(el => {
//          if(vawels.includes(el)) {
//              return

//          } else {
//              newArr.push(el)
//          }
//      })
//      return newArr.join('')
//  }

//  const disemvowel = text => {
//      const vowels = text.match(/[aeiou]/gi)
//      return text.split('').reduce((a, b) => {
//          if (vowels.includes(b)) {
//              true
//          } else {
//              a.push(b)
//          }
//          return a
//      }, []).join('')
//  }

//  const disemvowel = text => {
//      const vowels = text.match(/[aeiuo]/gi)
//      const arr = text.split('')
//      const newArr = []
//      for (let i = 0; i < arr.length; i++) {
//          vowels.includes(arr[i]) ? true : newArr.push(arr[i])
//      }
//      return newArr.join('')
//  }

// const disemvowel = (text) => {
//   return text.replace(/[aeiou]/gi, '');
// }

//  console.log(a(text))



/**
 * Square every digit
 */

//  const number = 9119

//  const squareDigits = number => {
//     const str = number.toString()
//     const arr = str.split('')
//     const newArr = []
//     for (let i of arr) {
//         newArr.push(i * i)
//     }
//     return Number(newArr.join(''))
//  }

// const squareDigits = number => {
//     return number.toString().match(/[1-9]/gi).map(a => {
//         a = Number(a)
//         return a * a

//     }).join('')
// }

//  console.log(fn(number))



/**
 * Descending Order
 */

// const numbers = 145263

// const descendingOrder = num => {
//     return num.toString().split('').sort((a, b) => b - a).map(a => a = Number(a)).join('')
// }

// console.log(fn(numbers))



/**
 * Get the Middle Character
 */
const word = "test"

const getMiddle = word => {
  // const newArr = []
  // let arr = word.split('')
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === Math.floor(arr.length / 2)) {
  //     newArr.push(arr[i])
  //   }
  // }
  // return newArr.join('')
  return word.slice()

}
  

console.log(getMiddle(word))



/**
 * Highest and Lowest
 */

const highAndLow = numbers => {
  const arr = numbers.split(" ")
  return [Math.max(...arr), Math.min(...arr)].join(" ")
}

//OR

// const highAndLow = numbers => {
//   const arr = numbers.split(" ")
//   arr.sort((a, b) => b - a)
//   return [arr[0], arr.pop()].join(" ")
// }


console.log(highAndLow("1 2 3 4 5"))