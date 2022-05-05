const tarea = document.getElementById('tarea');
const btnAdd = document.getElementById('btnAdd');
const lista = document.getElementById('lista');

/*
btnAdd.addEventListener('click', ()=> {
    alert('hola')
    const element = document.createElement('li');
    element.innerHTML = htmlCode;
    lista.appendChild(element);
});*/

function addItem(text) {
    const lista = document.getElementById('lista');
    let htmlCode =
        '<p class = "w-3/5 text-left">' + text + '</p>' +
        '<i data-task="done" class="fas fa-check mr-2"></i>' +
        '<i data-task="remove" clas="fas fa-trash">';

    const element = document.createElement('li');
    element.classList.add('flex', 'items-center');
    element.innerHTML = htmlCode;
    lista.appendChild(element);
}

function btnDone(e) {
    let elem = e.target;
    let elementTask = elem.dataset.task;
    if (elementTask === 'done') {
        const p = elem.parentNode.firstElementChild;
        p.classList.toggle('line-through');
    }else if (elementTask === 'remove') {
        const li = element.parentNode;
        lista.removeChild(li);
    }
}

lista.addEventListener('click', (e) => {
    console.log(e.target.dataset.task);
});

btnAdd.addEventListener('click', function (e) {
    alert('lo hace');
    const tarea = document.getElementById('tarea');
    addItem(tarea.value);
    tarea.value = '';
});

lista.addEventListener('click', (e) => btnDone(e));