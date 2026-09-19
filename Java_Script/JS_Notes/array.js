let numbers = [2, 4 , 8, 12, 16];
let arr = [2, 4 , 8, 12, 16];
// console.log(numbers)


// console.log(arr[0])
// console.log(arr.length) //gave length of array


// arr[0]= 63 //modifying an element
// console.log(arr[0])

//add element in the last
arr.push(65)
console.log(arr)

//add element to first place
arr.unshift(65)
console.log(arr)

//The pop() method removes an element from the last index of the array.
arr.pop()
console.log(arr)

//The shift() method removes the element from the first index of the array.
arr.shift()
console.log(arr)

//The splice() method removes or replaces the element from the array.
arr.splice(1,2)
console.log(arr)