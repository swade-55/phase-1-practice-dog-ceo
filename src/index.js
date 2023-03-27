//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchDogs(){
    //return fetch(imgUrl)
    return fetch(breedUrl)
    .then(res=>res.json())
    //.then(data=>renderCEO(data.message))
    .then(data=>fetchBreed(data.message))
}

// function renderCEO(dogs){
//     const main = document.getElementById('dog-breeds');
//     dogs.forEach(dog=>{
//         console.log(dog);
//         const image = document.createElement('img');
//         image.src = dog;
//         main.appendChild(image);
//     });
// }

document.addEventListener('DOMContentLoaded',function(){
    fetchDogs();
})

const breedUrl = "https://dog.ceo/api/breeds/list/all";


function fetchBreed(dogs){
    const main = document.querySelector('ul');
    for (const [key, value] of Object.entries(dogs)) {
        const dogBreed = document.createElement('li');
        dogBreed.innerHTML = key;
        var button = document.createElement("button");
        //dogBreed.appendChild(document.createTextNode("Four"));
        button.innerHTML = key;
        dogBreed.appendChild(button);
        button.addEventListener('click',()=>{
            button.style.color = 'blue';
        })
        main.appendChild(dogBreed);
      }
};

//Questions:
//how to merge the button to the unordered list
//how to add button functionality
//challenge 42