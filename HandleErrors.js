const showErrors = (errors) => {
    let i = 0
    while (i < errors.length) {
        const errorDetails = errors[i]
        const div = document.getElementById(errorDetails.id)
        const span = document.createElement("span")
        const id = errorDetails.id + "_err"
        span.id = id
        span.innerText = errorDetails.message
        span.style.color = "red"
        if (div.children.length > 1) {
            div.removeChild(div.lastElementChild)
            div.appendChild(span)
        } else {
            div.appendChild(span)
        }
        i++
    }
}

const RemoveErrors = (errors, id) => {
    const div = document.getElementById(id)
    const find = errors.find((x) => x.id === id)
    if(!find && div.children.length > 1){
        div.removeChild(div.lastElementChild)
    }
}



