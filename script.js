let initialDiv = document.getElementById('initial')
let finalDiv = document.getElementById('final')
let resultDiv = document.getElementById('result')
let conversionDiv = document.getElementById('conversion')
// define divs in our html by ID

fetch('https://openexchangerates.org/api/latest.json?app_id=8aa1c434ba634b4f938302271614ce30', {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let conversions = data.rates
    let keys = Object.keys(conversions)

    let selectInitial = document.createElement("select")
    selectInitial.id = "initialCurrency"

    let selectFinal = document.createElement("select")
    selectFinal.id = "finalCurrency"

    for (let key of keys) {
        let option = document.createElement("option")
        option.id = key
        option.value = conversions[key]
        option.innerText = key
        selectInitial.appendChild(option)
    }

    for (let key of keys) {
        let option = document.createElement("option")
        option.id = key
        option.value = conversions[key]
        option.innerText = key
        selectFinal.appendChild(option)
    }

    let initialLabel = document.createElement("label")
    initialLabel.innerText = "Choose initial currency"

    initialDiv.appendChild(initialLabel)
    initialDiv.appendChild(selectInitial)

    let finalLabel = document.createElement("label")
    finalLabel.innerText = "Choose final currency: "

    finalDiv.appendChild(finalLabel)
    finalDiv.appendChild(selectFinal);
})

fetch("https://openexchangerates.org/api/currencies.json", {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let selectResult = document.createElement("select")
    selectResult.id = "currencyKey"

    for (const [key, value] of Object.entries(data)) {
        let option = document.createElement("option")
        option.innerText = `${key}: ${value} `
        selectResult.appendChild(option)
    }

    resultDiv.appendChild(selectResult)
})

function formData() {
    let selectInitial = document.getElementById('initialCurrency')
    let initialAmount = selectInitial.options[selectInitial.selectedIndex].value

    let selectFinal = document.getElementById('finalCurrency')
    let finalAmount = selectFinal.options[selectFinal.selectedIndex].value

    let amount = document.getElementById('amount').value

    conversionDiv.innerText = (amount / initialAmount * finalAmount).toFixed(2)
}
