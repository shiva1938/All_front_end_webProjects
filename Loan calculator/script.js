function  computeloan() {
    let amount = document.getElementById("amount").value
    let intrest = document.getElementById("intrest").value
    let months = document.getElementById("months").value
    let intrestRes = (parseInt(amount) * (parseInt(intrest * 0.1)) / parseInt(months)).toFixed(2)
    document.getElementById("payment").innerHTML  = `Monthly payment is ${intrestRes}`
}