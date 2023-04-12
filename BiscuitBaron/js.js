// html references

const biscuit = document.getElementById('biscuit')
const biscuitCounter = document.getElementById('biscuitCounter')

const rollingPinBTN = document.getElementById('rollingPinBTN')
const bakeryBTN = document.getElementById('bakeryBTN')
const factoryBTN = document.getElementById('factoryBTN')
const prodCounter = document.getElementById('prodCounter')

const Rowned = document.getElementById('Rowned')
const Rprod = document.getElementById('Rprod')
const Rcost = document.getElementById('Rcost')
const Bowned = document.getElementById('Bowned')
const Bprod = document.getElementById('Bprod')
const Bcost = document.getElementById('Bcost')
const Fowned = document.getElementById('Fowned')
const Fprod = document.getElementById('Fprod')
const Fcost = document.getElementById('Fcost')

// variable declaration

let biscuits = 0

let rollingPins = 0
let rollingPinCost = 25
let rollingPinProduction = 1

let bakeries = 0
let bakeryCost = 200
let bakeryProduction = 5

let factories = 0
let factoryCost = 3000
let factoryProduction = 50

let intervalId = null

// functions

function addBiscuit(num){

    biscuits = biscuits + num
    biscuitCounter.innerHTML = biscuits
}

function removeBiscuit(num){
    biscuits = biscuits - num
    biscuitCounter.innerHTML = biscuits
}

function updateProdCounter(){
    let production = bakeryProduction*bakeries + factoryProduction*factories
    prodCounter.innerHTML = 'biscuits per tick: ' + production
}

// eventlisteners

biscuit.addEventListener('click', () => {
    addBiscuit(rollingPinProduction)
})

rollingPinBTN.addEventListener('click', () => {
    if(biscuits >= rollingPinCost){
        rollingPinProduction++
        rollingPins++
        removeBiscuit(rollingPinCost)
        rollingPinCost = rollingPinCost + 8*rollingPins
        Rcost.innerHTML = 'rolling pin cost: ' + rollingPinCost + ' biscuits'
        Rowned.innerHTML = 'rolling pins owned: ' + rollingPins
        Rprod.innerHTML = 'rolling pin production: ' + rollingPinProduction + ' biscuits'
    }
})

bakeryBTN.addEventListener('click', () => {
    if(biscuits >= bakeryCost){
        bakeries++
        removeBiscuit(bakeryCost)
        bakeryCost = bakeryCost + 75*bakeries
        Bowned.innerHTML = 'bakeries owned: ' + bakeries
        Bprod.innerHTML = 'bakeries production: ' + bakeryProduction*bakeries + ' biscuits'
        Bcost.innerHTML = 'bakeries cost: ' + bakeryCost + ' biscuits'
        updateProdCounter()
    }
})

factoryBTN.addEventListener('click', () => {
    if(biscuits >= factoryCost){
        factories++
        removeBiscuit(factoryCost)
        factoryCost = factoryCost + 500*factories
        Fowned.innerHTML = 'factories owned: ' + factories
        Fprod.innerHTML = 'factories production: ' + factoryProduction*factories + ' biscuits'
        Fcost.innerHTML = 'factories cost: ' + factoryCost + ' biscuits'
        updateProdCounter()
    }
})

// biscuit production intervals

setInterval(() => {
    addBiscuit(bakeryProduction*bakeries);
  }, 750);

  setInterval(() => {
    addBiscuit(factoryProduction*factories);
  }, 750);