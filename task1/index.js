//Ваша задача — найти ближайшее квадратное число, Nearest_sq(n) или NearestSq(n), положительного целого числа n.
//Например, если n = 111, то ближайшее \_sq(n) (nearestSq(n)) равно 121, поскольку 111 ближе к 121, квадрату 11, чем 100, квадрату 10.
//Если n уже является точным квадратом (например, n = 144, n = 81 и т. д.), вам нужно просто вернуть n.

// function nearestSq(n){
//    const number1 = Math.sqrt(n)
// 	const number2 = Math.round(number1)
// 	return Math.pow(number2, 2)
// }

const nearestSq = ((n) => Math.pow(Math.round(Math.sqrt(n)), 2))

console.log(nearestSq(9999))