let user = prompt(`Enter your name`)

if(user==`codecamp`){
    let password = prompt(`Enter your password`)
    if(password !=`123456`){
        alert(`wrong password`)
    }else{
        alert(`Welcome ${user}`)
    }
}else{
    user==`guest`

    alert(`Welcome guest`)
}
