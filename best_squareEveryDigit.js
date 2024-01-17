function squareDigits(n){
    return +(''+n).replace(/\d/g,m=>+m* +m)
  }