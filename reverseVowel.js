//split the string into array
//find indices of all vowels in array
//iterate through half of index array
//swap values 
//return rejoined string

function reverseVowels(s) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr = s.split('');
    let vowelsArr = [];

    arr.forEach((char, ind) => {
        if (vowels.includes(char)) {
            vowelsArr.push(ind)
        }
    });

    for (let i=0; i<Math.floor((vowelsArr.length)/2 ); i++){
        let frontInd = vowelsArr[i];
        let backInd = vowelsArr[vowelsArr.length - 1 - i];
        let swap = arr[frontInd];
        arr[frontInd] = arr[backInd];
        arr[backInd] = swap;
    }

    return arr.join('');
}


console.log(reverseVowels('eeee'), 'should return eeee')
console.log(reverseVowels('AePSDIOcE'), ' AePSDIOcE should return EOPSDIecA')
console.log(reverseVowels('!!!ei!pr*do'), ' !!!ei!pr*do should return !!!oi!pr*de')