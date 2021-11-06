

var result = document.querySelector(".counter");
var win = document.querySelector(".winningSign");
var restartButton = document.querySelector(".restart");
var wrapper = document.querySelector(".wrapper"); 
var info = document.querySelector(".info"); 

document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        
        {

            name: 'ein',
            img: 'one.jpg'
        },

        {

            name: 'ein',
            img: 'one.jpg'
        },

        {

            name: 'zwei',
            img: 'two.jpg'
        },

        {

            name: 'zwei',
            img: 'two.jpg'
        },


        {

            name: 'drei',
            img: 'three.jpg'
        },
        {

            name: 'drei',
            img: 'three.jpg'
        },

        {

            name: 'vier',
            img: 'four.jpg'
        },


        {

            name: 'vier',
            img: 'four.jpg'
        },

        {

            name: 'fünf',
            img: 'five.jpg'
        },


        {

            name: 'fünf',
            img: 'five.jpg'
        },


        {

            name: 'sechs',
            img: 'six.jpg'
        },


        {

            name: 'sechs',
            img: 'six.jpg'
        },

    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const block = document.querySelector('.block')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    createBoard()

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {

            const card = document.createElement('img')
            card.setAttribute('src', 'default.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            block.appendChild(card)
        }

    }

    //Filipping a card

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {

            setTimeout(checkForMacth, 500)
        }
    }


    //Check if match some data

    function checkForMacth() {

        const cards = document.querySelectorAll('img')
        var optionOneId = cardsChosenId[0]
        var optionTwoId = cardsChosenId[1]


        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'default.jpg')
            cards[optionTwoId].setAttribute('src', 'default.jpg')
      
            info.innerHTML = "You chosen the same!"
            info.style.color= "yellow"
  
            setTimeout(disSign, 500);

        }
        else if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'white.jpg')
            cards[optionTwoId].setAttribute('src', 'white.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            info.innerHTML = "Match!"
            info.style.color= "green"
            setTimeout(disSign, 500);
        } else {
            cards[optionOneId].setAttribute('src', 'default.jpg')
            cards[optionTwoId].setAttribute('src', 'default.jpg')

            info.innerHTML = "No match!"
            info.style.color= "red"
            setTimeout(disSign, 500);

        }
        cardsChosen = []
        cardsChosenId = []
        result.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            winSign()    

        
        }
    
     
    }

    function disSign() {
        info.innerHTML = "Find the pairs!";
        info.style.color= "black"

      }
      

    function restart() {
        location.reload()
   
    
    
    }

    
function winSign() {
    win.style.display = "block";
    result.style.display = "none";
    wrapper.style.display = "none";

}

restartButton.addEventListener('click', function(){
    restart() 

})







   })








