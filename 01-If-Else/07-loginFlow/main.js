let username = prompt(`username`)
let password = prompt(`password`)

if(username==`` || password==`` ){
    if(username==`` && password==``){
        alert(`username and password are required`)
    }else if(username==``){
        alert(`username is required`)
    }else{
        alert(`password is required`)
    }
}else if(username==`john`&&password==`qwerty`){
    alert(`Hello ${username}`)
}else{
    if(username!=`john`){
        alert(`invalid username`)
    }
    if(password!=`qwerty`){
        alert(`invalid password`)
    }
}