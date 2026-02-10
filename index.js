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

let symbolsEl = document.getElementById('symbols');
let symbols = true;
symbolsEl.addEventListener('click', () => {
    symbols = !symbols;
    changeStatus(symbols, symbolsEl, 'symbol-trans');
    console.log(symbols);
});

const changeStatus = (i, element, elmClass) => {
    if (i === false) {
        element.classList.add(elmClass);
    } else {
        element.classList.remove(elmClass);
    }
}

let numberEl = document.getElementById('numbers');
let numbers = true;
numberEl.addEventListener('click', () => {
    numbers = !numbers;
    changeStatus(numbers, numberEl, 'number-trans')
    console.log(numbers);
});

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
    navigator.clipboard.writeText(passTwo.textContent)
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