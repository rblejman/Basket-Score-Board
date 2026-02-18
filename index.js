let displayHome = document.querySelector('.display-home');
let displayGuest = document.querySelector('.display-guest');

// Home counter
function sum1(){
    let counter = parseInt(displayHome.innerText);
    displayHome.innerText = counter + 1;
}

function sum2(){
   let counter = parseInt(displayHome.innerText);
    displayHome.innerText = counter + 2;
}

function sum3(){
    let counter = parseInt(displayHome.innerText);
    displayHome.innerText = counter + 3;
}

// Guest counter
function sum1G(){
    let counter = parseInt(displayGuest.innerText);
    displayGuest.innerText = counter + 1;
}

function sum2G(){
   let counter = parseInt(displayGuest.innerText);
    displayGuest.innerText = counter + 2;
}

function sum3G(){
    let counter = parseInt(displayGuest.innerText);
    displayGuest.innerText = counter + 3;
}
//reset
function reset(){
    displayHome.innerText = 0;
    displayGuest.innerText = 0;
}