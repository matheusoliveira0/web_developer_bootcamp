function fakeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500; // Delay entre 500ms e 5000ms
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
}


fakeRequestPromise('yelp.com/api/coffee/page1')
.then(() => {
    console.log("It works! (page01)" )
    return fakeRequestPromise('yelp.com/api/coffee/page2')
})
.then(() =>{
     console.log("It works! (page02)" )
    return fakeRequestPromise('yelp.com/api/coffee/page3')
})
.then(()=> {
     console.log("It works! (page03)" )
})
.catch(() => {
    console.log("Oh no, a request failed!")
})