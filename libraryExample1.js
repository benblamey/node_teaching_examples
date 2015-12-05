//////////////////////////////////////////////
// pretend LIBRARY code

var beginFind = function(completionHandler) {

// Wait 1 second to retrieve from the DB...
  setTimeout(function() {

    var err = new Error("soem erro");


  if (!err) {
      var document = {a: 43};
    }

    completionHandler(err, document);

  }, 3000);


}

//////////////////////////////////////////////
// USER CODE

var callback = function(err, document) {
  console.log("err:");
  console.log(err);
  console.log("document:");
  console.log(document);

}

beginFind(callback);
console.log("finished.");
