
// CREO PROMPT PER INSERIRE LA PAROLA

let word = prompt('Inserisci qui la tua parola!');

// CREO LA FUNZIONE

function checkPalindromo() {

    // SETTO LA VARIABILE PER IL PALINDROMO DI WORD
    
    let palindromo = word.split('').reverse().join('');

    // SETTO I RETURN

    if (word == palindromo) {
        return true;
    }
    return false;
}

// CHIAMO LA FUNZIONE

let result = checkPalindromo();

// SETTO I RISULTATI DI RETURN

if(result) {
    console.log('è palindromo')
}

else {
    console.log('non è palindromo')
}
