function squareDigits(num){
    a = num.toString().split("")
    return Number(a.map(i => Math.pow(i, 2)).join(""));
  }