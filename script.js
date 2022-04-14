let initialDiv = document.getElementById('initial')
let finalDiv = document.getElementById('final')
let resultDiv = document.getElementById('result')
let conversionDiv = document.getElementById('conversion')
// lines 1-4 define variables for divs in the html by ID

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
// important pieces of information, will need in for-of loops
    let selectInitial = document.createElement("select")
    selectInitial.id = "initialCurrency"
    let selectFinal = document.createElement("select")
    selectFinal.id = "finalCurrency"
// lines 18-21 create two dropdown menus through select-type elements
    for (let key of keys) {
        let option = document.createElement("option")
        option.classList.add(key)
        option.value = conversions[key]
        option.innerText = key

        selectInitial.appendChild(option)
    }

    for (let key of keys) {
        let option = document.createElement("option")
        option.classList.add(key)
        option.value = conversions[key]
        option.innerText = key

        selectFinal.appendChild(option)
    }
// lines 23-30 and 32-39 add options to each dropdown menu

    let initialLabel = document.createElement("label")
    initialLabel.innerText = "Choose initial currency"
    initialDiv.appendChild(initialLabel)
    initialDiv.appendChild(selectInitial)

    let finalLabel = document.createElement("label")
    finalLabel.innerText = "Choose final currency: "
    finalDiv.appendChild(finalLabel)
    finalDiv.appendChild(selectFinal);
/* lines 42-45 and 47-50 add labels to each dropdown and populate divs from html with our select-type elements, that already have options */
})
// first get request ends here

fetch("https://openexchangerates.org/api/currencies.json", {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let selectKey = document.createElement("select")
    selectResult.id = "currencyKey"

    for (const [key, value] of Object.entries(data)) {
        let option = document.createElement("option")
        option.innerText = `${key}: ${value} `
        selectKey.appendChild(option)
    }

    resultDiv.appendChild(selectKey)
/* lines 63-72 add options into a select-type element in order to know currency abbreviations more easily */
})
// second get request ends here

function formData() {
    let selectInitial = document.getElementById('initialCurrency')
    let initialAmount = selectInitial.options[selectInitial.selectedIndex].value

    let selectFinal = document.getElementById('finalCurrency')
    let finalAmount = selectFinal.options[selectFinal.selectedIndex].value

    let amount = document.getElementById('amount').value

    conversionDiv.innerText = (amount / initialAmount * finalAmount).toFixed(2)
}
/* lines 77-87 is the function that does the calculations based on the chosen options, conversion factors were stored earlier as the value of each option */
