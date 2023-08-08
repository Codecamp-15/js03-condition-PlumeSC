let a = prompt(`A`)
let b = prompt(`B`)



if(isNaN(Number(a))||isNaN(Number(b))){
    alert(`Invalid Number`);
}else{
    alert(Number(a)+Number(b));
}