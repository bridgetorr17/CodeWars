//input an array of two character strings
//output one of three strings, each on a new line
//  "Ready" on the first line
//  "Ordinary pair" if the pair is not the below pairs
//  "Mirrored pair" if the pair is db, bd, pq or qp
//the function should return when it encounters a string with two spaces

function mirroredPair(arr){
    const mirroredPairs = ['pq', 'qp', 'bd', 'db'];
    console.log('Ready')
    for (let i=0; i<arr.length; i++){
        if (mirroredPairs.includes(arr[i])) console.log('Mirrored pair')
        else if (arr[i] !== '  ') console.log('Ordinary pair');
        else return;
    }
}

console.log('TESTS');
mirroredPair(['ab','LD','bd','pq','jj','HH','db','qp','  ','pq'])
mirroredPair(['ab', '  ', 'pq'])