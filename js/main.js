let variables = [1, 3, 5, 7];

let betAmount = null;

let newValue;

let currentAmount = 100;

const twoTimes = variables[0];

const fiveTimes = variables[1];

const tenTimes = variables[2];

const fiftyTimes = variables[3];

document.querySelector(".button").addEventListener('click', prayToRNG);
document.querySelector(".one").addEventListener('click', addOne);
document.querySelector(".all").addEventListener('click', addAll);

init();

function init () {
    betAmount = document.querySelector(".bet")
    currentAmount = document.querySelector(".income");
};

function randomNumberGenerator () {
    let random = [];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * 3);
        random.push(variables[Math.floor(Math.random() * 3)])
    }
    return random;
};

class Random {
    constructor(random) {
        this.random = random.reverse();
    }
    print() {
        return this.random.join('');
    }
};

const random1 = new Random(randomNumberGenerator());
const random2 = new Random(randomNumberGenerator());
const random3 = new Random(randomNumberGenerator());



function  addOne () {
    newValue = document.querySelector[".one"] 
    newValue -= newValue.currentAmount
} 

function addAll () {
    newValue = document.querySelector[".all"];
    newValue -= allIn.currentAmount;
};

function prayToRNG () {
    if(currentAmount > 0){
    currentAmount -= betAmount
    console.log(`Now, you have amount $${currentAmount}`)
    randomNumberGenerator()
    }
};

function checkPattern(){
  
    if ( twoTimes === 3 ) {
      let amountWon = amountBet * 2; 
      amountBet = amountWon;  
      currentAmount.innerHTML = amountWon;
  
    }else if ( fiveTimes === 3 ) {
        let amountWon = amountBet * 5; 
        amountBet = amountWon;  
        currentAmount.innerHTML = amountWon;
    }else if ( tenTimes === 3 ) {
        let amountWon = amountBet * 10; 
        amountBet = amountWon;  
        currentAmount.innerHTML = amountWon;
    }else if ( fiftyTimes === 3 ) {
        let amountWon = amountBet * 50; 
        amountBet = amountWon;  
        currentAmount.innerHTML = amountWon;
    } else {
      console.log("Lost money");
    }
  }
