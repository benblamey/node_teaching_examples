
function sumProcedural(values) {
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}

function sumFunctional(values) {
  if (values.length == 1) return values[0];
  return values.pop() + sumFunctional(values);
}

console.log(sumProcedural([1,2]));
console.log(sumFunctional([1,2]));
