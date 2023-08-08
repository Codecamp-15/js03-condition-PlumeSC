let a = +prompt(`Number A`)
let b = +prompt(`Number B`)
let c = +prompt(`Number C`)



// let max
// let mid
// let min

// if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)){
//     if(a>=b)
// }else{
//     console.log(`Not a Number`);
// }





if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)){
    if(a>b&&a>c){
        if(b>c){
            console.log(a,b,c);
        }else if(c>b){
            console.log(a,c,b);
        }
    }else if(b>a&&b>c){
        if(a>c){
            console.log(b,a,c);
        }else if(a>c){
            console.log(b,c,a);
        }
    }else if(c>a&&c>b){
        if(a>b){
            console.log(c,a,b);
        }else if(a>b){
            console.log(c,b,a);
        }
    }
}else{
    console.log(`Not a Number`);
}

