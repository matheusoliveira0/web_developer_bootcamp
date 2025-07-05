const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      }
      reject("Request error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request!");
    console.log("Data is: ", data);
  })
  .catch((err) => {
    console.log("Oh no! ", err);
  });


  const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
  }

  colorChange('red',1000)
  .then(() => colorChange('orange',1000))
  .then(() => colorChange('yellow',1000))
  .then(() => colorChange('green',1000))
  .then(() => colorChange('cyan',1000))
  .then(() => colorChange('blue',1000))
  .then(() => colorChange('violet',1000))


  //async functions