// CHIEDO UN NUMERO DA 1 A 5 E CHIEDO TRA PARI E DISPARI

let user_num = parseInt(prompt('Inserisci un numero da 1 a 5'));
let choice = prompt('Scegli "pari" o "dispari"?');

// CREO UNA FUNZIONE PER IL NUMERO RANDOM DEL PC

function randomNumber() {
    return Math.floor(Math.random() * 5 + 1);

}

// CHIAMO LA FUNZIONE

let pc_num = randomNumber(); 
console.log(user_num);
console.log(pc_num);

// CREO UNA VARIABILE PER LA SOMMA DEI NUMERI

let sum = user_num + pc_num;

// CREO UNA FUNZIONE DI CHECK PARI O DISPARI

function oddOrEven(sum) {
    if(sum%2 == 0){
        return 'pari'
    }

    return 'dispari'
}

// CHIAMO LA FUNZIONE DI CHECK

let check = oddOrEven(sum);

// SETTO I RISULTATI DI RITORNO

if(check == choice) {
    console.log('Hai vinto!')
}

else {
    console.log('Hai perso!')
}