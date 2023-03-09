function result() {
    let inputMultiple = document.getElementById('multiple').value;

    let finalRes = ""
    const value = document.createElement("p")
    if (inputMultiple == 0) {
        finalRes = "Invalid Input"
        value.style.color ="#E03F33"
    } else if (inputMultiple % 15 === 0) {
        finalRes = "FizzBuzz!" 
    } else if (inputMultiple % 5 === 0){
        finalRes = "Buzz!"
        value.style.color ="#F7914D"
    } else if (inputMultiple % 3 === 0) {
        finalRes = "Fizz!"
        value.style.color ="#6a8caf"
    } else if (inputMultiple) { 
        finalRes = inputMultiple
        value.style.color ="black"
    }
    
    value.innerHTML = finalRes
    document.getElementById('display').prepend(value)
}