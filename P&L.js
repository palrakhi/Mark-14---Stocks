const initialPrice= document.querySelector("#initial-price")
const stocks_quantity= document.querySelector("#stocks-quantity")
const current_price= document.querySelector("#current-price")
const submit_button= document.querySelector("#check-button")
const show_output= document.querySelector("#output")

function calculateProfitOrLoss(){ //calculating profit here


console.log(typeof initialPrice.value, typeof stocks_quantity.value, typeof current_price.value)    
console.log(initialPrice.value, stocks_quantity.value, current_price.value)  

    if(Number(initialPrice.value) > Number(current_price.value)) // checking if the inital price is higher than current price
    {
        //loss logic
        let loss= (Number(initialPrice.value)-Number(current_price.value))* Number(stocks_quantity.value)
        let lossPercentage = Number(((loss/initialPrice.value) *100))
        show_output.innerText= (`Ooops!😞 Your Loss is ${loss} and loss percentage is ${lossPercentage}%`) 
        show_output.style.color= "red"
        

    } else if( Number(current_price.value)> Number(initialPrice.value)) //// checking if the current price is higher than initial price
    {
        //profit logic
        let profit= (Number(current_price.value)- Number(initialPrice.value))*stocks_quantity.value
        let profitPercentage= Number(((profit/initialPrice.value)*100))
        show_output.innerText=(`Wow!😍 Your Profit is ${profit} and profit percentage is ${profitPercentage}%`)
        show_output.style.color= "green"

    } else{
        //rest of the logic
        show_output.innerText=(`No profit No Loss! ☹️
You may refer my brother for gaining knowledge related to stock market!`)
        show_output.style.color= "orange"
    }

    
       
}


// calculateProfitOrLoss(100, 20, 80)
// calculateProfitOrLoss(100, 20, 580)
// calculateProfitOrLoss(100, 20, 100)
submit_button.addEventListener("click", calculateProfitOrLoss)