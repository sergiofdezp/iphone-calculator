const numberBtn = document.querySelectorAll('.number-btn')
const signBtn = document.querySelectorAll('.sign-btn')
const reset = document.querySelectorAll('#ac')
const decimal = document.querySelectorAll('#decimal')
const percent = document.querySelectorAll('#percent')
const convert = document.querySelectorAll('#convert')
const result = document.getElementById('result')
const equal = document.getElementById('equal')

// Globals
var op1 = ""
var op2 = ""
var operation = ""
var selected = ""

// Number click event
numberBtn.forEach(number => {
    number.addEventListener("click", () => {
        if(result.textContent === "0")
            result.textContent = number.textContent
        else
            if(result.textContent.length >= 6)
                result.textContent = result.textContent
            else
                result.textContent += number.textContent
    })
})

// Sign click event
signBtn.forEach(sign => {
    sign.addEventListener("click", () => {
        op1 = result.textContent
        operation = sign.id
        result.textContent = "0"

        if(selected == ""){
            selected = sign
            selected.setAttribute('selected', true);
        }
        else
            selected.removeAttribute('selected')
            selected = sign
            selected.setAttribute('selected', true);

            // no se reelecciona el sign despues del remove
    })
})

// Equal click event
equal.addEventListener("click", () => {
    op2 = result.textContent

    if(operation == 'add')
        resultTotal = add()
    if(operation == 'substract')
        resultTotal = substract()
    if(operation == 'multiply')
        resultTotal = multiply()
    if(operation == 'split')
        resultTotal = split()

    if(result.textContent > 999999)
        result.textContent = 999999

    result.textContent = resultTotal
    selected.removeAttribute('selected')

    console.log(operation)
    console.log('operation')
})

// Operations
const add = () => {
    return parseInt(op1) + parseInt(op2)
}

const substract = () => {
    return op1 - op2
}

const multiply = () => {
    return op1 * op2
}

const split = () => {
    return op1 / op2
}

// Add decimal to result
decimal.forEach(decimal => {
    decimal.addEventListener("click", () => {
        result.textContent = result.textContent + "."
    })
})

// 100 percent
percent.forEach(percent => {
    percent.addEventListener("click", () => {
        result.textContent = result.textContent / 100

        if(result.textContent > 999999)
            result.textContent = 999999
        
        selected.removeAttribute('selected')
    })
})

// Convert to positive or to negative
convert.forEach(convert => {
    convert.addEventListener("click", () => {
        if(result.textContent > 0)
            result.textContent = "-" + result.textContent
        else
            result.textContent = result.textContent * -1

        parseInt(result.textContent)
        selected.removeAttribute('selected')
    })
})

// Reset to 0
reset.forEach(reset => {
    reset.addEventListener("click", () => {
        result.textContent = "0"
        op1 = ""
        op2 = ""
        operation = ""
        selected.removeAttribute('selected')
    })
})