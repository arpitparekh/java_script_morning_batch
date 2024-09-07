// async and await used in function defination
function fetchData() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(13);
    }, 3000)
    
  })

}

function fetchData2() {

  return new Promise((resolve, reject) => {
     resolve(14);
  })

}

console.log("Start");
console.log(await fetchData());  // 3 seconds
console.log(await fetchData2()); // 4 seconds
console.log("End");
