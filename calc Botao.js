
var slot1 = 0
var slot2 = 0

var resultOne = document.querySelectorAll('.show');

resultOne.forEach(element => {
    element.addEventListener('click', () =>{
        mySpan.innerHTML = slot1;
    });
});


var resultTwo = document.querySelectorAll('.operador');

resultTwo.forEach(element => {
    element.addEventListener('click', () =>{
        mySpanTwo.innerHTML = slot2;
        mySpan.innerHTML = slot1;
    });
});


var resultFinal = document.querySelectorAll('.resultadofinal')

resultFinal.forEach(element => {
    element.addEventListener('click', () =>{
        resultid.innerHTML = finalResult;
    });
});



//var resultOne = document.querySelector('form');


function valores (number){
    if (number == "0") {
        slot1 = slot1 + "0"
        slot1 = parseFloat(slot1)
    } else if (number == "1"){
        slot1 = slot1 + "1"
        slot1 = parseFloat(slot1)
    } else if (number == "2"){
        slot1 = slot1 + "2"
        slot1 = parseFloat(slot1)
    } else if (number == "3"){
        slot1 = slot1 + "3"
        slot1 = parseFloat(slot1)
    } else if (number == "4"){
        slot1 = slot1 + "4"
        slot1 = parseFloat(slot1)
    } else if (number == "5"){
        slot1 = slot1 + "5"
        slot1 = parseFloat(slot1)
    } else if (number == "6"){
        slot1 = slot1 + "6"
        slot1 = parseFloat(slot1)
    } else if (number == "7"){
        slot1 = slot1 + "7"
        slot1 = parseFloat(slot1)
    } else if (number == "8"){
        slot1 = slot1 + "8"
        slot1 = parseFloat(slot1)
    } else if (number == "9"){
        slot1 = slot1 + "9"
        slot1 = parseFloat(slot1)
    } else if (number =="C"){
        slot1 = ""
        slot2 = ""
        finalResult = ""
    } else if (number == "←"){
        slot1 = Number(String(slot1).slice(0, -1));
        slot1 = parseFloat(slot1)
    } else if (number == "."){
        slot1 = String(slot1)
        slot1 = slot1 + '.'
    }
}


slotMult = null;
slotDiv = null;
slotAdd = null;
slotSub = null;
slotPot = null;
slotRaiz = null;
slotPorcent = null;

function operacoes (op){
    if (op == 'X') {
        slot2 = String(slot1) + " x";
        slotMult = slot1;
        slot1 = 0
        slotDiv = null;
        slotAdd = null;
        slotSub = null;
        slotPot = null;
        slotRaiz = null;
        slotPorcent = null;
    } else if (op == '/'){
        slot2 = String(slot1) + " /";
        slotDiv = slot1;
        slot1 = 0
        slotMult = null;
        slotAdd = null;
        slotSub = null;
        slotPot = null;
        slotRaiz = null;
        slotPorcent = null;
    } else if (op == '+') {
        slot2 = String(slot1) + " +";
        slotAdd = slot1;
        slot1 = 0
        slotMult = null;
        slotDiv = null;
        slotSub = null;
        slotPot = null;
        slotRaiz = null;
        slotPorcent = null;
    } else if (op == '-') {
        if (slot1 == 0){
            slot1 = '-' + slot1
        } else{
        slot2 = String(slot1) + " -";
        slotSub = slot1;
        slot1 = 0
        slotMult = null;
        slotDiv = null;
        slotAdd = null;
        slotPot = null;
        slotRaiz = null;}
        slotPorcent = null;
    } else if (op == '^') {
        slot2 = String(slot1) + " ^";
        slotPot = slot1;
        slot1 = 0
        slotMult = null;
        slotDiv = null;
        slotAdd = null;
        slotSub = null;
        slotRaiz = null;
        slotPorcent = null;
    } else if (op =='√') {
        slot2 = String(slot1) + " √";
        slotRaiz = slot1;
        slot1 = 0
        slotMult = null;
        slotDiv = null;
        slotAdd = null;
        slotSub = null;
        slotPot = null;
        slotPorcent = null;
    } else if (op =='%') {
        slot2 = String(slot1) + " %";
        slotPorcent = slot1;
        slot1 = 0
        slotMult = null;
        slotDiv = null;
        slotAdd = null;
        slotSub = null;
        slotPot = null;
        slotRaiz = null;
    }
}



function calcFinalResult () {

    if (slotMult != null) {
       finalResult = slotMult * slot1
    } else if (slotDiv != null) {
       finalResult =  slotDiv / slot1
    } else if (slotAdd != null) {
        finalResult = slotAdd + slot1
    } else if (slotSub != null) {
        if (slotSub < 0 && slot1 < 0) {
        finalResult = slotSub + slot1
        } else {
       finalResult =  slotSub - slot1}
    } else if (slotPot != null) {
       finalResult =  slotPot ** slot1
    } else if (slotRaiz != null) {
       finalResult = Math.pow((slotRaiz), 1/(slot1))
    } else if (slotPorcent != null) {
        finalResult = slotPorcent/100 * slot1
    }
    
    if (String(finalResult).length > 16){
        finalResult = String(finalResult)
        var ultimos4 = finalResult.slice(-5)
        finalResult = finalResult.slice(0, 8)
        finalResult = Number(finalResult) + '...' + Number(ultimos4)
    }

    

}



