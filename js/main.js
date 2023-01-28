let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id

      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawFour)

function drawFour(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#secondPlayer1').src = data.cards[1].image
        document.querySelector('#player2').src = data.cards[2].image
        document.querySelector('#secondPlayer2').src = data.cards[3].image
        let player1Val = convertToNum(data.cards[0,1].value)
        let player2Val = convertToNum(data.cards[2,3].value) 

        if(player1Val > player2Val){
            document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
            document.querySelector('h3').innerText = 'Player 2 Wins'
        }else if (player1Val === player2Val){
            document.querySelector('h3').innerText = 'Time for War!Click the Declare War button!'
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//helper for converting some cards that are showing as strings and need to be val
function convertToNum(val){
    if(val === 'ACE'){
        return 14
    }else if(val === 'KING'){
        return 13
    }else if(val === 'QUEEN'){
        return 12
    }else if(val === 'JACK'){
        return 11
    }else{
        return Number(val)
    }
}

document.querySelector('button').addEventListener('click', iDeclareWar)

function iDeclareWar{
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
})

    
