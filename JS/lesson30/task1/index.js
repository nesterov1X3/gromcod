export const addImage = imgSrc => {
  const prom = new Promise((resolve, reject)=> {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page')
    containerElem.append(imgElem);
  
    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    }
    
    imgElem.addEventListener('load', onImageLoaded);
  
    imgElem.addEventListener('error', () => reject(new Error(('Image load failed'))))
  })
  return prom;
}
const imgSrc = 'https://server.com/image.png';
const result = addImage(imgSrc);
// console.log(result);

result.then(data => console.log(data))
result.catch(error => console.log(error))




// const onImageLoaded = (error, data) => {
//   if(error){
//     console.log(error);
//     return;
//   }
//   const {width, height} = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`
// }

//  addImage(imgSrc, onImageLoaded)