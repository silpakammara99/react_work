

export const mobileValidation=(numb)=>{

let error=""

const mobileRegex=/^[6-9][0-9]{9}$/

if(!numb){
    error="please enter mobile number";
}
else if(!mobileRegex.test(numb)){
    error="please valid mobile no"
}


return error
}

export const userValidation=(uservalue)=>{
    let error=""
    const userRegex=/^[a-zA-Z]+$/

    if(!uservalue){
        error="please enter user name"
    }
    else if(!userRegex.test(uservalue)){

        error="please enter proper name"
    }
    return error
    
}