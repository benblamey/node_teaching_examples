

function pascal(row, n)
{
  console.log(row);
  row = [0].concat(row);
  for (var i = 0; i < row.length - 1; i++) {
      row[i] = row[i] + row[i+1];
  }
  if (n > 0) {
    pascal(row, n-1)
  }
}


pascal([1], 10);
