let input = prompt(`Enter Number`)

if(input>0){
    alert(`positive number`)
}else if(input==0){
    alert(`Zero`)
}else if(input<0){
    alert(`Negative number`)
}else if(typeof(input)!=`number`){
    alert(`invalid NUmber`)
}