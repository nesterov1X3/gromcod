export const delay = time => {
  const pr = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Done')
  }, time)
})
return pr
}

delay(3000)
.then(() => console.log('Done'));
