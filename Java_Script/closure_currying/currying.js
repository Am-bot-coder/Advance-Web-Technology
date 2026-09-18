function converter(factor){
    return (value)=>{
        return value*factor
    }
}

km_to_m = converter(1000)

console.log(km_to_m(1)+"m")  //1000m
console.log(km_to_m(1.5)+"m") //1500m
console.log(km_to_m(1/4)+"m") //250m

hr_to_min = converter(60)
console.log(hr_to_min(1) +"min") //60min
console.log(hr_to_min(1.6) +"min") //96min
console.log(hr_to_min(0.5) +"min") //30min

hr_to_sec = converter(60*60)
console.log(hr_to_sec(1) +"sec")  //3600sec
console.log(hr_to_sec(1.6) +"sec") //5760sec
console.log(hr_to_sec(0.5) +"sec") //1800sec