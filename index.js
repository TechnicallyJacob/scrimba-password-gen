const allChars = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
     "!","@","#","$","%","^","&","*","(",")","_","-","+","=",
     "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const noNums = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const noSymbols = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const onlyChars = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

let passwordLength = document.getElementById('password-length').value;
console.log(passwordLength);

let passOne = document.getElementById('password-one');
let passTwo = document.getElementById('password-two');

let symbols = document.getElementById('symbols');
let numbers = document.getElementById('numbers');
let typeOfPass;

console.log(symbols)

symbols.addEventListener('click', changeStatus() => {

});

const changeStatus = () => {
console.log('hello')
}

const passwordType = () => {
    if (symbols && numbers) {
        typeOfPass = allChars;
    } else if (symbols === true && numbers === false) {
        typeOfPass = noNums;
    } else if (symbols === false && numbers === true) {
        typeOfPass = noSymbols;
    } else {
        typeOfPass = onlyChars;
    }
}

const passwordGen = () => {
    randomPassOne = [];
    randomPassTwo = [];
    passwordType()
    for (let i = 0; i < passwordLength; i++) {
    let ranPassOne = Math.floor(Math.random() * typeOfPass.length);
    let ranPassTwo = Math.floor(Math.random() * typeOfPass.length);
    randomPassOne += typeOfPass[ranPassOne];
    randomPassTwo += typeOfPass[ranPassTwo];
    }
    passOne.textContent = randomPassOne;
    passTwo.textContent = randomPassTwo;
}


