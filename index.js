const cards = ["Tommy", "Melissa", "Elijah"]

function writeCards(cards, event){
    let cart = []
    for (let i = 0; i < cards.length; i++) {
        cart.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return cart
}

function countDown(){
    let countDown = 10
    while (countDown > -1){
        console.log(countDown--)
    }
}