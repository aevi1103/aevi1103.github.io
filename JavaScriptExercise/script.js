
const ul = document.querySelector('ul'),
    btn = document.querySelector('button');

let input = document.querySelector('#input');

const deleteItem = item => {
    item.addEventListener('click', (e) => {  
        e.target.parentNode.remove();
    });
}

const done = item => {
    item.addEventListener('click', (e) => {  
        e.target.classList.toggle('done');
    });
}

const createItem = () => {

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));

    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'delete'
    delBtn.classList.add('delete-me'); //just for css class
    li.appendChild(delBtn);

    ul.appendChild(li);
    input.value = '';
    input.focus();

    deleteItem(delBtn); //attach delete
    done(li); //attach done
}

btn.addEventListener('click', () => {
    input.value.length > 0 ? createItem() : false;
});

input.addEventListener('keypress', e => {
    (e.keyCode == 13 && this.value.length > 0) ? createItem() : false;
});

