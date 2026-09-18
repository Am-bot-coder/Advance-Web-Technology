function fpass(f){
    return (n1,n2)=>{
        return f(n1,n2)
        
    }
}

add = fpass((n1,n2)=>n1+n2)
console.log(add(10,20))

const sub = fpass((n1,n2)=>n1-n2)(50,30)
console.log(sub)

//combination of currying and high ordder function

//fpass is High Order Function
//f is callback function