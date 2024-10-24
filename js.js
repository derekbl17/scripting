'use strict';

//  1 parasyti funkcija kuri priima du skaicius ir grazina ju sandauga.
// atsakyma atspausdinti konsoleje.
///////////////////
function multi(numOne,numTwo){
    return numOne*numTwo
}
console.log(multi(5,5))


//  2 sukurti funkcija kuri priima metu menesi (1-12) ir grazina sezono pavadinmima
// atsakyma atspausdinti konsoleje
//////////////////
// V1
function seasoner(month){
    switch(month){
        case 12:
        case 1:
        case 2:
            console.log("winter")
            break;
        case 3:
        case 4:
        case 5:
            console.log("spring")
            break;
        case 6:
        case 7:
        case 8:
            console.log("summer")
            break;
        case 9:
        case 10:
        case 11:
            console.log("autumn")
            break;
        default:
            console.log("wrong input")
    }
}
seasoner(10);


// V2
// function seasonerV(monthy){
//     if (monthy==12||monthy==1||monthy==2)console.log("its Snowing!")
//     else if (monthy==3||monthy==4||monthy==5)console.log("Away with the snow!")
//     else if (monthy==6||monthy==7||monthy==8)console.log("Get the sunscreen out!")
//     else if (monthy==9||monthy==11||monthy==10)console.log("muddy..")
//     else console.log("BAD INPUT")
// }
// seasonerV('6');
// //



//   3  sukurtike programa kuri praso vartotojo ivesti savo amziu ir grazina atsakyma ar jis yra nepilnametis ar suauiges
// atsakyma pateikti su alert funkcija
//////////////
function olding(){
    let age = prompt("What is your age?")
    if (age<18)alert("Underage.")
    else if (age>=18)alert("Adult")
    else alert("wrong input")
}
olding();


// V2
// (function (){
//     let age = prompt("What is your age?")
//     if (age<18)alert("Underage.")
//     else if (age>=18)alert("Adult")
//     else alert("wrong input")
// })();
