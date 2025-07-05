//calback hell
/*
setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
    }, 3000);
  }, 2000);
}, 1000);

*/

const ColorChange = (newColor, delay, doNext) => {
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay)
} 

ColorChange('red',1000, ()=>{
    ColorChange('orange',1000, ()=>{
        ColorChange('yellow',1000)
    })
})