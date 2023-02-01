function getSum(numbers) {
    //console.log(numbers);
    let sum  = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
        
    }
     return sum;
    
}

const myNumbers = [23, 323, 534, 23, 43, 53, 55];
getSum(myNumbers);
