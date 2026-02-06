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

let passwordLength = 15
let passOne = [];
let passTwo = [];

let symbols = true;
let numbers = true;
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
}

const passwordGen = () => {
    passwordType()
    for (let i = 0; i < passwordLength; i++) {
    let ranPassOne = Math.floor(Math.random() * typeOfPass.length);
    let ranPassTwo = Math.floor(Math.random() * typeOfPass.length);
    passOne += typeOfPass[ranPassOne];
    passTwo += typeOfPass[ranPassTwo];
    }
    return {
        one: passOne,
        two: passTwo
    };
}
const randomPassword = passwordGen();
console.log(randomPassword.one);
console.log(randomPassword.two);


