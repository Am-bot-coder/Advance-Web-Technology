const count1 = ()=>{
    let c = 0
    c = c+1
    console.log(c)
}
// count1()  //1
// count1()  //1
// count1()  //1


const count2 = ()=>
{
    let cnt = 0
    return ()=>{
        cnt++
        console.log(cnt)
    }
}
ct = count2()
// ct() //1
// ct() //2
// ct() //3

ct2 = count2()
// ct2()  //1
// ct2()  //2


/*
return ()=>{
        cnt++
        console.log(cnt)
    }
this part is closure
*/

