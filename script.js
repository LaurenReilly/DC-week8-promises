console.log("page loaded");

//creating a new promise OBJECT< beginnings of OOP
//promise starts as pending, then will be fulfilled
var myPromise = new Promise(function(resolve, reject) {
    //this is where you write your (possibly) aysnc code
    //must resolve or reject the promise inside here!!
    //you can do that using the resolve/reject parameters
    // resolve(); using this will make the promise resolve
    // reject(); this will reject the promise and so the .then callbacks will not run!
    console.log("hello");
    //after 3s run the code inside setTimeout
    setTimeout(function() {
        console.log("OH! Hey")
        resolve();
    }, 3000)
});


//.then is a function you call off of promise, pass callbacks to .then
//waits until promise is resolved to run the callbacks
myPromise.then(function(){
    console.log("the promise resolved");
});