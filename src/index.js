const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = addZeros(expr);

    const arr = [];

    while (expr.length > 0) {
        arr.push(expr.slice(0, 10));
        expr = expr.slice(10);
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let symbol = "";

        while (str.length > 0) {
            let sign = str.slice(0, 2);

            if(sign === "10") {
                symbol += ".";
            } else if (sign === "11") {
                symbol += "-";
            }

            str = str.slice(2);
        }

        result.push(symbol);
    }

    return result.map(el => {
        if(!el) {
            return " ";
        }

        return MORSE_TABLE[el];
    }).join("");
}

function addZeros(expr) {
    if (expr.length % 10) {
        let count = expr.length % 10;

        for (let i = 0; i < count; i++) {
            expr = 0 + expr;
        }

        return expr;
    } else {
        return expr;
    }
}

module.exports = {
    decode
}