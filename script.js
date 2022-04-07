let initialDiv = document.getElementById('initial')
let finalDiv = document.getElementById('final')
let contentDiv = document.getElementById('content')

fetch("https://openexchangerates.org/api/currencies.json", {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    return data
})

fetch('https://openexchangerates.org/api/latest.json?app_id=8aa1c434ba634b4f938302271614ce30', {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let conversions = data.rates;
    console.log(conversions)
    let keys = Object.keys(conversions)

    let selectInitial = document.createElement("select");
    selectInitial.id = "initialCurrency"

    for (let key of keys) {
        let option = document.createElement("option");
        option.id = key;
        option.value = conversions.key
        option.innerText = key;
        selectInitial.appendChild(option);
    }

    let label = document.createElement("label");
    let innerDiv = document.createElement("div");
    innerDiv.innerText = "Choose initial currency: "
    label.appendChild(innerDiv);

    initialDiv.appendChild(label).appendChild(selectInitial);

    return data;
})
.then(function(data) {

    let conversions = data.rates;
    let keys = Object.keys(conversions)

    let selectFinal = document.createElement("select");
    selectFinal.id = "finalCurrency"

    for (let key of keys) {
        let option = document.createElement("option");
        option.id = key;
        option.value = conversions[key]
        option.innerText = key;
        selectFinal.appendChild(option);
    }

    let label = document.createElement("label");
    let innerDiv = document.createElement("div");
    innerDiv.innerText = "Choose final currency: "
    label.appendChild(innerDiv);

    finalDiv.appendChild(label).appendChild(selectFinal);
})
