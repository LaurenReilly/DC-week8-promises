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
        //promises resolve with some kind of value!
        resolve(50);
        //they can also be rejected with some kind of error value
        // reject("ooooops");
    }, 1000)
});


//.then is a function you call off of promise, pass callbacks to .then
//waits until promise is resolved to run the callbacks
myPromise.then(function(result) {
    console.log("the promise resolved");
    console.log("the result was " + result);
}).catch(function(error) {
    console.log(error);
});

var axiosPromise = axios.get("https://dog.ceo/api/breed/beagle/images/random");

axiosPromise.then(function(result) {
    console.log("the first dog is" + result.data.message);
    //another promise!
    return axios.get("https://dog.ceo/api/breed/beagle/images/random");
}).then(function(otherResult) {
    console.log("the next dog is " + otherResult.data.message);
}).catch(function(error) {
    console.log(error);
});

var dog1 = axios.get("https://dog.ceo/api/breed/beagle/images/random");
var dog2 = axios.get("https://dog.ceo/api/breed/beagle/images/random");
var dog3 = axios.get("https://dog.ceo/api/breed/beagle/images/random");

//takes an array of promises
Promise.all([dog1, dog2, dog3]).then(function(responses) {
    //once ALL resolve then the .then will run
    console.log(responses);
});

