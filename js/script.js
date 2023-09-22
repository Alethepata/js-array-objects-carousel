
const itemsWrapper = document.querySelector('.items-wrapper');

const up = document.querySelector('.top');

const down = document.querySelector('.bottom');

// const images = [
//     'img/01.webp',
//     'img/02.webp',
//     'img/03.webp',
//     'img/04.webp',
//     'img/05.webp'
// ]

// for(let i = 0; i < images.length; i++){

//     const image = images[i];

//     itemsWrapper.innerHTML += `<img src="${image}" class= " w-100 h-100 object-fit-cover d-none item">`;
// }

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

images.forEach((images)=>{
    const img = images.image;
    const title = images.title;  
    const text = images.text;  
})




let counter = 0;

const itemsCollection = document.getElementsByClassName('item');

itemsCollection[counter].classList.remove('d-none');

down.classList.add('d-none');


up.addEventListener('click', next);

down.addEventListener('click', prev);


function next(){
nextPrev(true);
}
function prev(){
    nextPrev(false);
}


function nextPrev(isNext){

    itemsCollection[counter].classList.add('d-none');

    if(isNext){

        counter++;
    
        down.classList.remove('d-none');
    
        if(counter === itemsCollection.length - 1){
    
            up.classList.add('d-none');
        }

    }else{

        counter--;

        if(counter === 0){
    
            down.classList.add('d-none');
            up.classList.remove('d-none');
    
        }
    }

    itemsCollection[counter].classList.remove('d-none');

}

