let decrimentbtn=document.getElementById("decrementBtn")
let incrimentbtn = document.getElementById("incrementBtn")
let countdisplay = document.getElementById("displayValue")
let restbtn = document.getElementById("resetBtn")
// for decreament of value
const decriment = () =>{
    if(Number(countdisplay.innerText) >= 0){
        alert("it is allrady in 0,so please press increase button")
    }
    else{
        countdisplay.innerText = Number(countdisplay.innerText) - 1;
    }
    return countdisplay.innerText;
}
function decrementofvalue(){
    countdisplay.innerText = decriment();
}
decrimentbtn.addEventListener("click", decrementofvalue);

// for incrament of value 

const incrament = () =>{
    if(Number(countdisplay.innerText) < 10){
        displayValue.innerText= Number(countdisplay.innerText) + 1;
    }
    else {
        alert("it is reachead to above ten, It is a ten digit counter ");
    }
    return  displayValue.innerText;
}
function increamentofvalue(){
    countdisplay.innerText = incrament();
}
incrimentbtn.addEventListener("click", increamentofvalue);


// reset of value 
function restofvalue (){
    if(Number( countdisplay.innerText)==0){
        alert("it now in rest stage ")
    }
    else
    countdisplay.innerText = 0;
}
 
restbtn.addEventListener("click" , restofvalue);