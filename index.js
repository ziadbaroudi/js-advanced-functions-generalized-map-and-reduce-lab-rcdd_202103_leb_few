// Add your functions here
<<<<<<< HEAD
function map(num, func){
  return num.map(func);
}

function reduce(num,func){
  return num.reduce(func);
}

=======
function number(num, func){
  return num.map(func);
}

>>>>>>> cea81bc26bedf16cee26a5ac9f4e4bbccafd41e8
function mapToSquare(x){
  return x * x;
}

<<<<<<< HEAD
function reduce(a, c, startingValue) {
  let total;
  if (startingValue) {
    total = startingValue;
    for (let i = 0; i < a.length; i++) {
      total = c(a[i], total);
    }
    return total;
  } else {
    total = a[0];
    for (let i = 1; i < a.length; i++) {
      total = c(a[i], total);
    }
    return total;
  }
}

map(num,double);
=======
return number(num,double);
>>>>>>> cea81bc26bedf16cee26a5ac9f4e4bbccafd41e8
