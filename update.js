function tipCalc(percent, amount){
    tipValue = (percent*amount)/100
    return tipValue
}

function total(percent, amount){
    total = amount + tipCalc(percent, amount)
    return total
}


function update(model, percent, bill){
    const tipAmount = tipCalc(percent, bill)
    const totalBill = total(percent, bill)
    return {
        ...model,
        billAmount = bill,
        percentage = percent,
        tip = tipAmount,
        totalAmount = totalBill

    }
}

module.exports = {
    update
}