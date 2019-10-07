const inputs = document.querySelectorAll('input');
const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const headers = document.querySelectorAll('h4')
let billValue = 0;
let tipValue = 0.10;
let splitValue = 1;


function getValue(){
    // this.value
    if (this.name === 'bill') {
        billValue = parseInt(this.value);
    } else if (this.name === 'tip') {
        tipValue = parseInt(this.value) / 100;
        headers[1].innerHTML = `Tip: ${Math.round(tipValue * 100)}%`
    } else if (this.name === 'split') {
        splitValue = parseInt(this.value);
        headers[2].innerHTML = `Split (number of people): ${splitValue}`
    } else {return;}
    bill.innerHTML = `New Bill (per person): ${((billValue * (1 + tipValue)) / splitValue).toFixed(2)}€`
    tip.innerHTML = `Tip Amount (per person): ${((billValue * tipValue) / splitValue).toFixed(2)}€`
}


inputs.forEach(input => input.addEventListener('input', getValue))