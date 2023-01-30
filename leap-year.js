function leapyear(year) {
    const remainder = year % 4;
    console.log(remainder);
    if (remainder === 0) {
        console.log(year, 'is leap year');
    }
    else{
        console.log(year, 'is not leap year');
    }
}

leapyear(543);