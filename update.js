function tipCalc(percent, amount){
    tipValue = (percent*amount)/100
    return tipValue
}

function totalAmount(percent, amount){
    total = amount + tipCalc(percent, amount)
    return total
}

