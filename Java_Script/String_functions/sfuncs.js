text = "Hello Everyone"
console.log(text.length) //spaces include

const c3 = new String("Hello Fellows")
console.log(c3 + "   " + typeof c3) //c3 is object not string
//not recommend to create string using new like object


mname = "Ayush"
console.log(mname.toUpperCase())
console.log(mname.toLowerCase())


console.log("================================")
console.log(mname.charAt(3))//s
console.log(mname.charAt(-1)) //return blank


console.log("================================")
console.log(mname.at(3))
console.log(mname.at(-1))

console.log("================================")
console.log(mname.slice()) //entire name
console.log(mname.slice(1,3)) //yu
console.log(mname.slice(-4,-1))//yus

console.log("================================")
console.log(mname.substring(1,3))
console.log(mname.substring(-5,-3)) //blank


console.log("================================")
console.log(mname.split(""))// ['A', 'y', 'u', 's', 'h']

console.log("================================")
console.log(mname.split("").reverse().join(""))

