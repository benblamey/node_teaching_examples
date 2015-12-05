function doSomething(i, callback) {
  console.log(i, 'doSomething before callback');
  // this is in fact synchronous, since don't use nextTick
  callback();
  console.log(i, 'doSomething after callback');
  process.nextTick(function() {
    // you might think this yeilds to the next "doSomething",
    // but in fact it runs after everything else is done
    console.log(i, 'nextTick');
  });
}

function onDone() {
  console.log(i, 'done');
}

for (var i = 0; i < 5; i++) {
  doSomething(i, onDone);
}
