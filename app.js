let countEL=document.getElementById("count-el");
let count=0
function increment(){
      count+=1
      console.log(count)

      countEL.innerText=count
}

let saveEl=document.getElementById("save-el")
function save(){
      let saveB=count+" -"
      saveEl.textContent+=saveB
      countEL.innerText=0
      count=0
}


let substractEL=document.getElementById("exited-le")
let minus=-1
function decrement(){
    minus= minus - 1
    console.log(minus)
    substractEL.innerText=minus
}




let exitEl=document.getElementById("save-le")
function Exit(){
    let exitLe=minus
    exitEl.textContent+=exitLe
    substractEL.innerText=0
    minus=0
}

// count+=1

    
// let welcomeEl=document.getElementById("welcome-el");
// let nameEl=" fareed yusuf";
// let greeting="welcome back ";
// welcomeEl.innerText= greeting + nameEl

// console.log(welcomeEl)

// welcomeEl.innerText+= 

