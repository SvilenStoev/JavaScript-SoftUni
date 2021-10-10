function addItem() {
    const itemToAdd = document.getElementById('newItemText');

    if (itemToAdd.value == '') {
        alert('The input is incorect!');
    }
    else {
        const liElement = document.createElement('li');
        liElement.textContent = itemToAdd.value;
    
        const aElement = document.createElement('a');
        aElement.href = '#';
        aElement.textContent = '[Delete]';
        liElement.appendChild(aElement);

        aElement.addEventListener('click', removeEl);

        document.getElementById('items').appendChild(liElement);

        function removeEl() {
            aElement.parentNode.remove();
        }
    }

    itemToAdd.value = '';
}