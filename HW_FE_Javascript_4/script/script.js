const wordsNames = [];
const root = document.querySelector('#root');
const form = document.querySelector('.form_names');

function addCard(wordname, wordlastname){
    const pElem = document.createElement('p');
    const divElem = document.createElement('div');
    divElem.classList.add('item');
    pElem.innerText = (`${wordname} ${wordlastname}`);
    divElem.append(pElem);
    root.append(divElem);
};

function rerender(){
    root.innerText = '';
    for (let i = 0; i < wordsNames.length; i++){
        addCard(wordsNames[i].Name, wordsNames[i].Lastname);
    };
};

form.addEventListener('submit', function(event){
    event.preventDefault();
    const formName = form.name;
    const formLastname = form.lastname;
    const newWord = {
        Name: formName.value,
        Lastname: formLastname.value
    };
    wordsNames.push(newWord);
    rerender();
    formName.value = '';
    formLastname.value = '';
});

rerender();