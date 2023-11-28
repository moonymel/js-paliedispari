// CHIEDO UN NUMERO DA 1 A 5

let user_num = parseInt(prompt('Inserisci un numero da 1 a 5'));

// CREO UNA FUNZIONE PER IL NUMERO RANDOM DEL PC

function randomNumber() {
    let pc_num = Math.floor(Math.random() * 5 + 1);

    return pc_num;
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
        return true
    }

    return false
}

let check = oddOrEven(sum);

if(check == true) {
    console.log('la somma è pari')
}

else {
    console.log('la somma è dispari')
}