function fizzBuzz(num) {
    //initialize fizzBuzz array
    let fizzBuzzArr = [];

    //iterate from 1 to num
    for(let i=1; i<num+1; i++){
        //if i%3
        if (i%3 === 0) {
            //if i%5
            if(i%5 === 0) {
                //add FizzBuzz
                fizzBuzzArr.push('FizzBuzz')
            }
            else {
                fizzBuzzArr.push('Fizz')
            }
        }
        else if (i%5 === 0){
            fizzBuzzArr.push('Buzz')
        }
        else {
            fizzBuzzArr.push(i)
        }
    }

    return fizzBuzzArr;
}