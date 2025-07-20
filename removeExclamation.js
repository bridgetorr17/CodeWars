function removeExclamation(str) {
    //separate string into array by spaces
    let arr = str.split(' ');

    let arrRet = arr.map((word) => {
        let wordArr = word.split('');
        for(let i=wordArr.length-1; i>=0; i--){
            if(wordArr[i] === '!'){
                wordArr.pop();
            } else break;
        }

        return wordArr.join('');
    })

    return arrRet.join(' ');
}

console.log(removeExclamation('Exclamat!on!! !!E!'), 'should return: Exclamat!on !!E')
console.log(removeExclamation('!Exclamat!on!'), 'should return: !Exclamat!on')
console.log(removeExclamation('!Exclamat!on'), 'should return: !Exclamat!on')
console.log(removeExclamation('HI!!!!!'), 'should return: HI')