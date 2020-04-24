const isOneEditString = (text: string, comparision: string): boolean => {
    if (
      comparision.length > text.length + 1 || comparision.length < text.length - 1
    ) {
      return false;
    }

    let communCharQuantity = 0;
  
    for (const char of comparision) {
      if (text.indexOf(char) !== -1) {
        communCharQuantity++;
      }
    }
    
    return (
      communCharQuantity <= text.length + 1 &&
      communCharQuantity >= text.length - 1
    );
};

console.log(isOneEditString("feijão", "feijãoa"))