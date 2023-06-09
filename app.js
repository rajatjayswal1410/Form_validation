const Users = JSON.parse(localStorage.getItem("Users") || "[]")

const inputs = {
    FirstName:document.getElementById("FirstName").children[0],
    LastName:document.getElementById("LastName").children[0],
    Phone:document.getElementById("Phone").children[0],
    Email:document.getElementById("Email").children[0],
    Password:document.getElementById("Password").children[0],
    ConfirmPassword:document.getElementById("ConfirmPassword").children[0],
}
var IsSumited = false

const form  = document.getElementById("register_form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = {
        FirstName:inputs.FirstName.value,
        LastName:inputs.LastName.value,
        Phone:inputs.Phone.value,
        Email:inputs.Email.value,
        Password:inputs.Password.value,
        ConfirmPassword:inputs.ConfirmPassword.value
    }
    const ValidationResult = Validater(data)
    if(ValidationResult.length > 0){
        showErrors(ValidationResult)
        IsSumited = true
        return
    }

    const isExist = Users.find((x) => x.Email === data.Email)
    if(isExist){
        showErrors([{id:"Email", message:"Email is allready exist"}])
        return
    }
    RemoveErrors(ValidationResult, "Email")
    Users.push(data)
    localStorage.setItem("Users",JSON.stringify( Users))
})






const CreateEvents =( (inputs) => {
    const ids = Object.keys(inputs)
    let i =0
    const data = {}
    while (i < ids.length) {
        const div = document.getElementById(ids[i])
        const input = div.children[0]
        const input_id = ids[i] + "_input"
        input.id = input_id
        data[ids[i]] = ""
        input.addEventListener("keyup", function(e){
            let tmp = e.target.id.split("_")[0]
            data[tmp] = e.target.value
            if(IsSumited){
                const ValidationResult = Validater(data)
                showErrors(ValidationResult)
                RemoveErrors(ValidationResult,tmp)
            }
        })

        i++
    }
})(inputs)











