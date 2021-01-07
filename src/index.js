console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function() {
  fetchDogPics();
  fetchDogBreeds();
});


function fetchDogPics() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => {
    for (const img of json.message) {
      let element = document.createElement('img');
      element.src = img;
      document.body.appendChild(element);
    }
  })
}

function fetchDogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => {
    const ul = document.getElementById('dog-breeds');
    const breeds = Object.keys(json)
    for (const breed in json.message) {
      const li = document.createElement('li');
      li.innerText = breed;
      ul.appendChild(li);
      li.addEventListener('click', () => {
        event.target.style.color = 'purple';
      })
    }
    addBreedSelectListener();
  })
}

function addBreedSelectListener() {
  const dropDown = document.getElementById('breed-dropdown')
  dropDown.addEventListener('change', updateBreedList)
}

function updateBreedList(event) {

}
