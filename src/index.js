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
    let arWordsExpr = expr.split('**********'); // break down by words
    let arWordsToLetters = [];
    let arItem = [];

    arWordsToLetters = 
    arWordsExpr.map(function(item){

      arItem = item.match(/.{1,10}/g); // break down by 10 symbols
      arItem =  arItem.map(element => element.replace(/00/g,'')); // replace 00 on ''
      arItem =  arItem.map(element => element.replace(/10/g,'.').replace(/11/g,'-'));
      arItem =  arItem.map(element => MORSE_TABLE[element]);
      
      return arItem;
    });
    
    let resStr = arWordsToLetters.map(element => element.join(''));
    return resStr.join(' ');
}

module.exports = {
    decode
}