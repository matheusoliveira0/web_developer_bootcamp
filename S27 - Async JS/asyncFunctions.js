const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials'
    if (password === '555') return 'Welcome'
    throw 'Wrong password'
}

login('masth','555')
.then(msg => {
    console.log("Logged in!")
    console.log(msg)
})
.catch(err => {
    console.log("Error!")
    console.log(err)
})


// await keyword 

  const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
  }
/*
  colorChange('red',1000)
  .then(() => colorChange('orange',1000))
  .then(() => colorChange('yellow',1000))
  .then(() => colorChange('green',1000))
  .then(() => colorChange('cyan',1000))
  .then(() => colorChange('blue',1000))
  .then(() => colorChange('violet',1000))

  */

  async function rainbow() {
    await colorChange('red',1000)
    await colorChange('orange',1000)
    await colorChange('yellow',1000)
    await colorChange('green',1000)
    await colorChange('cyan',1000)
    await colorChange('blue',1000)
    await colorChange('purple',1000)
    
  }