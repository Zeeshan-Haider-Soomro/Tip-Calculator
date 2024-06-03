let amount = document.querySelector("#amount")
let percentage = document.querySelector("#percentage")
let btn = document.querySelector("#btn")
let total = document.querySelector("#total")


function calculater(){
    total.innerText = (amount.value *( 1 + percentage.value/100 )).toFixed(2)
    amount.value = ""
    percentage.value = ""
}

