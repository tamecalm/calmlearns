// How a Node.js server handles two requests

function handleClientRequest(request) {
  makeDbCall(request.someInfo, function (result) {
  // The request corresponds to the correct db result because of closure
  request.complete(result);
  });
 }
  
 // Note that the HTTP request to the database is also managed by the event loop. The advantage of having 
 // async IO and why JavaScript + Node.js is a great fit for data-intensive applications should now be clear.