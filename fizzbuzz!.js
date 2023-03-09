function result() {
    let inputMultiple = document.getElementById('multiple').value;

    let finalRes = ""
    if(inputMultiple % 15 === 0) {
        finalRes = "FizzBuzz!" 
    } else if (inputMultiple % 5 === 0){
        finalRes = "Buzz!"
    } else if (inputMultiple % 3 === 0) {
        finalRes = "Fizz!"
    } else if (inputMultiple){
        finalRes = inputMultiple
    }
    const value = document.createElement("p")
    value.innerHTML = finalRes
    document.getElementById('display').prepend(value)
}