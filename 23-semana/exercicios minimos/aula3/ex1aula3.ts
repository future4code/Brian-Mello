const printIntegerNumbersAsc = (n: number) => {
    if (n >= 0) {
        printIntegerNumbersAsc(n - 1);
      console.log(n);
    }
  };
  
  const printIntegerNumbersDesc = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printIntegerNumbersDesc(n - 1);
    }
  };
  
  console.log(printIntegerNumbersDesc(10))
  console.log(printIntegerNumbersAsc(10))