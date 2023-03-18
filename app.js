const inputs = {
    FirstName:document.getElementById("FirstName").children[0],
    LastName:document.getElementById("LastName").children[0],
    Phone:document.getElementById("Phone").children[0],
    Email:document.getElementById("Email").children[0],
    Password:document.getElementById("Password").children[0],
    ConfirmPassword:document.getElementById("ConfirmPassword").children[0],
}

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

    console.log(ValidationResult);


})




