let code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}

let dec0de = {
  '1': 'a',
  '2': 'e',
  '3': 'i',
  '4': 'o',
  '5': 'u',
}

function encode(string) {
  return string.split('').map(letter => {
    if(Object.keys(code).includes(letter)) return code[letter];
    else return letter;
  }).join('')
}

function decode(string) {
  return string.split('').map(letter => {
    if(Object.keys(dec0de).includes(letter)) return dec0de[letter];
    else return letter;
  }).join('')
}