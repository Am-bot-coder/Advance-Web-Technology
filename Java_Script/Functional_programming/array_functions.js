// arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// console.log(arr1)
// // arr1.forEach(e=>console.log(e))
// console.log("=====================================")
// arr1.forEach(e=>console.log(e))


// console.log("=====================================")
// arr1.filter(e=>e%2!=0).forEach(e=>console.log(e))

// console.log("=====================================")
// arr1.filter(e=>e%2==0 && e<10).map(e=>e**2).forEach(e=>console.log(e))

// console.log("=====================================")


// arr2 = ["hello world", "Hello nobody", "Hello hello"]
// arr2.flatMap(e=>e.split(' ')).forEach(e=>console.log(e))


// arr3 = [1,2,3,4,5,6,7,8,9,10]
// sum = arr3.reduce((p,c)=>{return p+c},0)
// console.log(sum)

arr4 = [2,9,7,11,35,4,6,78,95,1]
arr4.sort((a, b) => a - b).forEach(e=>console.log(e))  //ascending
console.log("-=-=-=-=--=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=--=-")
arr4.sort((a, b) => b - a).forEach(e=>console.log(e))  //descending
//this modify orignal array


//to avoid this
//1.toSorted() method
//[...arr4].sort((a, b) => a - b).forEach(e => console.log(e));

