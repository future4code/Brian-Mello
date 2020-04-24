const sumIntegerNumbers = (n: number, sum: number = 0): number => {
    if(n === 0){
        return sum
    }
    return sumIntegerNumbers(n-1, sum + n)
}

console.log(sumIntegerNumbers(5))