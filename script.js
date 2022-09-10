// DOG API
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

// runs instantly
console.log('Run 1st')

// grab html dogImage div
const dogImageDiv = document.getElementById('dogImage')
const getDogButton = document.getElementById('dogButton')

const getNewDog = () => {
// Fetch API DATA: stuff you have to wait for
fetch('https://dog.ceo/api/breeds/image/random')
  // convert data to JSON: {key: value} returns in object format
.then(response => response.json())
  // log converteddata
.then(json => {
// update DOM with new dog image
dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
})
  
}

// add listener
getDogButton.onclick = () => getNewDog()