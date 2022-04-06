let contentDiv = document.getElementById('content')

fetch('https://openexchangerates.org/api/latest.json?app_id=8aa1c434ba634b4f938302271614ce30', {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data.rates)

    let values = ["dog", "cat", "parrot", "rabbit"];

    let select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"

    for (let val of values) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    let label = document.createElement("label");
    label.innerHTML = "Choose your pets: "
    label.htmlFor = "pets";

    document.getElementById("content").appendChild(label).appendChild(select);
})

fetch("https://openexchangerates.org/api/currencies.json", {
    method: 'GET',
    headers: {},
})
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
})


// let values = ["dog", "cat", "parrot", "rabbit"];

// let select = document.createElement("select");
// select.name = "pets";
// select.id = "pets"

// for (let val of values) {
//     let option = document.createElement("option");
//     option.value = val;
//     option.text = val.charAt(0).toUpperCase() + val.slice(1);
//     select.appendChild(option);
// }

// let label = document.createElement("label");
// label.innerHTML = "Choose your pets: "
// label.htmlFor = "pets";

// document.getElementById("content").appendChild(label).appendChild(select);
