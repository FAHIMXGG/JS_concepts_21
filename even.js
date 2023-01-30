function isEven(number) {
    const remainder = number % 2;
    console.log(remainder);
    if (remainder === 0) {
        console.log('number is even');
    }
    else{
        console.log('Number is odd');
    }
}

isEven(699);