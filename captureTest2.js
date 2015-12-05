
var myFunc = function() {
  var callback;
  var foo;
  var i;

  for (i = 0; i < 10; i++) {

      createCallback = function() {
        var j = i;

        callback = function() {
          console.log(j + " -- " + i);
        }
      };

      createCallback();

    // Add the function "callback" to the event loop queue.
    process.nextTick(callback);
  } // end of for loop

  console.log("i is: " + i)

}

myFunc();




/*
var name = "ben";

sayName = function() {
	console.log(name);
}

name = "dave";

sayName();

Output:
  Dave
*/
