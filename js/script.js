
const itemsWrapper = document.querySelector('.items-wrapper');

const up = document.querySelector('.top');

const down = document.querySelector('.bottom');

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

for(let i = 0; i < images.length; i++){

    const image = images[i];

    itemsWrapper.innerHTML += `<img src="${image}" class= " w-100 h-100 object-fit-cover d-none item">`;
}


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

