// asynchronous programming
// javascript is single threaded
// we have to asynchronous functions
// function that takes time to execute

// file handling
// network request // api
// database requests
// web scraping

// callback
// event handling
// promise
// async await

// callback
// function fetchData() {   // this function will tak etime to execute

//   // fix time method // will start code after 2 seconds

//   setTimeout(function () {
//     console.log("fetching data");
//   }, 2000)

// }

// console.log("Start");
// fetchData()
// console.log("End");

// promise
// promise is an object that may produce a single value in future

function fetchData2() {   // returns promise

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(12);
    }, 2000)

  })
}

function fetchData3() {   // returns promise
  return new Promise(function (resolve, reject) {   // one async process in one promise
  setTimeout(function () {
    resolve(13);
  },3000)
})
}

console.log("start");

fetchData2().then(function (value) {
  console.log(value);

  fetchData3().then(function (value) {

    console.log(value);
  })

})
console.log("end");

