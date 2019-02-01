const fruitList = [
    'blueberry',
    'apples',
    'orange',
    'grape',
    'greenapple',
    'cheese'
];

const fruitButtonsAll = document.getElementById('fruit-buttons');
const mainBody = document.getElementById('caterpillar-body');
const danceButtonsAll = document.getElementById('dance-buttons');
  
for(let index = 0; index < fruitList.length; index++){
    let fruit = fruitList[index];
    
    const fruitButton = document.createElement('button');
    fruitButton.value = fruit;
    fruitButton.classList.add('fruit-button', fruit);
    fruitButton.textContent = fruit;
    
    fruitButton.addEventListener('click', function() {
        eat(fruit);
    });
    
    fruitButtonsAll.appendChild(fruitButton);

}

for(let index = 0; index < fruitList.length; index++){
    let fruit = fruitList[index];

    const danceButton = document.createElement('button');
    danceButton.value = fruit;
    danceButton.classList.add('dance-button', fruit);
    danceButton.textContent = fruit;

    danceButton.addEventListener('click', function(){
        remove();
        transform(fruit);
    });
    
    danceButtonsAll.appendChild(danceButton);
}

function eat(fruit) {
    const createBody = document.createElement('span');
    createBody.classList.add('add-body', fruit);
    mainBody.appendChild(createBody);
}

function transform(fruit){
    const selector = '.add-body.' + fruit;
    const selectedBody = document.querySelectorAll(selector);

    for(let index = 0; index < selectedBody.length; index++) {
        selectedBody[index].classList.add('transform');
    }
}

function remove(){
    const selectAll = document.querySelectorAll('.add-body');
    for(let index = 0; index < selectAll.length; index++) {
        selectAll[index].classList.remove('transform');
    }
}