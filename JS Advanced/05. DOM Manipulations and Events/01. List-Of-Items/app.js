function addItem() {
    const itemToAdd = document.getElementById('newItemText').value;

    if (itemToAdd == '') {
        alert('The input is incorect!');
    }
    else {
        const liElement = document.createElement('li');
        liElement.textContent = itemToAdd;
    
        document.getElementById('items').appendChild(liElement);
    }

    document.getElementById('newItemText').value = '';
}