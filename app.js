

var result = document.querySelector(".counter");
var win = document.querySelector(".winningSign");
var restartButton = document.querySelector(".restart");
var wrapper = document.querySelector(".wrapper"); 
var info = document.querySelector(".info"); 


document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        
        {

            name: 'one',
            img: 'one.jpg'
        },

        {

            name: 'one',
            img: 'one.jpg'
        },

        {

            name: 'two',
            img: 'two.jpg'
        },

        {

            name: 'two',
            img: 'two.jpg'
        },


        {

            name: 'three',
            img: 'three.jpg'
        },
        {

            name: 'three',
            img: 'three.jpg'
        },

        {

            name: 'four',
            img: 'four.jpg'
        },


        {

            name: 'four',
            img: 'four.jpg'
        },

        {

            name: 'five',
            img: 'five.jpg'
        },


        {

            name: 'five',
            img: 'five.jpg'
        },


        {

            name: 'six',
            img: 'six.jpg'
        },


        {

            name: 'six',
            img: 'six.jpg'
        },

    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    let block = document.querySelector('.block')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    createBoard()

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {

            var card = document.createElement('img')
            card.setAttribute('src', 'default.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            block.appendChild(card)
        }

    }

    //Filipping a card

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {

            setTimeout(checkForMacth, 500)
        }
    }


    //Check if match some data

    function checkForMacth() {

        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'white.jpg')
            cards[optionTwoId].setAttribute('src', 'white.jpg')
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

        cardArray.sort(() => 0.5 - Math.random())
        createBoard()
    
        wrapper.style.display = "wrapper";

        win.style.display = "none";
    
        result.style.display = "wrapper";
    
    
    }

    
function winSign() {
    win.style.display = "wrapper";
    result.style.display = "none";
    wrapper.style.display = "none";

}

restartButton.addEventListener('click', function(){
    cardsWon = []
    result.textContent = cardsWon.length
    restart() 

})







   })








