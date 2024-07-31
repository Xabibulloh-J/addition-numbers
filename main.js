function additionNumbers(numbers) {
   var initialValue = 0;
   for (var num of numbers) {
      var positiveNumber = Math.abs(Math.round(num));
      initialValue += positiveNumber;
   }
   return initialValue;
}

var arrayNumbers  = [-2, 2, 3.7, 5, -22.3, 15];
console.log(additionNumbers(arrayNumbers));