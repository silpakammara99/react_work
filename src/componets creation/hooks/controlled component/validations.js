

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