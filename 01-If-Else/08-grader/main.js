let input = prompt(`Enter your grade`)

if(input <=100 && input >=0){
    if(input >=80){
        alert(`A`)
    }else if(input > 70){
        alert(`B`)
    }else if(input > 60){
        alert(`C`)
    }else if (input >50){
        alert(`D`)
    }else{
        alert(`F`)
    }
}