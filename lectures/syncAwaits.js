const fakeAPICall = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "goodurl") {
        resolve({ data: ["sally", "john"] });
      } else {
        reject({ error: "404 page not found" });
      }
    }, 2000);
  });
};

//NEW WAY async await (ES8 feature Very nice) function
const getData = async () => {
  try {
    // fakeAPICall returns a promise i use the await key word
    console.log("before api call"); // 2
    // actually blocks execution here
    let response = await fakeAPICall("goodurl"); // wait two seconds
    console.log("response:", response); // 6
  } catch (err) {
    console.log("err:", err); // if bad url
  }
};

// this program
console.log("before getData call"); // 1
getData();
console.log("after getData call"); // 3
console.log("continue to do other stuff in app"); // 4

//Old WAY .then.catch  same flow/behavior different syntax
// const getDataOldWay = async () => {
//     console.log('before getDataOldWay .then') //2
//     // wait until promise is fullfied/rejected
//     fakeAPICall('goodurl').then((response)=>{
//         console.log('in .then:') // 5
//         console.log('response:', response) //6
//     }).catch(err=>{
//         console.log('err:', err)
//     })
//   }

// console.log('before getDataOldWay call')  // 1
// getDataOldWay()
// console.log('after getDataOldWay call')  // 3
// console.log('continue to do other stuff in app')  // 4