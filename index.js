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

let copyMessage = document.getElementById('copy-message');

let passwordLength;
const passwordLengthInput = document.getElementById('password-length');
passwordLengthInput.addEventListener('input', () => {
    passwordLength = passwordLengthInput.value;
});

let symbolText = document.getElementById('symbol-text');
let symbols = true;
const changeSymbol = () => {
    symbols = !symbols;
    console.log(symbols);
    if (symbols === false) {
        symbolText.textContent = 'Exclude Symbols';
    } else {
        symbolText.textContent = 'Include Symbols';
    }
}

let numberText = document.getElementById('number-text');
let numbers = true;
const changeNumber = () => {
    numbers = !numbers;
    console.log(numbers);
    if (numbers === false) {
        numberText.textContent = 'Exclude Numbers';
    } else {
        numberText.textContent = 'Include Numbers';
    }
}

let passOne = document.getElementById('password-one');
let passTwo = document.getElementById('password-two');

let typeOfPass;
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
};

const passwordGen = () => {
    randomPassOne = [];
    randomPassTwo = [];
    passwordType();
    for (let i = 0; i < passwordLength; i++) {
        let ranPassOne = Math.floor(Math.random() * typeOfPass.length);
        let ranPassTwo = Math.floor(Math.random() * typeOfPass.length);
        randomPassOne += typeOfPass[ranPassOne];
        randomPassTwo += typeOfPass[ranPassTwo];
    }
    passOne.textContent = randomPassOne;
    passTwo.textContent = randomPassTwo;
};

passOne.addEventListener('click', () => {
    navigator.clipboard.writeText(passOne.textContent)
    .then (() => {
        copyMessage.classList.remove('copied');
        setTimeout(() => {
        copyMessage.classList.toggle('copied');
        }, 2000);
        console.log('Password successfully copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy text', err);
    });    
});

passTwo.addEventListener('click', () => {
    navigator.clipboard.writeText(passOne.textContent)
    .then (() => {
        copyMessage.classList.remove('copied');
        setTimeout(() => {
        copyMessage.classList.toggle('copied');
        }, 2000);
        console.log('Password successfully copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy text', err);
    });    
});