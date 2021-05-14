function tipCalc(percent, amount){
    tipValue = (percent*amount)/100
    return tipValue
}

function total(percent, amount){
    total = amount + tipCalc(percent, amount)
    return total
}

