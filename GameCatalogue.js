let id= 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('game-title').value;
    row.insertCell(1).innerHTML = document.getElementById('platform').value;
    row.insertCell(2).innerHTML = document.getElementById('date-completed').value;
    row.insertCell(3).innerHTML = document.getElementById('my-review').value;
    let actions = row.insertCell(4);
    document.getElementById('game-title').value= '';
    document.getElementById('platform').value = '';
    document.getElementById('my-review').value = '';
    document.getElementById('date-completed').value = '';
})

