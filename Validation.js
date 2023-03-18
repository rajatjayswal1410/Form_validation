const Validater = (data) => {
    const errors = []
    let errorDetails ={}
    if(!data.FirstName){
        errorDetails = {
            id:"FirstName",
            message:"Required field Firstname is Empty"
        }
        errors.push(errorDetails)
    }
    if(!data.LastName){
        errorDetails= {
            id:"LastName",
            message:"Required field Lastname is Empty"
        }
        errors.push(errorDetails)
    }

    if(!data.Email){
        errorDetails = {
            id:"Email",
            message:"Required field Email is Empty"
        }
        errors.push(errorDetails)
    }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.Email))){
       errorDetails = {
        id:"Email",
        message:"Your Email is invalid"
       }
       errors.push(errorDetails)
    }
    if(!data.Phone){
        errorDetails=  {
            id:"Phone",
            message:"Required field Phone is Empty"
        }
        errors.push(errorDetails)
    }else if(!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.Phone))){
        errorDetails=  {
            id:"Phone",
            message:"Your Phone is invalid"
        }
        errors.push(errorDetails)
    }
    if(!data.Password){
        errorDetails ={
            id:"Password",
            message:"Required field Password is Empty"
        }
        errors.push(errorDetails)
    }
    if(!data.ConfirmPassword){
        errorDetails ={
            id:"ConfirmPassword",
            message:"Required field Confirm-Password is Empty"
        }
        errors.push(errorDetails)
    }else if(data.Password.length > 0 && data.ConfirmPassword !== data.Password){
        errorDetails = {
            id:"ConfirmPassword",
            message:"Confirm-password and password are not match"
        }
        errors.push(errorDetails)
    }

    return errors

}